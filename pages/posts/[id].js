
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  
  const pageTitle = postData ? postData.title : siteTitle;

const siteTitle = 'Seb Agudelo - Growth, Startups, The Web'
  return (
    <Layout postData={postData}>
      <Head> 
        <title>{postData.title}</title>
        <meta property="og:title" content={pageTitle} key="site-title"/>
        <meta property="description" content="" key="site-description"/>
        <meta property="og:locale" content="website" key="site-locale"/>
        <meta property="og:type" content="en_US" key="site-type"/>
        <meta property="og:URL" content="https://sebagudelo.com" key="site-URL" />
        <meta property="og:image" content="/images/profile.jpg" key="site-image" />
      
        <meta property="og:url" content="https://sebagudelo.com/" key="facebook-title"/>
        <meta property="og:type" content="website" key="facebook-type"/>
        <meta property="og:title" content={pageTitle} key="facebook-title"/>
        <meta property="og:description" content="" key="facebook-description"/>
        <meta property="og:image" content="/images/profile.jpg" key="facebook-image" />

        <meta name="twitter:card" content="summary_large_image" key="twitter-card"/>
        <meta property="twitter:domain" content="sebagudelo.com"key="twitter-domain"/>
        <meta property="twitter:url" content="https://sebagudelo.com/" key="twitter-url"/>
        <meta property="og:title" content={pageTitle} key="twitter-title"/>
        <meta name="twitter:description" content="" key="twitter-description"/>
        <meta name="twitter:image" content="/images/profile.jpg" key="twitter-image"/>
        

      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}