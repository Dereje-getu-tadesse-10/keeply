import styles from './page.module.css';

const NotFound = () => (
  <div className={styles.not_found}>
    <h2>Oups</h2>
    <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
  </div>
);

export default NotFound;
