'use client'
import { Button } from '$/components/ui'
import { useSession } from 'next-auth/react'
import styles from '$/components/common/header/header.module.css'
import { Menu, X } from 'lucide-react'
import { useNavbarStore } from '$/stores/navbar'
import { NavbarItems } from '$/components/common/header/navbar-items'

export const NavbarMobile = () => {
  const { data: session } = useSession()
  const { isOpen, toggleNavbar } = useNavbarStore()

  return (
    <div className={styles.header__navbar__mobile}>
      <Button intent={'secondary'} onClick={toggleNavbar}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <>
          <div className={styles.header__overlay} onClick={toggleNavbar} />
          <nav className={styles.header__nav}>
            <NavbarItems />
          </nav>
        </>
      )}
    </div>
  )
}
