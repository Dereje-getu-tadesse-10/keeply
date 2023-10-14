'use client'
import styles from './header.module.css'
import Link from 'next/link'
import { NavbarMobile } from './navbar-mobile'
import { NavbarDesktop } from '$/components/common/header/navbar-desktop'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Keeply</Link>
      <NavbarMobile />
      <NavbarDesktop />
    </header>
  )
}
