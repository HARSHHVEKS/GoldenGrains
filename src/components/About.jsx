import { CheckmarkBadge01Icon, SecurityCheckIcon, PackageIcon, DeliveryTruck02Icon } from 'hugeicons-react'
import SectionHeading from './SectionHeading'
import CountUp from './CountUp'
import { GrainMark } from './Icons'
import { company, values, facts } from '../data/siteContent'

const valueIcons = [CheckmarkBadge01Icon, SecurityCheckIcon, PackageIcon, DeliveryTruck02Icon]

function About() {
  return (
    <section id="about" className="section section-tint">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-lead">
            <SectionHeading
              eyebrow="Karibu · About the mill"
              title="A family mill in Machakos, trading with the world"
              description={company.about[0]}
            />
            <p className="about-extra reveal">{company.about[1]}</p>

            <div className="about-signature reveal">
              <span className="about-signature-mark" aria-hidden>
                <GrainMark size={26} frame="transparent" />
              </span>
              <div className="about-signature-text">
                <strong>Narayan Millers Ltd.</strong>
                <span>Family-run since the first sack</span>
              </div>
            </div>
          </div>

          <ul className="value-list">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? CheckmarkBadge01Icon
              return (
                <li key={value.title} className="reveal" style={{ transitionDelay: `${index * 70}ms` }}>
                  <span className="value-check" aria-hidden>
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.detail}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <dl className="facts-strip reveal">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dd>
                <CountUp value={fact.value} />
              </dd>
              <dt>{fact.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About
