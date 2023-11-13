import { ButtonLink, Heading, Paragraph, Separator } from '$/components/ui';
import Link from 'next/link';
import styles from './footer.module.css';
import { Logo } from '../logo/logo';

const currentYear = new Date().getFullYear();

const links = [
  {
    href: '/gdpr/mentions',
    label: 'Mentions légales',
  },
  {
    href: '/gdpr/cookies',
    label: 'Politique de cookies',
  },
  {
    href: '/gdpr/privacy',
    label: 'Politique de confidentialité',
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <Separator />
    <div>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <div>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Paragraph>
                <Link href={href}>{label}</Link>
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div>
      <Paragraph>
        &copy; {currentYear} Built with 🎶 by{' '}
        <Link href={'https://dereje.fr'}>Dereje</Link>
      </Paragraph>
    </div>
  </footer>
);
