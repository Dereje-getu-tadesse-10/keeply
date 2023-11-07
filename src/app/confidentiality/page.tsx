import { Heading, Paragraph } from '$/components/ui';
import styles from '../mentions/page.module.css';

const ConfidentialityPage = () => (
  <main className={styles.main}>
    <section>
      <div>
        <Heading as='h1' variant='h3'>
          Politique de Confidentialité de Kepply
        </Heading>
        <Paragraph>
          La présente politique de confidentialité décrit les pratiques de
          Kepply en matière de collecte, d&apos;utilisation, de conservation et de
          protection des informations personnelles des utilisateurs de notre
          application web.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h3'>
          Collecte des Informations
        </Heading>
        <Paragraph>
          Kepply recueille les types d&apos;informations suivants :
        </Paragraph>
        <Paragraph>
          Données d&apos;inscription fournies par les utilisateurs, telles que le nom
          et l&apos;adresse e-mail, pour créer un compte Kepply.
        </Paragraph>
        <Paragraph>
          Informations techniques relatives à l&apos;utilisation de l&apos;application, y
          compris l&apos;adresse IP et les données de navigation.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h3'>
          Utilisation des Informations
        </Heading>
        <Paragraph>Les informations recueillies servent à :</Paragraph>
        <Paragraph>Gérer les comptes des utilisateurs.</Paragraph>
        <Paragraph>
          Améliorer l&apos;expérience utilisateur sur l&apos;application.
        </Paragraph>
        <Paragraph>
          Communiquer avec les utilisateurs via e-mail pour des notifications ou
          des newsletters.
        </Paragraph>
        <Paragraph>
          Optimiser et évaluer l&apos;efficacité de l&apos;application web.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h3'>
          Partage des Informations
        </Heading>
        <Paragraph>
          Kepply ne divulgue pas les informations personnelles des utilisateurs
          à des tiers, sauf dans les cas suivants :
        </Paragraph>
        <Paragraph>
          Répondre à des exigences de service spécifiques, avec le consentement
          de l'utilisateurs
        </Paragraph>
        <Paragraph>
          Se conformer aux exigences légales ou réglementaires.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h3'>
          Consentement
        </Heading>
        <Paragraph>
          L&apos;utilisation de l&apos;application Kepply signifie que l&apos;utilisateur
          accepte les termes de cette politique de confidentialité.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h3'>
          Sécurité des Données
        </Heading>
        <Paragraph>
          Des mesures de sécurité techniques et organisationnelles sont mises en
          place pour protéger les informations personnelles contre tout accès
          non autorisé ou toute perte accidentelle.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h3'>
          Droits des Utilisateurs
        </Heading>
        <Paragraph>
          Les utilisateurs de Kepply peuvent à tout moment :
        </Paragraph>

        <Paragraph>Accéder à leurs données personnelles.</Paragraph>
        <Paragraph>
          Demander une rectification ou une suppression de leurs informations.
        </Paragraph>
        <Paragraph>Révoquer</Paragraph>
      </div>
    </section>
  </main>
);

export default ConfidentialityPage;
