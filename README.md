# UNDRGRND

A social network linking up ravers with the newest underground music events.

# Contents 

- [1.0 Tech Stack](#1.0)
  - [1.1 Front-end](#1.1)
  - [1.2 Back-end](#1.2)
- [2.0 System Design](#2.0)
- [3.0 Github Project Info](#3.0)
  - [3.1 Branching Strategy](#3.1)
  - [3.2 Install & Run](#3.2)
- [4.0 Trello Board](#4.0)
  - [4.1 Trello Process](#4.1)

---

<div id="1.0" />

# 1.0 Tech Stack

<div id="1.1" />

## 1.1 Front-end

- [Nuxt.js (Vue.js Framework)](https://nuxtjs.org/guide)
- [Vue.js (Javascript SPA Framework)](https://vuejs.org/)
- [Vuex (Vue.js state management)](https://vuex.vuejs.org/en/)
- [SASS (Compiled CSS Language)](http://sass-lang.com/)
- [ESLint (Airbnb Javascript Style Guide)](https://github.com/airbnb/javascript)

[<-- Back to Contents](#contents)

---

<div id="1.2" />

## 1.2 Back-end

- [GraphQL](http://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [Prisma](https://www.prismagraphql.com/)

[<-- Back to Contents](#contents)

---

<div id="2.0" />

# 2.0 System Design

[<-- Back to Contents](#contents)

---

<div id="3.0" />

# 3.0 Github Project Info

<div id="3.1" />

## 3.1 Branching Strategy

### Branches

`master`: The main branch that features, bug fixes and documentation updates
will be merged into.

### Creating a branch

Branches should be named by their type, following they're Trello ticket number,
and a few words describing that ticket.

Example: `feature/UG-92-example-branch-name`

### Branch Types

- `feature`: Code that contains new features or functionality to project code base.
- `task`: Changes to already existing components or functionality.
- `fix`: Fixes a broken feature or piece of functionality.

### Committing Code

Commits should be named with their Trello ticket number, as well as a short
description of what was achieved in this commit.

If a ticket is small enough of a task (like editing some docs/fixing typos etc)
one can commit straight to dev instead of opening a pull request.

e.g. `UG-94: Example git commit`

If the commit is small enough that it isn't worth a Trello Card and Pull Request
(fixing a README typo, removing old info/files), label it a PATCH and commit 
directly to dev.

e.g. `PATCH: Removing incorrect README info`

### Merging Code

To merge your branch, open a pull request on Github and change the title of the
pull request to match that of the Trello ticket, with square brackets around the
ticket number, and regular brackets around the type of card (feature/task/fix).

e.g. `[UG-92] (Feature) Example Pull Request Name`

When code has been reviewed (if necessary) select the option 'Squash and Merge'

[<-- Back to Contents](#contents)

---

<div id="3.2" />

## 3.2 Install and Run

### 3.2.1 Front-end

``` bash
# install dependencies
$  yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

[<-- Back to Contents](#contents)

### 3.2.2 Back-end

Create a `.env` file that contains your prisma details:
```
PRISMA_STAGE=""
PRISMA_ENDPOINT=""
PRISMA_CLUSTER=""
PRISMA_SECRET=""
APP_SECRET=""
```

To run the server:
```bash
# move to server directory
cd server

#starts GraphQL server on `http://localhost:4000
yarn start

starts GraphQL server on http://localhost:4000 _and_ opens GraphQL Playground
yarn dev

# opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
yarn playground

# gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)
yarn prisma <subcommand>

```

[<-- Back to Contents](#contents)

---

<div id="4.0" />

# 4.0 Trello Board

Link to UNDRGRND Trello Board: https://trello.com/b/Eawz2533

<div id="4.1" />

## 4.1 Trello Process

In our Trello we currently have 5 columns: Backlog Refinement, ToDo, In
Progress, PR/QA, Done, Cancelled.

**Backlog Refinement**: New cards are created here. When creating a new card, you must label it with the
project initials, the card number, and a short description of what the card is
for.

e.g. UG-18: Update README with Trello Process

A full description must be added to the card as well as a label before it can be
moved to the ToDo column for a team member to pick up and complete.

**ToDo**: Card is ready to be picked up but has not yet been.

**In Progress**: Branch has been opened (if required) and a member is working on that ticket.

**PR/QA**: Requires a peer code review, and is currently in a  pull request from feature
branch to dev. (Not always a necessary step)

**Done**: Card has been completed and merged into `dev` branch.

**Cancelled**: Card has been cancelled and is no longer a ToDo. A comment must
be left on the card detailing reasons for its cancellation.


[<-- Back to Contents](#contents)

---
