import { Heading, Paragraph } from '$/components/ui';
import styles from './landing.module.css';

const data = [
  {
     title: 'Un contrôle total sur vos collections',
    description:
      'Maintenez l‘ordre sur vos collections de vinyles, de cartes et de timbres. Plus jamais vous ne perdrez une pièce rare ou un vinyle précieux.',
  },
  {
    title: 'Partagez avec le monde',
    description:
      'Partagez vos collections avec vos amis et votre famille. Faites découvrir vos collections à vos proches et à la communauté.',
  },
];

export const Explain = () => (
  <div className={styles.explain}>
    <div>
      <Heading>{data[0].title}</Heading>
      <Paragraph>{data[0].description}</Paragraph>
    </div>
    <div>
      <Heading>{data[1].title}</Heading>
      <Paragraph>{data[1].description}</Paragraph>
    </div>
  </div>
);
