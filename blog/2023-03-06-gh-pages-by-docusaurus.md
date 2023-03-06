---
slug: gh-pages-by-docusaurus
title: GitHub Pages by Docusaurus
authors: ks6088ts
tags: [docusaurus]
---

A note for deploying a static site built with docusaurus on GitHub Pages

<!--truncate-->

## Get started

### Scaffold project website

- Reference: [Docusaurus / Installation / Scaffold project website](https://docusaurus.io/docs/installation#scaffold-project-website)

```shell
npx create-docusaurus@latest ks6088ts-labs.github.io classic --typescript
```

### Docusaurus configurations

- Reference: [docusaurus.config.js](https://docusaurus.io/docs/api/docusaurus-config)
- Commit: [update settings for docusaurus](https://github.com/ks6088ts/ks6088ts.github.io/commit/c02e76e5f68febeeb6c4cd2df02a0473f762e9fb)

### Deploy to GitHub Actions with GitHub Actions

- Reference: [Docusaurus / Deployment / Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)
- Commit: [add deploy action](https://github.com/ks6088ts/ks6088ts.github.io/commit/f27953ff6b308eb61986d7941f779f0a24fc57ef)