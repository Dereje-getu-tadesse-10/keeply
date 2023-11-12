import { ButtonLink } from '../ui';
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

// Keeply vous permet de gérer vos collections en toute simplicité. Ajoutez, modifiez et supprimez vos collections en quelques clics.

export const Exemple = () => (
  <div className={styles.exemple}>
    {data.map((item) => (
      <div className={styles.exemple__content}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ))}
    <h1>Commencez maintenant</h1>
    <p>
      N&apos;attendez pas une seconde de plus pour commencer à gérer vos
      collections de vinyles, de cartes ou de timbres avec Keeply. Il est temps
      de montrer au monde vos pièces rares!
    </p>
    <ButtonLink href='/login'>Commencer maintenant</ButtonLink>
  </div>
);
