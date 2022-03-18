import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import SignupForm from '../components/SignupForm'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <section className={utilStyles.headingMd}>

        <p>👋 Hey, I'm Seb Agudelo</p>
        
        <p>💻 10+ years tech experience across APAC/EMEA, with 2 years working
        directly on user + retention problems with Product teams</p> 
        
        <p>🛠️ I enjoy writing and exploring how Product teams build and grow products</p>
        
        <p>😎 Previously at: <a href="https://nhost.io">Nhost |</a> <a href="https://antler.co">Antler |</a> <a href="https://tealium.com">Tealium |</a> <a href="https://bazaarvoice.com"> Bazaarvoice</a> </p>
        

      </section>

      <section>
      <SignupForm/>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
                </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}