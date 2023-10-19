import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'


function Footer() {
  return <footer className={styles.roda}>
    <ul className={styles.list}>
      <li><FaFacebook /></li>
      <li><FaInstagram /></li>
      <li><FaLinkedin /></li>
    </ul>
    <p className={styles.text}>Nosso rodapé</p>
  </footer>
}

export default Footer