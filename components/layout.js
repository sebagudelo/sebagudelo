import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/Navbar';
import Link from 'next/link'
import SignupForm from '../components/SignupForm';
import Footer from '../components/footer';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

const name = 'How Products Grow'
export const siteTitle = 'Seb Agudelo - How Products Grow'
const seb = 'Back to home'
const gsw = 'Learn how teams grow products'
export default function Layout({ children, home, postData }) {
  console.log(postData)
  const pageTitle = postData ? postData.title : siteTitle;
  return (
    <div className={styles.container}>
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        
        <meta property="og:title" content={siteTitle} key="site-title"/>
        <meta property="description" content="Learn how teams grow products. From discovery, to delivery and market adoption, we will explore all aspects of life as a Product Manager." key="site-description"/>
        <meta property="og:locale" content="en_us" key="site-locale"/>
        <meta property="og:type" content="website" key="site-type"/>
        <meta property="og:URL" content="https://sebagudelo.com" key="site-URL" />
        <meta property="og:image" content="/images/SebTwitter.png" key="site-image" />
      
        <meta name="twitter:card" content="summary_large_image" key="twitter-card"/>
        <meta property="twitter:domain" content="@sebagudelo" key="twitter-domain"/>
        <meta property="twitter:url" content="https://sebagudelo.com/" key="twitter-url"/>
        <meta property="og:title" content={siteTitle} key="twitter-title"/>
        <meta name="twitter:description" content="Learn how teams grow products. From discovery, to delivery and market adoption, we will explore all aspects of life as a Product Manager." key="twitter-description"/>
        <meta name="twitter:image" content="/images/SebTwitter.png" key="twitter-image"/>
        
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      
      </Head>
      
      <Navbar />
      
      <header className={styles.header}>
        {home ? (
          <>
          
            <Image
              priority
              src="/images/SebTwitter.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />

            <h1 className={utilStyles.heading2Xl}>{name} </h1>
            <h1 className={utilStyles.headingLg}>{gsw} </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/SebTwitter.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
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

      <div className={styles.signup}>
      <SignupForm/>
      </div>

<div className={styles.footer} id="contact"> 
<p> 
      <a href="https://twitter.com/sebagudelo" target="_blank" rel="noopener noreferrer"> <FaTwitter /> </a> 
      <a href="https://linkedin.com/in/sebagudelo" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a> 
      <a href="mailto:hi@sebagudelo.com"><FaRegEnvelope /> </a>
      <a href="https://calendly.com/sebagudelo"> <FaRegCalendarAlt /></a>
      </p> 
    </div>
    <Footer />
    </div>
  )
}
