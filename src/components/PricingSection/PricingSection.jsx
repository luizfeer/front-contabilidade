
import IconAbertura from '../../assets/icons/mdi_cash-off.svg?react'
import IconCertificado from '../../assets/icons/ph_certificate.svg?react'
import IconNotas from '../../assets/icons/hugeicons_note.svg?react'
import IconPlataforma from '../../assets/icons/solar_laptop-linear.svg?react'
import IconAtendimento from '../../assets/icons/ms_agent-sharp.svg?react'

import FeatureItem from '../FeatureItem/FeatureItem'
import Button from '../ui/Button/Button'
import officeImg from '../../assets/images/office.jpg'
import styles from './PricingSection.module.css'
import typography from '../../styles/typography.module.css'

const features = [
  { icon: IconAbertura, text: 'Abertura de empresa grátis (sem taxas de honorários).' },
  { icon: IconCertificado, text: 'Certificado digital incluso no 1º ano.' },
  { icon: IconNotas, text: 'Emissor de notas fiscais integrado.' },
  { icon: IconPlataforma, text: 'Plataforma contábil online com fluxo de caixa, lançamentos, relatórios e controle de impostos.' },
  { icon: IconAtendimento, text: 'Atendimento personalizado (WhatsApp, telefone, e-mail e vídeo)' },
]

function PricingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${typography.title} ${styles.title}`}>
          <span className={styles.titleLine}>Na contabilidade.com,</span>
          <span className={styles.titleLine}>você tem planos a partir</span>
          <span className={styles.titleLine}>de <strong>R$ 159/mês</strong>, já com:</span>
        </h1>

        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src={officeImg}
              alt="Profissional trabalhando em escritório com notebook"
              className={styles.image}
            />
          </div>

          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                text={feature.text}
                index={index}
              />
            ))}
          </ul>
        </div>

        <div className={styles.ctaWrapper}>
          <Button variant="primary" href="#planos">
            Conheça os planos e preços
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
