/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
  texte2 = texte.replace("e", " ");
  return texte2;
}
var concatString = function (texte1, texte2) {
  texte3 = texte1 + texte2;
  return texte3;
}
var afficherCar5 = function (texte) {
  texte2 = texte.charAt(4);
  return texte2;
}
var afficher9Car = function (texte) {
  texte2 = texte.slice(0, 9);
  return texte2;
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
  var texte2 = typeof "texte" === "string";
  return texte2;
}
var AfficherExtensionString = function (texte) {
    return texte.substr(15,17);
}
var NombreEspaceString = function (texte) {
  texte = texte.split(' ').length-1;  //texte = transforme la chaine de caractères en tableau et compte les cellules -1. donc 5.
  return texte;
}
var InverseString = function (texte) {
  texte = texte.split(''); //transforme la chaine de caractères entableau qu'il divise ('') à chaque lettre.
  texte = texte.reverse(); // inverse les cellules du tableau
  texte = texte.join(''); // réassemble les cellules du tableau
     return texte; // Note : l'utilisationt de simple quotes alors que les double-quotes force une séparation du tableau avec la virgule.
}

/**
  Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  var puissance = Math.pow(x, y);
  return puissance;
}
var valeurAbsolue = function (nombre) {
  var absolute = Math.abs(nombre);
  return absolute;
}
var valeurAbsolueArray = function (array) {
  elements = array.map(Math.abs)
    return elements;
}
var sufaceCercle = function (rayon) {
    surface = (rayon * rayon) * Math.PI;
    surface = Math.round(surface);
    return surface;
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
  calcul = poids / (taille * taille);
   calcul = calcul.toFixed(2);
   return parseFloat(calcul);
}
