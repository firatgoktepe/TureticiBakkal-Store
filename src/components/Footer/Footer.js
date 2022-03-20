import Container from '../Container';

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; Turetici Bakkal Store {new Date().getFullYear()}
      </Container>
    </footer>
  )
}

export default Footer;