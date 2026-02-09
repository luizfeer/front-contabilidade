import Button from '../ui/Button/Button'
import styles from './HeroSection.module.css'
import typography from '../../styles/typography.module.css'
import videoThumbnail from '../../assets/images/thumb.jpg'

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.blur} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`${typography.title}`}>Quanto custa</span>
          <span className={`${typography.title}`}>a contabilidade</span> 
          <span className={`${typography.title}`}>em 2026?</span>

          <p className={styles.description}>
            Descubra os preços médios do mercado
            e veja como a contabilidade.com oferece planos acessíveis, abertura grátis e suporte completo
            para o seu CNPJ.
          </p>

          <div className={styles.buttons}>
            <Button variant="primary" href="#planos">
              Planos e Preços
            </Button>
            <Button variant="outline" href="#especialista">
              Falar com Especialista
            </Button>
          </div>

          <p className={styles.crc}>CRC SP-2SP038830/O-1</p>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoThumbnail} aria-label="Thumbnail de vídeo de apresentação">
            <img src={videoThumbnail} alt="Thumbnail de vídeo de apresentação" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
