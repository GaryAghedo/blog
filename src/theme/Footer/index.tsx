import React from 'react';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(_props: Props): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src={useBaseUrl('/img/about/gary.jpeg')}
            alt="Gary Aghedo"
          />

          <div className={styles.profileText}>
            <div className={styles.nameRow}>
              <div className={styles.name}>Gary Aghedo</div>
              <span className={styles.role}>Software Engineer • Creator</span>
            </div>

            <div className={styles.desc}>
              I write about practical programming, software development, AI, robotics, and cloud deployment —
              sharing what I’m learning and building.
            </div>

            <div className={styles.links}>
              <Link to="/about-me" className={styles.link}>About me</Link>
              <Link to="/hire-me" className={styles.link}>Hire me</Link>
              <Link to="https://www.youtube.com/@codeneto" className={styles.link}>YouTube</Link>
              <Link to="https://github.com/GaryAghedo" className={styles.link}>GitHub</Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Codeneto
        </div>
      </div>
    </footer>
  );
}
