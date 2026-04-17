# HiPay - Test Technique Automatisation Frontend  

Ce projet contient l'automatisation des tests pour la page "Gestion des Risques" de la plateforme HiPay. Il utilise CodeceptJS avec le helper Playwright.

## Analyse et Stratégie (sections de réponses)  

### 1. Périmètre des tests  

L'objectif est de valider la stabilité et l'expérience utilisateur (UX) de la page, sur différents navigateurs, tout en assurant une bonne gestion des éléments intéractifs (bannières de cookies, redirections, formulaires).  

### A. Tests fonctionnels et UX  
**Accès et Visibilité** : Vérification que la page charge correctement toutes les sections, les bons éléments UI (couleurs, wording..), les headers, etc.  

**Gestion des Cookies** : Vérification de son apparition et de sa désactivation lors des intéractions  

**Interactivité** : Validation des liens, des ancres, des sliders ou des boutons d'appel à l'action (CTA) présents sur la page.

**Formulaires de contact** : Vérification de la présence et de la soumission (ou tentative de soumission) des formulaires pour les prospects intéressés par les solutions.  

**Tests multi navigateurs** :  Intégrer des run sur plusieurs navigateurs (chrome, firefox, safari..)  

### B. Stratégie de robustesse (Sécurité et Fiabilité)  

Dans le formulaire de contact, il peut y avoir un risque en terme de cybersécurité, plusieurs tests peuvent les prévenir  

**Test d'injection Cross-Site Scripting (XSS)** : Tenter de saisir des balises HTML ou des scripts simples dans les champs "Nom" ou "Message" (ex: <script>alert('XSS')</script>). Le frontend doit bloquer la saisie, encoder les caractères ou afficher une erreur de validation.  

**Validation des formats (Data Sanitization)** : Vérifier le rejet de formats incohérents qui pourraient servir à sonder la base de données (SQL Injection), en saisissant des apostrophes simples ' ou des séquences comme "-- ou OR 1=1".  

### 2. Stratégie d'automatisation  
L'architecture vise à rendre les tests lisibles pour des profils non-techniques tout en restant facilement maintenables.  

### A. Choix technologiques et méthodologiques  
**Gherkin (BDD)** : Les tests sont rédigés en langage clair pour permettre une validation facile des scénarios par les équipes produit (PO/QA).  

**Page Object Model (POM)** : Chaque page ou composant est représenté par un "objet", ce qui permet de centraliser les sélecteurs (IDs, sélecteurs CSS) et les fonctions.  

**Sélecteurs résilients** : Priorisation des IDs et des attributs ARIA pour limiter la sensibilité des tests aux changements de structure HTML (DOM).  

**Isolation des sessions** : Chaque test démarre dans un contexte de navigation propre pour éviter toute pollution par le cache ou les cookies des tests précédents.  

### B. Sélection des scénarios automatisés  

Pour ce test technique, j'ai sélectionné deux parcours utilisateur qui couvre les aspects suivants :    

* Vérifier l'URL de la page  
* Vérifier que l'interface est utilisable après avoir fermé la bannière des cookies  
* Tester le formulaire de contact dans un parcours de saisie incomplète des informations  
* S'assurer que le bouton de demande d'information redirige vers le bon formulaire.  
* Vérifier le contenu et le fonctionnement du slider sur les différents risques  

### C. Reporting et Qualité  
**Captures d'écran** : En cas d'échec, une capture d'écran est automatiquement générée dans le dossier output/ pour faciliter le débogage.  

**Qualité logicielle** : Intégration d'un Linter (ESLint V9) avec le format Flat Config pour maintenir un code JavaScript propre, indenté et sans variables orphelines.  

**Architecture du projet**  
* `features/` : Scénarios métier écrits en Gherkin.  

* `pages/` : regroupe les Page Objects (ex cookiesHandling.js)

* `step_definitions/` : Code JavaScript faisant le lien entre les phrases Gherkin et les actions avec les Page Object.  

* `codecept.conf.js` : Configuration du navigateur, des services, de l'URL de base et des helpers..  

## Procédure technique  

### Installation  

S'assurer d'avoir Node.js (v18+) installé.  

Cloner le dépôt et installer les dépendances :  

```bash
npm install
```

### Lancement des tests  
Pour lancer tous les tests avec les étapes détaillées dans la console :  

```bash
npm run test 
```  
 
### Reporting  
* **HTML Report** : Un rapport visuel est généré après chaque exécution dans output/report.html.  
* **Allure Report :** Pour une analyse détaillée (avec les détails des requêtes/réponses JSON), utilisez
```bash
allure serve allure-results
```

Linter : Pour vérifier la propreté du code et l'absence d'erreurs d'indentation :  

```Bash  
npm run lint  
```