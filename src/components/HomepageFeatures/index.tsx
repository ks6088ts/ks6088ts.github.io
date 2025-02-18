import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "このページは",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        備忘録を兼ねた技術情報のメモです。
        <br />
        個人の見解であり、所属する組織の公式見解ではありません。
      </>
    ),
  },
];

// function Feature({title, Svg, description}: FeatureItem) {
function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--12")}>
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
    // <div className={clsx("col col--4")}>
    //   <div className="text--center">
    //     {/* <Svg className={styles.featureSvg} role="img" /> */}
    //   </div>
    //   <div className="text--center padding-horiz--md">
    //     <Heading as="h3">{title}</Heading>
    //     <p>{description}</p>
    //   </div>
    // </div>
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
