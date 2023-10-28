# Keeply

__Projet pour ma soutenance.__

Keeply est une application web qui permet de gérer ses collections de vinyles, de cartes, de timbres, etc., et de partager ces collections sur son profil. Elle offre également la possibilité de visualiser l'avancée de ses collections en temps réel.



### Configuration

Pour lancer le projet, il faut installer les dépendances avec la commande `pnpm i` puis lancer le projet avec `pnpm run dev`.

### Variables d'environnement

Pour lancer le projet, il faut créer un fichier `.env` à la racine du projet et y ajouter les variables d'environnement suivantes :

```
GITHUB_CLIENT_ID= # Créer une application sur github 
GITHUB_CLIENT_SECRET= # Créer une application sur github
GOOGLE_CLIENT_ID= # Créer une application sur google
GOOGLE_CLIENT_SECRET= # Créer une application sur google
NEXTAUTH_URL=http://localhost:3000 # Url de l'application
NEXTAUTH_SECRET= # Générer une clé secrète
DATABASE_URL= # Url de la base de données serverless (cockroachdb)
EMAIl_SERVER_HOST= # Hébergeur de mail
EMAIL_SERVER_PORT= # Port de l'hébergeur de mail
EMAIL_SERVER_USER= # Adresse email de l'hébergeur de mail
EMAIL_SERVER_PASSWORD= # Mot de passe de l'hébergeur de mail
EMAIL_FROM= # Adresse email de l'expéditeur
```

> La base de données (serverless) du projet est hébergée sur [CockroachCloud](https://www.cockroachlabs.com/).

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
- [x] Modification username utilisateur

### Pages
- [ ] Accueil
- [x] Connexion
- [x] Tableau de bord
- [x] Vérification email
- [ ] Création d'une collection
- [ ] Création d'un collectible
- [ ] Modification d'une collection
- [ ] Modification d'un collectible
- [ ] Page de profil
- [ ] Page de collection


### Stack & librairies
- Next.js (react)
- Css modules (css) 
- Prisma (ORM)
- PostgreSQL (cockroachdb)
- NextAuth (authentification)
- JSX Email (email)
- NodeMailer (email)
- Zod (validation)
- React sortable (drag and drop)
- React toastify (notifications)
- Lucide (icons)
- React hook form (formulaires)