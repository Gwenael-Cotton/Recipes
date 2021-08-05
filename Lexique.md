## Composant

Une fonction qui reçoit en paramètres un objet "props" et qui return qqchose à afficher (JSX)

## Container 

Un composant React qui donne à un autre les props dont il a besoin.
Ce qu'on faisait initialement dans App 

## Action creator

Une fonction qui return un objet d'action qui sera reçu par:
* chaque middleware
* le reducer

## Dispatch

Une fonction qui permet de faire circuler l'action dans la chaine.

## Middlewares

Une fonction qui reçoit store, next et chaque action, et qui peut exécuter du code selon le type d'action reçu.

Ex: 
* Aller chercher des recettes
* Aller chercher une recettes
* Connecter l'utilisateur

## Reducer

Une fonction qui return le state (un objet)



