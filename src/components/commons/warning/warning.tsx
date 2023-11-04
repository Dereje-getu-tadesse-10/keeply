import styles from './warning.module.css';
import { Paragraph } from '$/components/ui';

export const Warning = ({ text }: { text: string }) => (
  <div className={styles.warning_status}>
    <Paragraph variant='hightlight'>
      En fonction du statut, votre collection sera visible par tout le monde ou
      seulement par vous sur votre profil.
    </Paragraph>
  </div>
);
