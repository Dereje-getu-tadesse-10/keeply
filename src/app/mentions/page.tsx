import { Heading, Paragraph } from '$/components/ui';
import Link from 'next/link';
import styles from "./page.module.css";
const MentionsPage = () => (
  <main className={styles.main}>
    <section>
        <div>
      <Heading as='h1' variant='h2'>
        PRESENTATION DU SITE
      </Heading>
      <Paragraph>
        En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance dans l&apos;économie numérique, les différents intervenants
        du site dans le cadre de sa réalisation et de son suivi :
      </Paragraph>
      <ul>
        <li>
          <strong>Propriétaire :</strong>{' '}
          <Paragraph>
            Keeply. Le propriétaire du site
            internet est joignable à cette adresse :{' '}
            <a href='mail:to:hello@dereje.fr'>hello@dereje.fr</a>
          </Paragraph>
        </li>
        <li>
          <strong>Créateur du site :</strong>
          <Paragraph>Dereje Getu Tadesse</Paragraph>
        </li>
        <li>
          <strong>Responsable publication :</strong>
          <Paragraph>Dereje Getu Tadesse - <a href='mail:to:hello@dereje.fr'>hello@dereje.fr</a></Paragraph>
        </li>
        <li>
          <strong>Webmaster :</strong>
          <Paragraph>Getu Tadesse - <a href='mail:to:hello@dereje.fr'>hello@dereje.fr</a></Paragraph>
        </li>
        <li>
          <strong>Hébergeur :</strong>
          <Paragraph>
            Cloudflare 101 Townsend St., San Francisco, California 94107
          </Paragraph>
        </li>
      </ul>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          CONDITIONS D&apos;UTILISATION
        </Heading>
        <Paragraph>
          L&apos;utilisation du site implique l&apos;acceptation pleine et
          entière des conditions générales d&apos;utilisation ci-après décrites.
          Ces conditions d&apos;utilisation sont susceptibles d&apos;être
          modifiées ou complétées à tout moment, les utilisateurs du site sont
          donc invités à les consulter de manière régulière. Le site est mis à
          jour régulièrement par <strong>Dereje Getu Tadesse</strong>. De la même façon,{' '}
          <strong>les mentions légales peuvent être modifiées à tout moment</strong> :
          elles s&apos;imposent néanmoins à l&apos;utilisateur qui est invité à
          s&apos;y référer le plus souvent possible afin d&apos;en prendre
          connaissance.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          SERVICES FOURNIS
        </Heading>
        <Paragraph>
          Dereje Getu Tadesse, s&apos;efforce de fournir sur le site des
          informations aussi précises que possible.
        </Paragraph>
        <Paragraph>
          Toutefois, il ne pourra être tenue responsable des omissions, des
          inexactitudes et des carences dans la mise à jour, qu&apos;elles
          soient de son fait ou du fait des tiers partenaires qui lui
          fournissent ces informations. Tous les informations indiquées sur le
          site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>{' '}
          sont données à titre indicatif, et sont susceptibles d&apos;évoluer.
          Aussi, toutes les informations indiquées sur le site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>{' '}
          sont données à titre indicatif, et sont susceptibles de changer ou
          d&apos;évoluer sans préavis.
        </Paragraph>
        <Paragraph>
          Si vous constatez une lacune, erreur ou ce qui parait être un
          dysfonctionnement, merci de bien vouloir le signaler par email, à
          l&apos;adresse hello@dereje.fr, en décrivant le problème de la manière
          la plus précise possible (vous vous trouver sur un téléphone, une
          tablette ou bien un ordinateur ; nom de la page qui pose problème,
          type de système d&apos;exploitation, navigateur utilisé,…). Dereje
          Getu Tadesse n&apos;est en aucun cas responsable de l&apos;utilisation
          faite de ces informations, et de tout préjudice direct ou indirect
          pouvant en découler.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          PROPRIETE INTELLECTUELLE ET CONTREFACONS
        </Heading>
        <Paragraph>
          Keeply est le propriétaire des droits de propriété intellectuelle ou
          détient les droits d&apos;usage sur tous les éléments accessibles sur
          le site, notamment les textes, images, graphismes, logo, icônes, sons,
          logiciels. Toute reproduction, représentation, modification,
          publication, distribution, retransmission, adaptation de tout ou
          partie des éléments du site, quel que soit le moyen ou le procédé
          utilisé, est interdite, sauf autorisation écrite préalable de :
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>
          . Toute exploitation non autorisée du site ou de l&apos;un quelconque
          des éléments qu&apos;il contient, par quelque procédé que ce soit,
          sera considérée comme constitutive d&apos;une contrefaçon et
          poursuivie conformément aux dispositions des articles L.335-2 et
          suivants du Code de Propriété Intellectuelle.
        </Paragraph>
        <Paragraph>
          Le non-respect de cette interdiction constitue une contrefaçon pouvant
          engager la responsabilité civile et pénale du contrefacteur. En outre,
          les propriétaires des Contenus copiés pourraient intenter une action
          en justice à votre encontre.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          LIMITATIONS DE RESPONSABILITES
        </Heading>
        <Paragraph>
          L&apos;utilisateur du site s&apos;engage à accéder au site en
          utilisant un matériel récent, ne contenant pas de virus et avec un
          navigateur de dernière génération mis-à-jour.
        </Paragraph>
        <Paragraph>
          Dereje Getu Tadesse ne pourra être tenue responsable des dommages
          directs et indirects causés au matériel de l’utilisateur, lors de
          l’accès au site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>
          , et résultant soit de l’utilisation d’un matériel ne répondant pas
          aux spécifications indiquées ci-dessus, soit de l’apparition d’un bug
          ou d’une incompatibilité.
        </Paragraph>
        <Paragraph>
          Dereje Getu Tadesse ne pourra également être tenue responsable des
          dommages indirects (tels par exemple qu’une perte de marché ou perte
          d’une chance) consécutifs à l’utilisation du site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>
          . Des espaces interactifs (possibilité de poser des questions dans
          l’espace contact) sont à la disposition des utilisateurs. Dereje Getu
          Tadesse se réserve le droit de supprimer, sans mise en demeure
          préalable, tout contenu déposé dans cet espace qui contreviendrait à
          la législation applicable en France, en particulier aux dispositions
          relatives à la protection des données.
        </Paragraph>
        <Paragraph>
          Le cas échéant, Dereje Getu Tadesse se réserve aussi la possibilité de
          mettre en cause la responsabilité civile et/ou pénale de
          l’utilisateur, notamment en cas de message à caractère diffamant,
          raciste, injurieux ou pornographique, quel que soit le support utilisé
          (texte, vidéo, photographie…).
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          Gestion des données personnelles.
        </Heading>
        <Paragraph>
          En France, les données personnelles sont notamment protégées par la
          loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
          l’article L. 226-13 du Code pénal et la Directive Européenne du 24
          octobre 1995. A l’occasion de l’utilisation du site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>
          , peuvent être recueillies : l’URL des liens par l’intermédiaire
          desquels l’utilisateur a accédé à ce site, le fournisseur d’accès de
          l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.
          En tout état de cause Dereje Getu Tadesse ne collecte des informations
          personnelles relatives à l’utilisateur que pour le besoin de certains
          services proposés par le site
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>
          . L’utilisateur fournit ces informations en toute connaissance de
          cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est
          alors précisé à l’utilisateur du site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>{' '}
          l’obligation ou non de fournir ces informations. Conformément aux
          dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier
          1978 relative à l’informatique, aux fichiers et aux libertés, tout
          utilisateur dispose d’un droit d’accès, de rectification et
          d’opposition aux données personnelles le concernant, en effectuant sa
          demande écrite et signée, accompagnée d’une copie du titre d’identité
          avec signature du titulaire de la pièce, en précisant l’adresse à
          laquelle la réponse doit être envoyée. Aucune information personnelle
          de l’utilisateur du site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>{' '}
          n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée
          ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du
          rachat de Dereje Getu Tadesse et/ou du site internet de ses droits
          permettrait la transmission des dites informations à l’éventuel
          acquéreur qui serait à son tour tenu de la même obligation de
          conservation et de modification des données vis à vis de l’utilisateur
          du site.
        </Paragraph>
        <Paragraph>
          Les bases de données sont protégées par les dispositions de la loi du
          1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
          relative à la protection juridique des bases de données.
        </Paragraph>
      </div>
      <div>
        <Heading as='h2' variant='h2'>
          LIENS HYPERTEXTES ET COOKIES
        </Heading>
        <Paragraph>
          Le site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>{' '}
          peut contenir un certain nombre de liens hypertextes vers d’autres
          sites, mis en place avec l’autorisation de Dereje Getu Tadesse.
          Cependant, Dereje Getu Tadesse n’a pas la possibilité de vérifier le
          contenu des sites ainsi visités, et n’assumera en conséquence aucune
          responsabilité de ce fait. La navigation sur le site{' '}
          <Link href='https://keeply.dereje.fr'>
            <strong>Keeply</strong>
          </Link>{' '}
          est susceptible de provoquer l’installation de cookie(s) sur
          l’ordinateur de l’utilisateur.
        </Paragraph>
        <Paragraph>
          Un cookie est un fichier de petite taille, qui ne permet pas
          l’identification de l’utilisateur, mais qui enregistre des
          informations relatives à la navigation d’un ordinateur sur un site.
          Les données ainsi obtenues visent à faciliter la navigation ultérieure
          sur le site, et ont également vocation à permettre diverses mesures de
          fréquentation. Le refus d’installation d’un cookie peut entraîner
          l’impossibilité d’accéder à certains services. L’utilisateur peut
          toutefois configurer son ordinateur de la manière suivante, pour
          refuser l’installation des cookies :
        </Paragraph>
        <ul>
          <li>
            <strong>Sous Internet Explorer :</strong>
            <Paragraph>
              onglet outil (pictogramme en forme de rouage en haut a droite) /
              options internet. Cliquez sur Confidentialité et choisissez
              Bloquer tous les cookies. Validez sur Ok.
            </Paragraph>
          </li>
          <li>
            <strong>Sous Firefox :</strong>
            <Paragraph>
              en haut de la fenêtre du navigateur, cliquez sur le bouton
              Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet
              Vie privée.
            </Paragraph>
          </li>
          <li>
            <strong>Paramétrez les Règles de conservation sur :</strong>
            <Paragraph>
              utiliser les paramètres personnalisés pour l’historique. Enfin
              décochez-la pour désactiver les cookies.
            </Paragraph>
          </li>
          <li>
            <strong>Sous Safari :</strong>
            <Paragraph>
              Cliquez en haut à droite du navigateur sur le pictogramme de menu
              (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur
              Afficher les paramètres avancés. Dans la section
              “Confidentialité”, cliquez sur Paramètres de contenu. Dans la
              section “Cookies”, vous pouvez bloquer les cookies.
            </Paragraph>
          </li>
          <li>
            <strong>Sous Chrome:</strong>
            <Paragraph>
              Cliquez en haut à droite du navigateur sur le pictogramme de menu
              (symbolisé par trois lignes horizontales). Sélectionnez
              Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
              section “Confidentialité”, cliquez sur préférences. Dans l’onglet
              “Confidentialité”, vous pouvez bloquer les cookies.
            </Paragraph>
          </li>
        </ul>
        <Paragraph>
          Les liens hypertextes mis en place dans le cadre du présent site
          internet en direction d'autres ressources présentes sur le réseau
          Internet ne sauraient engager la responsabilité de Dereje Getu
          Tadesse.
        </Paragraph>
        <Paragraph>
          Tout contenu téléchargé se fait aux risques et périls de l'utilisateur
          et sous sa seule responsabilité. En conséquence, Dereje Getu Tadesse
          ne saurait être tenu responsable d'un quelconque dommage subi par
          l'ordinateur de l'utilisateur ou d'une quelconque perte de données
          consécutives au téléchargement.
        </Paragraph>
      </div>
      <div>
        <Heading as={'h2'} variant={'h2'}>
          DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTIONs
        </Heading>
        <Paragraph>
          Les présentes conditions du site https://keeply.dereje.fr sont régies
          par les lois françaises et toute contestation ou litiges qui
          pourraient naître de l'interprétation ou de l'exécution de celles-ci
          seront de la compétence exclusive des tribunaux dont dépend le siège
          social de la société Dereje Getu Tadesse. La langue de référence, pour
          le règlement de contentieux éventuels, est le français.
        </Paragraph>
      </div>
      <div>
        <Heading as={'h2'} variant={'h2'}>
          LES PRINCIPALES LOIS CONCERNEES
        </Heading>
        <Paragraph>
          Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
          2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux
          libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
          l’économie numérique.
        </Paragraph>
      </div>
      <div>
        <Heading as={'h2'} variant={'h2'}>
          LEXIQUE
        </Heading>
        <ul>
          <li>
            <strong>Propriétaire du site :</strong>
            <Paragraph>
              Responsable légal des informations contenues dans le site internet
            </Paragraph>
          </li>
          <li>
            <strong>Webmaster :</strong>
            <Paragraph>
              Personne en charge du maintien technique et des mises à jour
              techniques du site internet
            </Paragraph>
          </li>
          <li>
            <strong>Responsable publication :</strong>
            <Paragraph>
              Personne en charge de la mise à jour des contenus (textes,
              visuels, multimédia, etc.) sur le site internet
            </Paragraph>
          </li>
          <li>
            <strong>Hébergeur :</strong>
            <Paragraph>Espace de stockage du site internet</Paragraph>
          </li>
          <li>
            <strong>Utilisateur :</strong>
            <Paragraph>
              Internaute se connectant, utilisant le site susnommé.
            </Paragraph>
          </li>
          <li>
            <strong>
              Informations personnelles : « les informations qui permettent,
              sous quelque forme que ce soit, directement ou non,
              l’identification des personnes physiques auxquelles elles
              s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
            </strong>
          </li>
        </ul>
      </div>
      </section>
  </main>
);

export default MentionsPage;
