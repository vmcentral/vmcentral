import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '@site/src/components/Homepage';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="hero__pretext">
          <span>Hands-on tutorial 🔥</span>
        </div>
        <Heading as="h1" className="hero__title">
          Get Started With Docs Site
        </Heading>
        <p className="hero__subtitle">
          Docs Site is a comprehensive platform designed to help you create,
          manage, organize and share documentation effortlessly. Whether you're
          a developer, writer, or project manager.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ alignSelf: "left" }}
          >
            Let's Explore - 5min ⏱️
          </Link>
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

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <MyComponent />
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
