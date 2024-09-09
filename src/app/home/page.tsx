import React from 'react';
import styles from '../page.module.css';
import Image from "next/image";


export default function HomePage() {
    return (
    <main className={styles.main}>
      <div className={styles.about}>
        <Image
          className={styles.avatar}
          src="/my_avatar.png"
          alt="my avatar"
          width={200}
          height={200}
          priority
        />
        <div>
          <p className={styles.intro}>Hello, my name is Aziz. I don&apos;t like to share a picture of mine :)</p>
          <h1 className={`${styles.headline} ${styles.headline__1}`}>I am a <strong>Hacker</strong> & a <strong>Cyber Security Researcher</strong></h1>
          <h2 className={`${styles.headline} ${styles.headline__2}`}>I am a software engineer @&nbsp;<a href="https://softylines.com">Softylines</a></h2>
          <h3 className={`${styles.headline} ${styles.headline__3}`}>I am an open source contributor @&nbsp;<a href="https://drupal.org">Drupal.</a></h3>
        </div>
      </div>
      <ul className={styles.socialLinks}>
        <li><a href="https://drupal.org/u/azizos"><Image src="/social/water-outline.svg" alt="Drupal Logo" width={20} height={20}/></a></li>
        <li><a href="https://github.com/aziz-712"><Image src="/social/logo-github.svg" alt="my personal github account" width={20} height={20}/></a></li>
        <li><a href="https://github.com/ahmedazizabbassi"><Image src="/social/logo-github.svg" alt="my working github account" width={20} height={20}/></a></li>
        <li><a href="https://gitlab.com/ahmedazizabbassi"><Image src="/social/logo-gitlab.svg" alt="my working gitlab account" width={20} height={20}/></a></li>
        <li>|</li>
        <li><a href="https://twitter.com/ahmed_abbassi_"><Image src="/social/logo-twitter.svg" alt="my twitter account" width={20} height={20}/></a></li>
        <li><a href="https://linkedin.com/in/ahmed-aziz-abbassi"><Image src="/social/logo-linkedin.svg" alt="my linkedin account" width={20} height={20} /></a></li>
        <li><a href="https://instagram.com/ahmed.aziz.abbassi"><Image src="/social/logo-instagram.svg" alt="my instagram account" width={20} height={20} /></a></li>
        <li><a href="https://facebook.com/ahmadouazizabbassi"><Image src="/social/logo-facebook.svg" alt="my facebook account" width={20} height={20} /></a></li>
      </ul>
      <footer className={styles.footer}>
        <a href="/poweredby">Powered by Next & Vercel</a> | Aziz &copy; {new Date().getFullYear()}
      </footer>
    </main>
    );
}
