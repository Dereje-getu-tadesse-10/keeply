import { Heading, Paragraph } from '$/components/ui';
import styles from '../mentions/page.module.css';

const Cookies = () => (
  <main className={styles.main}>
    <section>
      <div>
        <Heading as='h1' variant='h2'>
          Politique de Cookies de Kepply
        </Heading>

        <Paragraph>
          Nous utilisons des cookies pour améliorer votre expérience sur notre
          application web Kepply. En naviguant sur Kepply, vous acceptez
          l&apos;utilisation de cookies conformément à cette politique.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Qu&apos;est-ce qu&apos;un cookie ?
        </Heading>
        <Paragraph>
          Un cookie est un petit fichier texte envoyé à votre navigateur par les
          sites web que vous visitez. Il aide le site à se souvenir de vos
          informations de visite, ce qui peut faciliter votre prochaine visite
          et rendre le site plus utile pour vous.s
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Utilisation des Cookies
        </Heading>
        <Paragraph>
          Kepply n&apos;utilise pas de cookies pour suivre les informations
          personnelles ou le comportement des utilisateurs sur notre application
          web.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Analyse de l&apos;Application
        </Heading>
        <Paragraph>
          Nous utilisons Umami Analytics, un outil d&apos;analyse conforme au RGPD,
          qui ne collecte aucune information personnelle, n&apos;utilise pas de
          cookies et ne suit pas les utilisateurs à travers les sites web. Umami
          nous aide à comprendre l&apos;utilisation globale de l&apos;application pour
          améliorer l&apos;expérience utilisateur sans compromettre votre vie privée.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Services d&apos;Authentification
        </Heading>
        <Paragraph>
          Pour les fonctionnalités de connexion à Kepply via Google OAuth,
          GitHub OAuth et la connexion par email, des cookies techniques sont
          nécessaires pour authentifier les utilisaires et maintenir une session
          sécurisée. Ces cookies sont essentiels et ne servent qu&apos;à la
          fonctionnalité de connexion.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Votre Choix et Vos Droits
        </Heading>
        <Paragraph>
          Vous avez le droit de contrôler l&apos;utilisation des cookies techniques
          par le biais des paramètres de votre navigateur, mais refuser ces
          cookies peut empêcher l&apos;utilisation des services de connexion et
          d&apos;authentification de Kepply.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Confidentialité et partage des données
        </Heading>
        <Paragraph>
          Nous nous engageons à ne pas partager d&apos;informations personnelles avec
          des tiers et à respecter la confidentialité de nos utilisateurs
          conformément aux lois sur la protection des données.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Contact
        </Heading>
        <Paragraph>
          Si vous avez des questions ou des préoccupations concernant notre
          utilisation des données, veuillez nous contacter à{' '}
          <a href='mailto:hello@dereje.fr'>hello@dereje.fr</a>.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Mise à jour de la politique
        </Heading>
        <Paragraph>
          Nous révisons notre politique de cookies périodiquement pour nous
          assurer qu&apos;elle reste à jour avec les meilleures pratiques et la
          réglementation. Toute mise à jour sera communiquée de manière
          appropriée.
        </Paragraph>
      </div>
    </section>
  </main>
);

export default Cookies;
