import React, { ReactNode } from 'react'
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Software Development',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We can help you build your software from scratch or help you with
        existing software. Our team has experience in building Generative AI, IoT, Machine Learning, and Cloud-based applications.
      </>
    ),
  },
  {
    title: 'Technical Consulting',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We have a team of experienced consultants who can help you with your technical challenges especially in the areas of cloud, data, and AI.
      </>
    ),
  },
  {
    title: 'Technology Training',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We provide training on various technologies such as cloud, data, AI, and software development. Our training programs are designed to help you upskill your team and stay ahead of the curve.
      </>
    ),
  },
];

// function Feature({title, Svg, description}: FeatureItem) {
function Feature({title, description}: FeatureItem) {
    return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
