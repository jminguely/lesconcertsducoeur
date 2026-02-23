# 🚀 Roadmap: Migration Strapi v3 → v5 (Legacy Rescue)

Ce document décrit la stratégie technique pour migrer le projet `Les Concerts du Cœur` d'une architecture obsolète (Strapi v3 / Node 14) vers une architecture pérenne (Strapi v5 / Node 18+).

---

## 🛑 Pré-requis Importants

- [ ] **Sauvegarde Complète** :
  - Dump de la base de données PostgreSQL (Production & Local).
  - Copie du dossier `uploads` (images).
  - Commit git de l'état "stable" actuel (même si cassé sur Node 20).

---

## 📅 Phase 1 : Migration Backend (v3 → v4)

_L'étape la plus complexe structurellement._

### 1. Initialisation

- [ ] Créer une nouvelle branche git `migration/strapi-v4-v5`.
- [ ] Mettre à jour `package.json` pour cibler Strapi v4 latest (`4.x.x`).
- [ ] Utiliser [Strapi Codemods](https://github.com/strapi/codemods) pour la structure des dossiers.

### 2. Refonte du Code (Avec Copilot)

_Prompt Copilot : "Transforme ce contrôleur/service Strapi v3 en utilisant la Factory API v4 (`createCoreController`)."_

- [ ] **Config** : Migrer `./config/*` (structure `server.js`, `database.js` change).
- [ ] **API** : Réécrire les Controllers, Services et Routes (de `module.exports` vers Factories).
- [ ] **Models** : Convertir les schemas `models/*.settings.json` vers `content-types/schema.json`.
- [ ] **Plugins & Extensions** :
  - Réécrire `extensions/users-permissions` (lourd changement d'API).
  - Vérifier `ckeditor5` (remplacer par l'éditeur natif v4/v5 ou plugin compatible).

### 3. Migration des Données v3 → v4

- [ ] Exécuter les scripts de migration SQL Strapi v4 (nécessaire pour la table `admin_users` et les relations).

---

## 📅 Phase 2 : Passage à Strapi v5

_Une fois en v4, le passage v5 est plus simple._

- [ ] Mettre à jour les dépendances vers `@strapi/strapi@5.x.x`.
- [ ] Vérifier la compatibilité des plugins.
- [ ] Tester le démarrage avec **Node 18/20**.

---

## 📅 Phase 3 : Frontend Nuxt (L'Adaptation)

_C'est ici que Copilot fait gagner 50% du temps._

### 1. Stratégie "Smart Adapter" (Recommandée)

Au lieu de réécrire 100 templates Vue, on crée un transformateur.

- [ ] Créer un utilitaire `utils/strapiAdapter.js`.
      _Prompt Copilot : "Écris une fonction utilitaire récursive qui prend une réponse API Strapi v4/v5 (nested data/attributes) et l'aplatit pour qu'elle ressemble à une réponse v3 simple."_

### 2. Migration GraphQL

_Prompt Copilot : "Réécris cette query GraphQL v3 pour Strapi v4. Ajoute les niveaux d'imbrication `data { attributes { ... } }` nécessaires."_

- [ ] Mettre à jour `frontend/graphql/*.gql` (un par un).
- [ ] Tester les pages clés :
  - [ ] Homepage (Aggrégation de contenus).
  - [ ] Page Artiste (Champs riches).
  - [ ] Agenda (Dates et Filtres).

---

## 🛠 Boîte à Outils Copilot

Utilise ces prompts pour accélérer la migration :

**Pour les Controllers :**

> "Voici le code de mon controller v3 : [Coller Code]. Réécris-le pour utiliser l'API Factory de Strapi v4."

**Pour GraphQL :**

> "Voici mon fichier `.gql` actuel. Strapi v4 structure les données avec des objets `data` et `attributes`. Peux-tu réécrire la requête pour qu'elle soit compatible ?"

**Pour les Erreurs :**

> "J'ai cette erreur `500` au démarrage de Strapi v4. Analyse mes fichiers de config et dis-moi ce qui est obsolète par rapport à la documentation v4."
