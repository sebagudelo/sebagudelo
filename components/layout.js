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
export default function Layout({ children, home, postData }) {
  console.log(postData)
  const pageTitle = postData ? postData.title : siteTitle;
  return (
    <div className={styles.container}>
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        
        <meta property="og:title" content={siteTitle} key="site-title"/>
        <meta property="description" content="" key="site-description"/>
        <meta property="og:locale" content="website" key="site-locale"/>
        <meta property="og:type" content="en_US" key="site-type"/>
        <meta property="og:URL" content="https://sebagudelo.com" key="site-URL" />
        <meta property="og:image" content="/images/profile.jpg" key="site-image" />
      
        <meta property="og:url" content="https://sebagudelo.com/" key="facebook-title"/>
        <meta property="og:type" content="website" key="facebook-type"/>
        <meta property="og:title" content={siteTitle} key="facebook-title"/>
        <meta property="og:description" content="" key="facebook-description"/>
        <meta property="og:image" content="/images/profile.jpg" key="facebook-image" />

        <meta name="twitter:card" content="summary_large_image" key="twitter-card"/>
        <meta property="twitter:domain" content="sebagudelo.com"key="twitter-domain"/>
        <meta property="twitter:url" content="https://sebagudelo.com/" key="twitter-url"/>
        <meta property="og:title" content={siteTitle} key="twitter-title"/>
        <meta name="twitter:description" content="" key="twitter-description"/>
        <meta name="twitter:image" content="/images/profile.jpg" key="twitter-image"/>
        
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
