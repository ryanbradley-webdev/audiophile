import useResponsiveImage from '../../hooks/useResponsiveImage'
import styles from './AboutCard.module.css'

export default function AboutCard() {
  const imgSize = useResponsiveImage({
    mobileMax: '(max-width: 480px)',
    tabletMax: '(max-width: 768px)'
  })

  return (
    <section
      className={styles.card}
    >

      <img
        src={`/image-best-gear-${imgSize}.jpg`}
        alt=""
      />

      <h3>
        BRINGING YOU THE <span>BEST</span> AUDIO GEAR
      </h3>

      <p>
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
      </p>
        
    </section>
  )
}
