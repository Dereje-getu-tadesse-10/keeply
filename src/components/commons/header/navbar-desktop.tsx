import styles from './header.module.css'
import { NavbarItems } from '$/components/commons/header/navbar-items'

export const NavbarDesktop = () => (
  <nav className={styles.header__navbar__desktop}>
    <NavbarItems />
  </nav>
)
