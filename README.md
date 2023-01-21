# Project to Test Deployment with Github Pages

## Description
This project serves as a template to deploy a Vue 3 + Vite project with Github Pages. It follows the instructions of the [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages) except for the 404 error handling which will be explained below.

### 1. Create a `deploy.sh` file
Create an executable script, `deploy.sh`, in the project root with the following content:

```
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
# the following was added by me
# copy index.html and rename it 404.html
cp index.html 404.html

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jamawe/test-pages.git main:gh-pages

cd -
```

Uncomment everything as you need it. In this case I only uncommented the last command: `git push -f git@github.com:jamawe/test-pages.git main:gh-pages`. This is because I am aiming on deploying the project to `https://jamawe.github.io/test-pages` and therefor need to push the `dist` folder to the `gh-pages` branch.


To deploy it to a custom domain please refer e.g. to [the `deploy.sh` file I use in my portfolio page](https://github.com/jamawe/portfolio/blob/main/deploy.sh).

### 2. Add new script to `package.json`
Next `"deploy": "sh deploy.sh"` needs to be added to the `scripts` object in the `package.json` file.

### 3. Fix the 404 error Github Pages throws when using Vue Router
In order for Vue routing to work properly, after building the `dist` folder its `index.html` needs to be copied and renamed to `404.html`. That way SPA routing is possible with Github Pages.
This is achieved by `cp index.html 404.html` in the above script.

# Setup This Project

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
