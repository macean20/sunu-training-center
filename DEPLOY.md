# Guide de déploiement Windows · SUNU Training Center

Guide étape par étape pour publier le projet sur GitHub puis le déployer sur Cloudflare Pages depuis Windows.

---

## ⚡ Vue d'ensemble

```
[Ton PC Windows]  ──git push──▶  [GitHub repo]  ──webhook──▶  [Cloudflare Pages]  ──▶  https://sunu-training-center.pages.dev
```

Tu pousses ton code sur GitHub. Cloudflare détecte automatiquement chaque modification et redéploie le site en moins d'une minute.

---

## Étape 1 — Installer les outils sur Windows

### 1.1 Installer Git

1. Télécharge Git pour Windows : **[https://git-scm.com/download/win](https://git-scm.com/download/win)**
2. Lance l'installateur. Garde toutes les options par défaut sauf une recommandation :
   - À l'écran « Adjusting your PATH environment », garde **« Git from the command line and also from 3rd-party software »**
3. Une fois installé, ouvre **PowerShell** (Touche Windows → tape « powershell » → Entrée)
4. Vérifie que Git fonctionne :
   ```powershell
   git --version
   ```
   Tu dois voir `git version 2.x.x.windows.x`

### 1.2 Configurer Git (une seule fois sur ta machine)

Dans PowerShell, tape :

```powershell
git config --global user.name "Ton Nom"
git config --global user.email "ton.email@exemple.com"
```

Utilise le **même email que ton compte GitHub**.

### 1.3 Créer un compte GitHub

Si tu n'en as pas :
1. Va sur **[https://github.com/signup](https://github.com/signup)**
2. Crée ton compte avec l'email configuré ci-dessus
3. Vérifie ton email pour activer le compte

---

## Étape 2 — Préparer le projet localement

### 2.1 Créer un dossier de projet

Dans PowerShell, navigue vers l'endroit où tu veux mettre ton projet (par exemple ton bureau) :

```powershell
cd $env:USERPROFILE\Desktop
mkdir sunu-training-center
cd sunu-training-center
```

### 2.2 Copier les fichiers du projet

Copie ces 4 fichiers dans le dossier `sunu-training-center` que tu viens de créer :

- `index.html` (le fichier principal de l'application)
- `README.md` (description du projet)
- `_headers` (configuration Cloudflare)
- `.gitignore` (fichiers à ignorer)

> ⚠️ **Important :** le fichier `.gitignore` commence par un point. Sur Windows, l'Explorateur peut le masquer. Active **Affichage → Éléments masqués** dans l'Explorateur pour le voir.

### 2.3 Vérifier que tout est là

Toujours dans PowerShell :

```powershell
dir
```

Tu dois voir les 4 fichiers (avec `_headers` qui apparaît probablement comme un fichier sans extension).

---

## Étape 3 — Créer le dépôt GitHub

### 3.1 Sur GitHub.com

1. Connecte-toi sur **[https://github.com](https://github.com)**
2. Clique sur le bouton **« + »** en haut à droite → **« New repository »**
3. Remplis le formulaire :
   - **Repository name** : `sunu-training-center`
   - **Description** : `Plateforme de recrutement GRC - SUNU Training Center`
   - **Public** ✅ (obligatoire pour le plan gratuit Cloudflare Pages)
   - **❌ NE COCHE RIEN** dans « Initialize this repository with » (ni README, ni .gitignore, ni license)
4. Clique **« Create repository »**

GitHub t'affiche une page avec des instructions. Garde cet onglet ouvert.

### 3.2 Configurer l'authentification GitHub (Personal Access Token)

GitHub n'accepte plus les mots de passe pour Git depuis 2021. Il faut créer un **token personnel** :

1. Va sur **[https://github.com/settings/tokens](https://github.com/settings/tokens)**
2. Clique **« Generate new token »** → **« Generate new token (classic) »**
3. Configure :
   - **Note** : `Sunu Training Center`
   - **Expiration** : `90 days` (ou plus long si tu préfères)
   - **Scopes** : coche uniquement **`repo`** (toute la section)
4. Clique **« Generate token »** en bas
5. **⚠️ COPIE LE TOKEN IMMÉDIATEMENT** (il commence par `ghp_...`). Tu ne pourras plus le revoir ensuite. Colle-le dans un fichier texte sur ton PC en attendant.

---

## Étape 4 — Pousser le projet vers GitHub

Dans PowerShell, depuis ton dossier `sunu-training-center` :

```powershell
git init
git add .
git commit -m "Initial commit - SUNU Training Center"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/sunu-training-center.git
git push -u origin main
```

**Remplace `TON_USERNAME`** par ton vrai nom d'utilisateur GitHub.

À l'étape `git push`, une fenêtre s'ouvre te demandant tes identifiants :
- **Username** : ton nom d'utilisateur GitHub
- **Password** : colle ton **token personnel** (celui qui commence par `ghp_...`), pas ton mot de passe GitHub

> 💡 Si la fenêtre ne s'ouvre pas et que PowerShell te demande directement le mot de passe, fais clic-droit dans le terminal pour coller le token (le terminal n'affiche rien, c'est normal).

Si tout va bien, tu dois voir quelque chose comme :
```
Enumerating objects: 6, done.
...
* [new branch]      main -> main
Branch 'main' set up to track 'origin/main'.
```

Va vérifier sur ton dépôt GitHub : tes fichiers doivent y être.

---

## Étape 5 — Déployer sur Cloudflare Pages

### 5.1 Créer un compte Cloudflare

1. Va sur **[https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)**
2. Crée un compte (gratuit, juste l'email à vérifier)

### 5.2 Connecter GitHub à Cloudflare

1. Une fois connecté au dashboard Cloudflare, dans le menu de gauche : **« Workers & Pages »**
2. Onglet **« Pages »** en haut → **« Create a project »** → **« Connect to Git »**
3. Choisis **GitHub** comme provider
4. Tu seras redirigé vers GitHub pour autoriser Cloudflare. Choisis :
   - **Only select repositories** (recommandé)
   - Sélectionne `sunu-training-center` dans la liste
   - Clique **« Install & Authorize »**

### 5.3 Configurer le déploiement

De retour sur Cloudflare, sélectionne ton dépôt `sunu-training-center` → **« Begin setup »**

Configure ainsi :

| Paramètre | Valeur |
|-----------|--------|
| **Project name** | `sunu-training-center` |
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | _(laisse vide)_ |
| **Build output directory** | `/` |
| **Root directory** | _(laisse vide)_ |

Clique **« Save and Deploy »**.

### 5.4 Attendre le premier déploiement

Cloudflare lance le déploiement (30 secondes à 2 minutes). Tu verras les logs en temps réel.

À la fin, ton site est en ligne à l'adresse :

```
https://sunu-training-center.pages.dev
```

🎉 Bravo, ton projet est en production avec HTTPS automatique et un CDN mondial.

---

## Étape 6 — Mises à jour ultérieures

Pour publier une modification, c'est simple :

```powershell
# Dans le dossier du projet
git add .
git commit -m "Description de ma modification"
git push
```

Cloudflare détecte le push, redéploie automatiquement. Le site est à jour en moins d'une minute.

---

## 🆘 Dépannage courant

### « Permission denied » au `git push`

Tu n'as pas utilisé le bon token. Re-saisis-le :
```powershell
git push --force
```
Ou supprime tes identifiants Windows en allant dans **Panneau de configuration → Comptes d'utilisateurs → Gestionnaire d'identifiants → Identifiants Windows**, puis cherche `git:https://github.com` et supprime-le. Au prochain push, on te redemandera le token.

### Le site ne s'affiche pas après déploiement

1. Vérifie sur Cloudflare Pages que le déploiement est marqué **« Success »**
2. Vérifie que ton fichier s'appelle bien **`index.html`** (pas `Index.html` ni autre chose)
3. Force le rechargement du navigateur : **Ctrl + F5**

### Les modifications ne se propagent pas

Cloudflare met en cache. Force le rechargement :
- **Ctrl + F5** sur le navigateur
- Ou via Cloudflare dashboard : **Caching → Configuration → Purge Everything**

### J'ai cassé quelque chose, je veux revenir en arrière

```powershell
git log
# Repère le commit avant le problème (les 7 premiers caractères du hash)
git revert COMMIT_HASH
git push
```

---

## 🎁 Bonus — Domaine personnalisé

Si tu veux `sunutrainingcenter.com` ou autre au lieu de `sunu-training-center.pages.dev` :

1. Achète le domaine (Namecheap, OVH, Gandi, ~10€/an)
2. Dans Cloudflare Pages → ton projet → onglet **« Custom domains »**
3. Suis l'assistant qui te donne les enregistrements DNS à configurer chez ton registrar

Si tu achètes le domaine **directement chez Cloudflare** (Cloudflare Registrar), c'est branché automatiquement en 2 clics.

---

## 📞 Contact

Pour toute question sur ce déploiement, contacte ton équipe projet ou ouvre une issue sur le dépôt GitHub.
