import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import SignupForm from "../components/SignupForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter } from "react-icons/fa";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <script
          src="https://kit.fontawesome.com/795c46eaff.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg} id="about">
          <a href="https://findseb.com/#about">About</a>
        </h2>
        <p>
          💻 10+ years tech experience, with 5 years working directly on user +
          retention problems with Product + Customer Success + Marketing teams
        </p>

        <p>
          🛠️ PM working on <a href="https://www.getmesh.co/">Mesh |</a>{" "}
          Previously at: <a href="https://nhost.io">Nhost |</a>{" "}
          <a href="https://antler.co">Antler |</a>{" "}
          <a href="https://tealium.com">Tealium |</a>{" "}
          <a href="https://www.isentia.com/">Isentia |</a>{" "}
          <a href="https://bazaarvoice.com"> Bazaarvoice</a>{" "}
        </p>

        <p>
          🏄‍♂️ Sharing the ride to help reflect on my Product thinking and also to
          help other Product People on their journey
        </p>

        <p>
          💬 I enjoy chatting with Product People all over the world. Feel free
          to reach out and book a
          <a href="https://calendly.com/sebagudelo"> time</a>
        </p>
      </div>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg} id="writing">
          <a href="https://findseb.com/#writing"> Writing </a>
        </h2>
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
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
