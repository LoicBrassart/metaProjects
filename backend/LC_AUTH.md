# PLANNING LC AUTH

- Lister routes -> Insomnia
  - POST /auth/signup
  - POST /auth/login
  - GET /secure/ponies
- Mettre en place tests sur Insomnia
- Modifs bdd
  - Ajout d'une table user
- POST /auth/signup
  - Recuperer le body
  - bcrypt le password
  - effacer le password original
  - enregistrer en bdd
  - recuperer le nouvel id, l'ajouter au body
  - creer un token à partir du body modifié
  - retourner le body _et_ le token
- POST /auth/signin
  [utilise la strat locale]
  [le body contient un username et un password en clair]
  - Entrer dans la strat locale
  - Aller chercher un user qui porte le bon username
  - Si erreur tech -> done(err)
  - Si personne ne match -> done(null, false)
  - bcrypt le password en clair
  - Si les deux hashs ne matchent pas -> done(null, false)
  - (ici, tout a fonctionné) done(null, user)
  - Entrer dans notre middleware
    [Ici on *sait* qu'un user est connecté]
    [Passport a rempli req.user avec les infos kivonbien]
  - creer un token à partir de req.user
  - retourner le body _et_ le token
- GET /secure/ponies
  - Creer une route classique
  - Ajouter le passport.authenticate('jwt') à la route
  - ???
  - PROFIT
