import Container from '../Container';
import Link from "next/link"

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; 
        <Link href={`https://tureticibakkal.com/`}>
            <a>
              Turetici Bakkal Store {new Date().getFullYear()}
            </a>
        </Link>
      </Container>
    </footer>
  )
}

export default Footer;