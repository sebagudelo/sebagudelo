
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  
  return (
    <Layout postData={postData}>
      <Head> 
        <title>{postData.title}</title>
        <meta property="og:locale" content="en_US" key="site-locale"/>
        <meta property="og:type" content="article" key="site-type"/>
        <meta property="og:title" content={postData.title} key="site-title"/>
        <meta property="description" content={postData.description} key="site-description"/>     
        <meta property="og:url" content={postData.url} key="site-url" />
        <meta property="og:site_name" content="Seb Agudelo - How Products Grow" key="site-name" />
        <meta property="og:date" content={postData.date} key="date" />
        <meta property="og:image" content={postData.image} key="site-image" />
      
        <meta property="og:url" content={postData.url} key="facebook-title"/>
        <meta property="og:type" content="website" key="facebook-type"/>
        <meta property="og:title" content={postData.title} key="facebook-title"/>
        <meta property="og:description" content={postData.description} key="facebook-description"/>
        <meta property="og:image" content={postData.image} key="facebook-image" />

        <meta name="twitter:card" content="summary_large_image" key="twitter-card"/>
        <meta property="twitter:domain" content="@sebagudelo"key="twitter-domain"/>
        <meta property="twitter:url" content={postData.url} key="twitter-url"/>
        <meta name="twitter:label1" content="Written by" key="written-by" />
        <meta name="twitter:data1" content={postData.author} key="twitter-author" />
        <meta name="twitter:label2" content="Est. Reading Time" key="est-read-time" />
        <meta name="twitter:data2" content={postData.readtime} key="read-time" />
        <meta name="twitter:description" content={postData.description} key="twitter-description"/>
        <meta name="twitter:image" content={postData.image} key="twitter-image"/>
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