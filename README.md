Projet de test automatisé frontend sur la page "Fraud Management" de Hipay.
Les tests sont réalisés avec CodeceptJS et utilisent le langage Gherkin (BDD).

** Prérequis
Node.js (v18 ou supérieur recommandé)
Java JRE/JDK (version 8 ou supérieure, nécessaire pour les rapports Allure)
Un navigateur (Chrome est utilisé par défaut)

** Installation
Cloner le projet
Installer les dépendances :
npm install

** Exécution des tests
Lancer tous les tests de la suite des scénarios Gherkin :

npx codeceptjs run --features

** Rapports de tests (Allure)

Générer et ouvrir le rapport :

allure serve allure-results

** Structure du projet
features/ : Contient les fichiers .feature (scénarios Gherkin).

step_definitions/ : Traduction technique des étapes Gherkin.

pages/ : Page Objects (Locators et fonctions spécifiques à la page Fraud Management).

steps_file.js : Contient les Personas (données de test) et fonctions globales de l'acteur.

output/ : Contient les screenshots en cas d'échec 

allure-results/ : Contient les JSON nécessaires aux reporting Allure.
