# AI_CONTEXT.md

## 1. Tech Stack Summary

### Frontend (`/frontend`)

- **Framework**: Nuxt.js (v2) - SSR/Static Site Generator.
- **Core Library**: Vue.js (v2, Options API).
- **Styling**: Tailwind CSS (v2/v3) w/ PostCSS.
- **Data Fetching**: Apollo Client (GraphQL).
- **State Management**: Vuex (`store/`).
- **I18n**: `nuxt-i18n` (French/German, prefix strategy).
- **Key Libs**: `vue-splide` (sliders), `vue-dompurify-html`, `date-fns`.

### Backend (`/backend`)

- **CMS Framework**: Strapi (v3 structure inferred from `extensions` and controller paths).
- **Runtime**: Node.js.
- **Database**: PostgreSQL (`client: "postgres"` in `database.js`).
- **API Type**: GraphQL (via Strapi plugin).

## 2. Project Architecture

### Structure

```text
/backend          # Strapi Headless CMS
  /api            # Content Types (Controller/Model/Service)
  /config         # DB & Server config
  /extensions     # Strapi plugin overrides (Users/Permissions)
/frontend         # Nuxt.js Application
  /components     # Vue components (Atomic + Dynamic Zones)
  /graphql        # .gql query files
  /pages          # File-system routing
  /store          # Vuex modules
```

### Data Flow

**Strapi (PostgreSQL)** exposes a **GraphQL API**.
**Nuxt.js** fetches data server-side (`prefetch: true` in Apollo) or client-side using `.gql` files located in `frontend/graphql/`.

## 3. Key Conventions & Patterns

- **Dynamic Content Pattern**: Pages rely heavily on a "Dynamic Zone" pattern. Only one main component (`DynamicContent.vue`) maps Strapi component strings (e.g., `ComponentContentHeadline`) to Vue components.
- **Styling**: Utility-first (Tailwind). Custom theme colors extend Tailwind config to match Cantons (`VS`, `VD`, `GE`, `FR`).
- **Routing**: Standard Nuxt file-system routing.
  - `_slug.vue`: Detail pages (e.g., Artists).
  - `_canton.vue`: Canton specific pages.
- **I18n**: Logic is handled via route prefixes (`/fr/`, `/de/`). Strings stored in `frontend/i18n/*.js`.
- **Naming**:
  - Components: PascalCase (`EventTeaser.vue`).
  - Folders: kebab-case.
- **Environment**: Backend URL hardcoded in `frontend/graphql/clientConfigs.js` as `https://api.lesconcertsducoeur.ch/graphql`.

## 4. Data Models (Key Entities)

- **MusicGroup (Artist)**: `name`, `slug`, `genre`, `instrument`, `description` (RichText), `cover` (Image).
- **Concert (Event)**: `title`, `date_time`, `time_end`, `location`, `canton` (Relation), `music_group` (Relation).
- **Canton**: `name`, `abbreviation` (VS/VD/GE/FR). Acts as a primary filter for content.
- **Page**: Generic content pages composed of Dynamic Zones (Headlines, Grids, Accordions).
- **Settings**: Global site config (Notifications/Marquee, Logos, Footer links).

## 5. Critical Commands

### Frontend

```bash
cd frontend
npm install
npm run dev      # Start dev server (localhost:3000)
npm run generate # Static build
```

### Backend

```bash
cd backend
yarn install
yarn develop     # Start Strapi in watch mode (localhost:1337)
yarn build       # Build Admin panel
```
