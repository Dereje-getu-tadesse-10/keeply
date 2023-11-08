# Keeply

**Projet pour ma soutenance.**

Keeply est une application web qui permet de gérer ses collections de vinyles, de cartes, de timbres, etc., et de partager ces collections sur son profil. Elle offre également la possibilité de visualiser l'avancée de ses collections en temps réel.

### Configuration

- Installez d'abord les dépendances avec la commande `pnpm i`.
- La migration de la base de données est la deuxième étape ; pour cela, utilisez la commande `pnpm prisma migrate dev`.
- Ensuite, générez les types en utilisant la commande `pnpm prisma generate`.
- Enfin, lancez le projet avec la commande `pnpm run dev`.

### Variables d'environnement

Pour lancer le projet, il faut créer un fichier `.env` à la racine du projet et y ajouter les variables d'environnement suivantes :

**La base de données (serverless) du projet est hébergée sur [CockroachCloud](https://www.cockroachlabs.com/).**

```plaintext
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
DATABASE_URL=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=
```

### Explications

- Github
  - Il faut créer une application OAuth sur Github pour obtenir ces variables [Voir la documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).
- Google
  - Il faut créer une application OAuth sur Google pour obtenir ces variables. [Voir la documentation](https://developers.google.com/identity/protocols/oauth2).
- NextAuth
  - Il faut générer une clé secrète pour NextAuth. `openssl rand -base64 32`
- Database
  - Il faut créer une base de données sur CockroachCloud pour obtenir cette variable. [Voir la documentation](https://www.cockroachlabs.com/docs/).
- Email
  - Utilisez un service SMTP (Mailtrap, Gmail, etc.) pour obtenir ces variables. [Voir la documentation nodemailer](https://nodemailer.com/about/).

### Fonctionnalités (api)

- [x] Authentification
- [x] Création de compte
- [x] Connexion
- [x] Déconnexion
- [x] Création d'une collection
- [x] Suppression d'une collection
- [x] Modification d'une collection
- [x] Création d'un collectible
- [x] Suppression d'un collectible
- [x] Modification d'un collectible
- [x] Drag and drop des collectibles
- [x] Modification bio utilisateur
- [x] Modification du nom d'utilisateur

### Pages

- [ ] Page d'accueil
- [x] Page de connexion / inscription
- [x] Page tableau de bord
- [x] Page verifications de l'email
- [x] Modal de création d'une collection
- [x] Modal de modification d'une collection
- [x] Modal de création d'un collectible
- [x] Modal de modification d'un collectible
- [x] Page profil utilisateur public
- [x] Page paramètres utilisateur
- [x] Page mentions légales
- [x] Page politique de confidentialité
- [x] Page de politique de confidentialité

### Stack

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [NextAuth.js](https://next-auth.js.org/)
- [Node Mailer](https://nodemailer.com/about/)
- [JSX Email](https://jsx.email/)
# icemark
