import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Card from '@site/src/components/HomepageFeatures/card';
import CardBody from '@site/src/components/HomepageFeatures/card/CardBody';
import CardFooter from '@site/src/components/HomepageFeatures/card/CardFooter';
import CardHeader from '@site/src/components/HomepageFeatures/card/CardHeader';

import styles from './index.module.css';

function HomepageHeader() {
  const {} =useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h2" className="con1">
         <p className="title"> Central </p>
         <p className="description"> Powerful Documentation & Articles </p>
        </Heading>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

function MyComponent() {
  return (
    <Card shadow='tl'>
    <CardHeader>
      <h3>Lorem Ipsum</h3>
    </CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
    </CardBody>
    <CardFooter>
      <button className='button button--secondary button--block'>See All</button>
    </CardFooter>
    </Card>
  );
}

function MyCard2() {
  return (
    <Card>
    <CardHeader
      className='padding-top--lg'
      style={{ backgroundColor: 'rgb(33 126 209)' , color:'white'}}
    >
      <div className='avatar avatar--vertical'>
        <img
          className='avatar__photo avatar__photo--xl' 
          src='https://avatars.githubusercontent.com/u/97809069?v=4'
        />
        <div className='avatar__intro'>
          <div className='avatar__name'>Docux (@Juniors017)</div>
          <small className='avatar__subtitle'>
            humble contributor on:
            <a style={{ color:'white'}} href='https://docusaurus.community/'>docusaurus.community</a>
          </small>
        </div>
      </div>
    </CardHeader>
    <CardBody
      style={{ backgroundColor: 'white' , color:'#8f600b'}}
      className='padding-vert--md'
      textAlign='center'
      transform='uppercase'
    >
      <h3>Docux Card component</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
    </CardBody>  
    <CardFooter
      style={{ backgroundColor: '#2887bf' , color:'black'}}
      className='text--center'
    >
      <div className='button-group button-group--block'>
        <button className='button button--secondary'>Like</button>
        <button className='button button--secondary'>Share</button>
      </div>
    </CardFooter> 
    </Card>
  )
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <MyComponent/>
      <MyCard2/>
      <MyArticles/>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}
