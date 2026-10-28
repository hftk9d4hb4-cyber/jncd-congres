# JNCD — première étape : prototype et identité visuelle

Branche : feat/identite-visuelle-prototype. Aucune fusion dans main.

## Choix graphiques

- Logo exact du service fourni par l’organisation, inchangé ; JNCD et 35e édition en texte HTML adjacent.
- Bleu #00558C, bleu profond #003F66, cyan #00A3C8, fond #EDF7FB.
- Photos de Nice existantes conservées.
- L’extrait ARCCAN n’est pas publié : le fichier fourni contient aussi des éléments de document et des coordonnées bancaires. Un logo source propre reste nécessaire pour une intégration fidèle.

## Corrections

- Image manquante de la page partenaires remplacée par la photo existante de la place Masséna.
- Données scientifiques et intervenants fictifs retirés de site.ts ; collections typées vides.
- Accueil sans durée, axes scientifiques ou soirée annoncés avant validation.
- Contact non confirmé retiré des liens mailto ; composant partagé pour le futur contact officiel.
- Formulaire : référence du formulaire conservée avant await ; réinitialisation avant affichage du résultat.
- Formulaire et tarifs clairement marqués comme démonstration ; précision du transit serveur puis du stockage local.
- Navigation active, libellés explicites, menu mobile avec aria-expanded/aria-controls et fermeture par Échap, lien d’évitement, focus visible et réduction des animations.

## Vérifications réalisées

- npm ci : réussi, verrouillage de dépendances inchangé.
- npm run build : réussi, compilation TypeScript et génération des routes.
- Contrôles HTTP sur la version compilée : /, /programme, /intervenants, /partenaires, /infos-pratiques, /inscription et /admin en 200 avec session de test.
- Images présentes ; aucune adresse mailto fictive ; protection sans session et noindex vérifiés.
- API : création d’un dossier fictif en 201 ; champs absents refusés en 400.
- git diff --check : réussi.
- Contrôle visuel ordinateur/mobile et interaction du formulaire dans le navigateur : non réalisés. Le lanceur de prévisualisation transmet des options Vite incompatibles avec Next.js (--host et --strictPort).

## Hors de cette étape

L’administration et l’inscription restent des démonstrations, sans base partagée, paiement ou confirmation réelle. Les accès de démonstration du prototype restent à remplacer avant toute ouverture publique ou collecte réelle. Dates, lieu, contacts officiels, programmes, intervenants, tarifs et modalités partenaires attendent validation.
