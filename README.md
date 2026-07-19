# JNCD Congrès — prototype privé

Site Next.js des **35es Journées Niçoises de Chirurgie Digestive**, destiné à la préparation et aux tests internes du congrès du service de chirurgie viscérale et digestive du CHU de Nice.

## Fonctionnalités actuelles

- site institutionnel moderne et responsive ;
- présentation du congrès ;
- programme scientifique sur deux journées ;
- fiches des intervenants et partenaires ;
- informations pratiques, avec hébergement réservé directement par les participants ;
- formulaire d’inscription de démonstration ;
- option de participation au dîner ;
- génération d’un numéro de dossier test ;
- tableau de bord administrateur de démonstration ;
- export CSV ;
- protection par code d’accès ;
- blocage de l’indexation par les moteurs de recherche.

## Démarrage local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Le site est alors disponible sur `http://localhost:3000`.

## Variables d’environnement

```env
JNCD_PREVIEW_PASSWORD=mot-de-passe-de-test
JNCD_COOKIE_SECRET=secret-long-et-aleatoire
```

Ne jamais enregistrer les valeurs réelles dans GitHub. Elles doivent être configurées dans les variables d’environnement de Vercel.

## Vérifications

```bash
npm run lint
npm run build
```

## Limites du prototype

Les inscriptions sont enregistrées localement dans le navigateur pour les tests. Aucun paiement réel n’est déclenché et aucune donnée personnelle ne doit être utilisée à ce stade.

La mise en production nécessitera notamment :

- une base PostgreSQL/Neon ou Supabase ;
- Stripe Checkout et ses webhooks ;
- un service de courriels transactionnels ;
- une authentification administrateur robuste ;
- les mentions légales et règles d’annulation définitives ;
- une validation RGPD institutionnelle.
