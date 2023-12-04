import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Nav/Nav'
import Background from '/pattern-circles.svg'
import AboutCard from '../../components/AboutCard/AboutCard'
import useResponsiveImage from '../../hooks/useResponsiveImage'
import ZX9Mobile from './images/mobile/image-speaker-zx9.png'
import ZX7Mobile from './images/mobile/image-speaker-zx7.jpg'
import YX1Mobile from './images/mobile/image-earphones-yx1.jpg'
import ZX9Tablet from './images/tablet/image-speaker-zx9.png'
import ZX7Tablet from './images/tablet/image-speaker-zx7.jpg'
import YX1Tablet from './images/tablet/image-earphones-yx1.jpg'
import ZX9Desktop from './images/desktop/image-speaker-zx9.png'
import ZX7Desktop from './images/desktop/image-speaker-zx7.jpg'
import YX1Desktop from './images/desktop/image-earphones-yx1.jpg'
import styles from './Home.module.css'

export default function Home() {
  const imageSize = useResponsiveImage({
    mobileMax: '(max-width: 480px)',
    tabletMax: '(max-width: 768px)'
  })

  return (
    <main
      className={styles.main}
    >

      <Hero />

      <Nav />

      <section
        className={styles.products}
      >

        <div
          className={styles.featured_product}
        >

          <div
            className={styles.img_container}
          >

            <img
              src={Background}
              alt=''
              className={styles.background}
            />

            <img
              src={FEATURED_IMAGES[imageSize].zx9}
              alt='zx9'
              width='50%'
              height='auto'
            />

          </div>

          <h2>
            ZX9<br />SPEAKER
          </h2>

          <p>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>

          <Button
            variant='solid'
            color='black'
          >

            <Link
              to='/speakers/zx9-speaker'
            >
              SEE PRODUCT
            </Link>

          </Button>

        </div>

        <div
          className={styles.second_product}
          style={{
              backgroundImage: `url(${FEATURED_IMAGES[imageSize].zx7})`
          }}
        >

          <h4>
              ZX7 SPEAKER
          </h4>

          <Button
              variant='outline'
          >

              <Link
                  to='/speakers/zx7-speaker'
              >
                  SEE PRODUCT
              </Link>

          </Button>

        </div>

        <div
          className={styles.third_product}
        >

          <img
            src={FEATURED_IMAGES[imageSize].yx1}
            alt=""
          />

          <div>

            <h4>
              YX1 EARPHONES
            </h4>

            <Button
              variant='outline'
            >

              <Link
                to='/earphones/yx1-earphones'
              >
                SEE PRODUCT
              </Link>

            </Button>

          </div>
          
        </div>

      </section>

      <AboutCard />

    </main>
  )
}

const FEATURED_IMAGES = {
  mobile: {
    zx9: ZX9Mobile,
    zx7: ZX7Mobile,
    yx1: YX1Mobile
  },
  tablet: {
    zx9: ZX9Tablet,
    zx7: ZX7Tablet,
    yx1: YX1Tablet
  },
  desktop: {
    zx9: ZX9Desktop,
    zx7: ZX7Desktop,
    yx1: YX1Desktop
  }
}
