import React, { ReactNode } from 'react'
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function ContactForm(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <a href="https://forms.gle/PABrCniv4upDYaYd7">
          <Heading as="h1" className="text--center">
            Contact Us
          </Heading>
        </a>
      </div>
    </section>
  );
}
