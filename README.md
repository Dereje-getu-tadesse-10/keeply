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

### Stack

- [Next.js](https://nextjs.org/)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

