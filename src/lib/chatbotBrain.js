import { company, contact, products, categoryCount, team } from '../data/siteContent'

// Longest aliases first so "chana dal" wins over "chana".
const aliasIndex = products
  .flatMap((product) => product.aliases.map((alias) => ({ alias, product })))
  .sort((a, b) => b.alias.length - a.alias.length)

function matchProducts(text) {
  const found = []
  for (const { alias, product } of aliasIndex) {
    if (text.includes(alias) && !found.includes(product)) found.push(product)
  }
  return found
}

function priceLine(product) {
  return `• **${product.name}**: KSh ${product.price} per 1 kg pack (${product.category})`
}

function categoryLines() {
  return ['Beans', 'Lentils', 'Maize', 'Split', 'Whole']
    .map((category) => {
      const names = products
        .filter((p) => p.category === category)
        .slice(0, 3)
        .map((p) => p.name.replace(/\s*\(.*\)/, ''))
        .join(', ')
      return `• **${category}** (${categoryCount(category)}): ${names}`
    })
    .join('\n')
}

// Returns { text, action? } where action 'whatsapp' renders a WhatsApp handoff button.
export function getBotReply(rawText) {
  const text = rawText.toLowerCase().trim()

  if (/^(hi|hello|hey|jambo|habari|mambo|good (morning|afternoon|evening))\b/.test(text)) {
    return {
      text: 'Jambo, karibu! You are talking to the Golden Grains desk in Machakos.\nAsk me for any product price, our bulk export terms, or how to reach the team. What can I look up for you?',
    }
  }

  if (/thank|asante/.test(text)) {
    return {
      text: 'Karibu sana! Anything else you would like to check, just ask. The catalogue is all here with me.',
    }
  }

  const matched = matchProducts(text)
  if (matched.length > 0) {
    const lines = matched.slice(0, 4).map(priceLine).join('\n')
    const single = matched.length === 1
    return {
      text: `${single ? 'Good choice. Here it is:' : 'We have a few that match:'}\n${lines}\nThat is the 1 kg retail pack price. For bulk volumes the sales desk will quote you directly, and they are quick about it.`,
      action: 'whatsapp',
    }
  }

  if (/(product|supply|sell|stock|catalog|range|offer|what do you (have|do))/.test(text)) {
    return {
      text: `We mill and trade **18 product lines** across five categories:\n${categoryLines()}\nEverything is export graded and packed here in Machakos. Ask me about any of them for the price.`,
    }
  }

  if (/(bulk|wholesale|container|tonne|ton\b|export|import|large order|distributor)/.test(text)) {
    return {
      text: 'Bulk is exactly what we do. A quick picture of how it works:\n• **Packaging**: 1 kg retail pouches up to 100 kg export sacks\n• **Grading**: cleaned and graded to international export standards\n• **Paperwork**: export documentation and freight handled by us\nTell the sales desk your product and volume on WhatsApp and they will quote you.',
      action: 'whatsapp',
    }
  }

  if (/(pack|packaging|sack|pouch|kg\b|kilo)/.test(text)) {
    return {
      text: 'Packaging is flexible:\n• **Retail**: branded 1 kg pouches, like the ones on this page\n• **Mid-size**: distributor packs to your spec\n• **Bulk**: export sacks up to 100 kg\nIf you have a specific pack size in mind, the team will match it.',
    }
  }

  if (/(deliver|shipping|ship\b|logistics|freight|port)/.test(text)) {
    return {
      text: 'We handle the full journey ourselves: cleaning, packing, export documentation, and freight coordination. That covers local delivery within Kenya and international export shipments.',
    }
  }

  if (/(where|location|address|visit|office|mill\b|based)/.test(text)) {
    return {
      text: `You will find us at **${contact.address}** (${contact.poBox}).\nTrade visits are welcome ${contact.hours}. Karibu!`,
    }
  }

  if (/(hour|open|time|when)/.test(text)) {
    return { text: `The team is at the desk **${contact.hours}**, East Africa Time.` }
  }

  if (/(contact|phone|call|email|reach|speak|talk)/.test(text)) {
    return {
      text: `Three ways to reach us:\n• **Call**: ${contact.phoneDisplay}\n• **Email**: ${contact.email}\n• **WhatsApp**: fastest for quotes, tap below`,
      action: 'whatsapp',
    }
  }

  if (/(quote|price|cost|how much|rate)/.test(text)) {
    return {
      text: 'Name any product and I will pull its price straight away, for example "chana dal" or "kamande".\nFor bulk quantities, add products to your inquiry list on this page and send the whole list to us on WhatsApp in one tap.',
    }
  }

  if (/(team|ceo|founder|director|owner|who runs)/.test(text)) {
    const lines = team.map((t) => `• **${t.name}**: ${t.role}`).join('\n')
    return { text: `Golden Grains is a family-run mill. The people behind it:\n${lines}` }
  }

  if (/(about|company|who are you|history|narayan)/.test(text)) {
    return {
      text: `${company.about[0]}\nWe trade as **${company.legalName}**, based in Machakos, Kenya.`,
    }
  }

  if (/(pay|payment|visa|card|mpesa|m-pesa)/.test(text)) {
    return {
      text: 'The online shop takes **Visa** card payments. For trade and bulk orders, payment terms are agreed directly with the sales team, so mention your preference when you ask for a quote.',
    }
  }

  if (/whatsapp/.test(text)) {
    return { text: 'Tap below and you will be chatting with the sales desk in seconds.', action: 'whatsapp' }
  }

  return {
    text: 'I can help you with:\n• **Prices**: try "price of kamande" or "chana dal"\n• **Bulk and export**: packaging, grading, freight\n• **Reaching us**: phone, email, directions to the mill\nWhat would you like to know?',
  }
}

export const welcomeMessage = {
  text: 'Jambo! I am the Golden Grains assistant, answering straight from our Machakos catalogue.\nAsk me for any product price, bulk export terms, or how to find us.',
}
