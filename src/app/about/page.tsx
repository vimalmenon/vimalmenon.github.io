import styles from '../page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>This is About page</div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
