import { ButtonLink, Heading, Paragraph, Separator } from '$/components/ui';
import Link from 'next/link';
import styles from './footer.module.css';

const currentYear = new Date().getFullYear();

const links = [
  {
    href: '/mentions',
    label: 'Mentions légales',
  },
  {
    href: '/cookies',
    label: 'Politique de cookies',
  },
  {
    href: '/privacy',
    label: 'Politique de confidentialité',
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <Separator />
    <Heading as='h3'>Keeply</Heading>
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
    <Paragraph>
      &copy; {currentYear} Built with 🎶 by{' '}
      <Link href={'https://dereje.fr'}>Dereje</Link>
    </Paragraph>
  </footer>
);
