import SectionHeading from './SectionHeading'
import { processSteps } from '../data/siteContent'

function Process() {
  return (
    <section id="process" className="section section-dark process">
      <div className="wrap">
        <SectionHeading
          eyebrow="Shamba hadi meli · Field to freight"
          title="Three steps between the farm and your warehouse"
        />

        <ol className="process-grid">
          {processSteps.map((step, index) => (
            <li key={step.step} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="process-num">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
