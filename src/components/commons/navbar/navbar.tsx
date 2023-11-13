'use client';
import { useState } from 'react';
import styles from './navbar.module.css';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonLink, Heading, Paragraph } from '$/components/ui';
import { Button } from '$/components/ui';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Logo } from '../logo/logo';

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const currentYear = new Date().getFullYear();

  const { data: session } = useSession();

  return (
    <nav className={styles.navigation}>
      <Link
        href='/'
        className={styles.logo}
        onClick={() => setIsNavExpanded(false)}
      >
        <Logo />
      </Link>
      <button
        className={styles['menu-toggle']}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {isNavExpanded ? <X /> : <Menu />}
      </button>
      <div
        className={
          isNavExpanded ? `${styles.menu} ${styles.expanded}` : styles.menu
        }
      >
        <ul>
          <li>
            <Link href='/' onClick={() => setIsNavExpanded(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href='/a-propos' onClick={() => setIsNavExpanded(false)}>
              À propos
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link href='/dashboard' onClick={() => setIsNavExpanded(false)}>
                  Tableau de bord
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard/settings'
                  onClick={() => setIsNavExpanded(false)}
                >
                  Paramètres
                </Link>
              </li>
            </>
          )}
          <li>
            {session ? (
              <Button onClick={() => signOut()} intent='danger' size={'small'}>
                Déconnexion
              </Button>
            ) : (
              <ButtonLink href='/login' intent='primary' size={'small'}>
                Connexion
              </ButtonLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
