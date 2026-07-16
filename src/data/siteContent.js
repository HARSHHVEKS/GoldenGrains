// All content sourced from goldengrains.net (pages + WooCommerce store API, July 2026).

export const company = {
  name: 'Golden Grains',
  legalName: 'Narayan Millers Ltd.',
  tagline: 'Export-grade grains & pulses, packed in Machakos, Kenya.',
  about: [
    'Goldengrains is a Kenya-based import and export company specialising in premium grains, pulses, lentils, and beans. We work closely with trusted growers and processing partners to ensure consistent quality, proper grading, and international export standards.',
    'With flexible packaging solutions ranging from retail packs to bulk export sacks, we supply wholesalers, distributors, and global markets with reliable agricultural products backed by strict quality control and professional logistics.',
  ],
}

export const contact = {
  phoneDisplay: '+254 789 910 033',
  phoneHref: 'tel:+254789910033',
  email: 'info@goldengrains.net',
  address: 'Narayan Millers Ltd., Mlolongo Road, Machakos, Kenya',
  poBox: 'P.O. Box 39864-00623',
  hours: 'Mon–Fri, 9:00 AM – 7:00 PM',
  mapLink: 'https://maps.google.com/?q=Narayan+Millers+Limited,+Mlolongo+Road,+Machakos,+Kenya',
  instagram: 'https://www.instagram.com/goldengrains',
  instagramHandle: '@goldengrains',
}

export function whatsappLink(message) {
  return `https://wa.me/254789910033?text=${encodeURIComponent(message)}`
}

export const defaultWhatsappMessage =
  'Hello Golden Grains, I would like to ask about your grains and pulses.'

// Prices are the listed retail price per 1 kg pack (bulk pricing by quote).
export const products = [
  { id: 'GG-01', name: 'Black Beans', desc: 'Premium black beans', category: 'Beans', price: 200, image: '/products/black-beans.png', aliases: ['black bean'] },
  { id: 'GG-02', name: 'Red Kidney Beans', desc: 'Export grade kidney beans', category: 'Beans', price: 215, image: '/products/red-kidney-beans.png', aliases: ['kidney', 'rajma'] },
  { id: 'GG-03', name: 'Ross-Coco Beans', desc: 'Premium rosecoco beans', category: 'Beans', price: 255, image: '/products/ross-coco-beans.png', aliases: ['rosecoco', 'ross-coco', 'ross coco', 'coco bean'] },
  { id: 'GG-04', name: 'Yellow Beans', desc: 'Premium yellow beans', category: 'Beans', price: 215, image: '/products/yellow-beans.png', aliases: ['yellow bean'] },
  { id: 'GG-05', name: 'Green Lentils (Kamande)', desc: 'Whole green lentils', category: 'Lentils', price: 303, image: '/products/green-lentils.png', aliases: ['kamande', 'green lentil', 'lentil'] },
  { id: 'GG-06', name: 'Urad Dal', desc: 'Premium split black gram', category: 'Lentils', price: 290, image: '/products/urad-dal.png', aliases: ['urad dal', 'urad'] },
  { id: 'GG-07', name: 'Maize Popcorn', desc: 'High expansion popcorn maize', category: 'Maize', price: 250, image: '/products/maize-popcorn.png', aliases: ['popcorn', 'maize', 'corn'] },
  { id: 'GG-08', name: 'Chana Dal', desc: 'Split premium chickpeas', category: 'Split', price: 185, image: '/products/chana-dal.png', aliases: ['chana dal'] },
  { id: 'GG-09', name: 'Green Gram Split (Moong Dal Split)', desc: 'Split moong dal', category: 'Split', price: 170, image: '/products/black-gram.png', aliases: ['moong dal split', 'moong split', 'green gram split'] },
  { id: 'GG-10', name: 'Green Gram Split & Peeled (Moong Dal Washed)', desc: 'Washed moong dal', category: 'Split', price: 225, image: '/products/black-gram.png', aliases: ['moong dal washed', 'washed moong', 'peeled moong'] },
  { id: 'GG-11', name: 'Tuver Dal', desc: 'Split pigeon peas', category: 'Split', price: 290, image: '/products/tuver-dal.png', aliases: ['tuver', 'toor', 'pigeon pea'] },
  { id: 'GG-12', name: 'Tuver Dal – Oily', desc: 'Premium oily tuver dal', category: 'Split', price: 310, image: '/products/tuver-dal.png', aliases: ['oily tuver', 'oily toor'] },
  { id: 'GG-13', name: 'Black Gram', desc: 'Whole black gram', category: 'Whole', price: 160, image: '/products/black-gram.png', aliases: ['black gram'] },
  { id: 'GG-14', name: 'Chana', desc: 'Whole premium chickpeas', category: 'Whole', price: 150, image: '/products/chana.png', aliases: ['chana', 'chickpea', 'garbanzo'] },
  { id: 'GG-15', name: 'Nylon Green Gram', desc: 'Natural whole green gram', category: 'Whole', price: 165, image: '/products/nylon-green-gram.png', aliases: ['nylon green gram', 'nylon'] },
  { id: 'GG-16', name: 'Nylon Green Gram – Polish', desc: 'Polished premium green gram', category: 'Whole', price: 175, image: '/products/nylon-green-gram-polish.png', aliases: ['polish', 'polished green gram'] },
  { id: 'GG-17', name: 'Ordinary Green Gram', desc: 'Natural whole green gram', category: 'Whole', price: 160, image: '/products/ordinary-green-gram.png', aliases: ['ordinary green gram', 'green gram', 'moong'] },
  { id: 'GG-18', name: 'Urdal Gota', desc: 'Whole black gram pulses', category: 'Whole', price: 290, image: '/products/urdal-gota.png', aliases: ['urdal gota', 'gota', 'urdal'] },
]

export const categories = ['All', 'Beans', 'Lentils', 'Maize', 'Split', 'Whole']

export function categoryCount(category) {
  if (category === 'All') return products.length
  return products.filter((p) => p.category === category).length
}

export const heroFeatured = ['GG-05', 'GG-01', 'GG-06']

export const values = [
  {
    title: 'Export-grade quality',
    detail: 'Every lot is graded to international export standards before it leaves the mill.',
  },
  {
    title: 'Strict cleaning & control',
    detail: 'Cleaning, grading, and inspection on every batch, with no shortcuts between farm and sack.',
  },
  {
    title: 'Retail to bulk packaging',
    detail: 'From 1 kg branded pouches to 100 kg export sacks, packed to distributor requirements.',
  },
  {
    title: 'Reliable global supply',
    detail: 'A strong sourcing network and professional logistics keep international deliveries on time.',
  },
]

export const facts = [
  { value: '18', label: 'Product lines' },
  { value: '5', label: 'Grain categories' },
  { value: '1–100 kg', label: 'Pack range' },
  { value: '9 AM – 7 PM', label: 'Mon–Fri support' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Source & grade',
    detail:
      'We buy from trusted growers and processing partners, then clean and grade every lot to export standards.',
  },
  {
    step: '02',
    title: 'Pack & verify',
    detail:
      'Each batch is inspected and packed to order, from 1 kg retail pouches to 100 kg bulk export sacks.',
  },
  {
    step: '03',
    title: 'Ship & support',
    detail:
      'Documentation, logistics, and communication handled end to end, for local delivery or international export.',
  },
]

export const team = [
  {
    name: 'Arvind Bhudia',
    role: 'Chief Executive Officer',
    initials: 'AB',
    blurb: 'Leads the mill and its trade partnerships, from Machakos to buyers across the region and overseas.',
  },
  {
    name: 'Naran Bhudia',
    role: 'Chief Marketing Officer',
    initials: 'NB',
    blurb: 'Looks after the Golden Grains brand and how new buyers discover and work with the mill.',
  },
  {
    name: 'Ramesh Bhudia',
    role: 'Chief Financial Officer',
    initials: 'RB',
    blurb: 'Keeps pricing, payments, and trade terms dependable for every wholesale and export order.',
  },
]

export const testimonials = [
  {
    name: 'David Mwangi',
    role: 'Procurement Director, EastAfrica Food Distributors Ltd.',
    quote:
      'Goldengrains has been a reliable supplier for our bulk grain imports. Their quality consistency and professional export documentation make international trade seamless.',
  },
  {
    name: 'Amina Hassan',
    role: 'Head of Supply Chain, Global Pulses Trading Co.',
    quote:
      'We have partnered with Goldengrains for large-volume pulse shipments, and their product quality has always met our specifications. Their packaging flexibility makes them a dependable long-term partner.',
  },
  {
    name: 'James Otieno',
    role: 'Managing Director, Prime Agro Imports',
    quote:
      'Goldengrains delivers premium-grade lentils and beans with excellent consistency across shipments. Their team understands the importance of quality assurance in global trade.',
  },
  {
    name: 'Sarah Patel',
    role: 'Senior Buyer, Continental Food Processing Ltd.',
    quote:
      'Our company relies on bulk grain imports for production, and Goldengrains has consistently provided clean, well-graded products that meet international quality benchmarks.',
  },
]

export const faq = [
  {
    q: 'Do you supply internationally?',
    a: 'Yes. Import and export is our core trade. We handle grading, export documentation, and freight coordination for international shipments out of Kenya, alongside local delivery.',
  },
  {
    q: 'What packaging sizes are available?',
    a: 'From branded 1 kg retail pouches up to 100 kg bulk export sacks, with pack sizes customised to distributor and wholesale requirements.',
  },
  {
    q: 'How do I get a bulk or wholesale quote?',
    a: 'Add the products you need to your inquiry list and send it to us on WhatsApp in one tap. You can also call +254 789 910 033 or email info@goldengrains.net. The team responds Mon–Fri, 9 AM to 7 PM.',
  },
  {
    q: 'What do the prices on this site mean?',
    a: 'Listed prices are for the 1 kg retail pack of each product. Bulk and wholesale volumes are always quoted separately based on quantity and packaging.',
  },
  {
    q: 'Where is the mill located?',
    a: 'Narayan Millers Ltd., Mlolongo Road, Machakos, Kenya (P.O. Box 39864-00623). Trade visits are welcome Mon–Fri, 9 AM to 7 PM.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'The online shop accepts Visa card payments. For trade and bulk orders, payment terms are agreed directly with the sales team.',
  },
]

export const chatQuickReplies = [
  'What do you supply?',
  'Price of chana dal?',
  'Do you handle bulk export?',
  'Where are you located?',
]
