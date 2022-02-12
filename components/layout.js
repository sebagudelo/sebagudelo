import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import SignupForm from '../components/SignupForm';

const name = 'Seb Agudelo'
export const siteTitle = 'Seb Agudelo - Growth, Startups, The Web'
const seb = 'Back to home'
const gsw = 'Growth Leader'
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        
        <meta property="description" content="Writing stuff" />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:locale" content="website" />
        <meta property="og:type" content="en_US" />
        <meta property="og:URL" content="https://sebagudelo.com" />
        <meta property="og:title" content={siteTitle} />
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>

      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />

            <h1 className={utilStyles.heading2Xl}>{name} </h1>
            <h1 className={utilStyles.headingLg}>{gsw} </h1>
            <h1 className={utilStyles.headingMd}>{<p><a href="https://twitter.com/sebagudelo" target="_blank" rel="noopener noreferrer">Twitter |</a> 
            <a href="https://linkedin.com/in/sebagudelo" target="_blank" rel="noopener noreferrer"> LinkedIn |</a> <a href="mailto:hi@sebagudelo .com">Email </a></p>
}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingMd}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{seb}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          </div>
      )}
    </div>
  )
}
