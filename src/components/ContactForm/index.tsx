import React, { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function ContactForm(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <a href="https://forms.gle/PABrCniv4upDYaYd7">
          <Heading as="h2" className="text--center">
            Contact @ks6088ts
          </Heading>
        </a>
      </div>
    </section>
  );
}
