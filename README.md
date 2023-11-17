# Keeply

Projet en live [lien](https://keeply-neon.vercel.app/)

Page profil [lien](https://keeply-neon.vercel.app/dereje)

**Projet pour ma soutenance.**

Keeply est une application web qui permet de gérer ses collections de vinyles, de cartes, de timbres, etc., et de partager ces collections sur son profil. Elle offre également la possibilité de visualiser l'avancée de ses collections en temps réel.

### Variables d'environnement

Pour lancer le projet, il faut créer un fichier `.env` à la racine du projet et y ajouter les variables d'environnement suivantes :

```plaintext
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DATABASE_URL=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=
```

### Explications

- Github (Optionnel)
  - Il faut créer une application OAuth sur Github pour obtenir ces variables [Voir la documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).
- Google (Optionnel)
  - Il faut créer une application OAuth sur Google pour obtenir ces variables. [Voir la documentation](https://developers.google.com/identity/protocols/oauth2).
- NextAuth (Obligatoire)
  - Il faut générer une clé secrète pour NextAuth. `openssl rand -base64 32`
- NextAuth URL (Obligatoire)
  - Il faut mettre l'URL de votre application
- Database (Obligatoire)
  - Il faut créer une base de données sur CockroachCloud ou Postgresql pour obtenir cette variable. [Voir la documentation](https://www.cockroachlabs.com/docs/).
- Email (Optionnel)
  - Utilisez un service SMTP (Mailtrap, Gmail, etc.) pour obtenir ces variables. [Voir la documentation nodemailer](https://nodemailer.com/about/).

### Mise en place

Tout d'abord il faut installer les dépendances :

```bash
pnpm install
```

Mettre en place la base de données : Utilisez le fichier `migration.sql` à la racine du projet, compatible uniquement avec PostgreSQL et CockroachDB (MySQL n'est pas supporté).

Pour migrer la base de données, utilisez :

```bash
pnpm run migrate:dev
```

Ajouter des codes couleurs à la base de données (Obligatoire) :

```bash
pnpm run migrate:bgc
```

Cette étape est essentielle pour le bon fonctionnement de l'application.

### Pour lancer le projet

```bash
pnpm run dev
```

### Pour lancer le projet

Pour que l'authentification fonctionne, configurez au moins une méthode de connexion (Google, GitHub, email) en définissant les variables d'environnement correspondantes dans votre fichier `.env`.

### Stack

- [Next.js](https://nextjs.org/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
