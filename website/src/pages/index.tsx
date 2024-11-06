import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h2" className="con1">
         <p className="title"> Central </p>
         <p className="subtitle"> Powerful Documentation & Articles </p>
        </Heading>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

function MyComponent() {
  return (
    <main>
      <h1 className="purple-text">Purple Heading!</h1>
    </main>
  );
}

function MyArticles() {
  return (
    <main className={styles.MyArticles}>
      <article>Lorem Ipsum</article>
    </main>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <MyComponent/>
      <MyArticles/>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}
