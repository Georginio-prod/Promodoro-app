# Pomodoro app (Frontend Mentor)

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-configuré-6E9F18?logo=vitest&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-3F54A3)

🔗 **Démo en ligne** : <https://promodoro-app-iota.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/Promodoro-app>
🎯 **Défi** : [Pomodoro app](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G) (niveau *Intermediate*)

---

## 📌 Présentation

Application de **minuteur Pomodoro** : 25 minutes de travail, pauses courtes et longues,
barre de progression circulaire et panneau de réglages (durées, police, couleur d'accent).
C'est un exercice de **logique temporelle en JavaScript** (`setInterval`), de **SVG animé**
et de personnalisation d'interface en Vue.

## ✨ Fonctionnalités

- Trois modes : **pomodoro** (25 min), **short break** (5 min), **long break** (15 min).
- **Minuteur** démarrer / pause / redémarrer, affichage `mm:ss`.
- **Anneau de progression SVG** (`stroke-dasharray`) qui se vide au fil du temps.
- **Réglages** dans une modale :
  - durée de chaque mode (1 → 60 min, champs numériques),
  - police : sans-serif, serif ou monospace,
  - couleur d'accent : rouge `#F87070`, cyan `#70F3F8`, violet `#D881F8`.
- Le mode actif et la couleur sont appliqués dynamiquement à toute l'interface.
- Responsive mobile / desktop.

## 🛠️ Stack

| Élément | Détail |
|---|---|
| UI | Vue 3 (Options API : `data`, `computed`, `methods`) |
| Styles | Tailwind CSS 3 (couleurs personnalisées `bgbtn`, `bgp`, `input`…) |
| Build | Vite 5 |
| Tests | Vitest + `@vue/test-utils` + jsdom (configurés, test d'exemple) |

## 📁 Structure

```
Promodoro-app/
├── src/
│   ├── App.vue · main.js
│   ├── assets/main.css
│   └── components/
│       ├── navbar.vue      # Titre
│       ├── card.vue        # Minuteur, sélection de mode, modale de réglages, logique
│       └── __tests__/      # Test Vitest d'exemple
├── vitest.config.js · tailwind.config.js · vite.config.js
└── public/                 # Icônes (settings, close)
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/Promodoro-app.git
cd Promodoro-app
npm install
npm run dev            # http://localhost:5173
npm run test:unit      # tests Vitest
```

## 🌐 Déploiement

Déployé sur **Vercel**. Aucune configuration nécessaire.

## 🔮 Pistes d'amélioration

Sauvegarder les réglages dans `localStorage`, notification sonore en fin de session,
passage automatique au mode suivant.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
