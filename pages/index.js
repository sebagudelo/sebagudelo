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
        <p>Hey, I'm Seb Agudelo - Head of Growth @ {' '}
          <a href="https://nhost.io">Nhost</a></p>
        <p>I help technical founders grow their active users and distribute core product value.</p>
        <p>I have broad experience across APAC/EMEA with:</p>
        <p>SaaS Growth Levers: Acquisition, Retention and Monetization</p>
        <p>SaaS Growth Motions: Product-Led, Marketing-Led and Sales/CS-Led</p>

        <p>I enjoy writing about the future of Growth, Startups and The Web.</p>

        <p>Subscribe to stay up to date.</p>

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