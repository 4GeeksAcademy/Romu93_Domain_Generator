/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  function domainGenereitor(pronoun, adjetive, noun, extencion) {

    var myDomain = "";
    
    myDomain += pronoun[Math.floor(Math.random() * pronoun.length)];
    myDomain += adjetive[Math.floor(Math.random() * adjetive.length)];
    myDomain += noun[Math.floor(Math.random() * noun.length)];
    myDomain += extencion[Math.floor( Math.random() * extencion.length)];

    return myDomain;
  }

  var pronouns = ["The", "Our", "I", "We", "They"];
  var adjectives = ["Great", "Big", "Deep", "Fabulous", "Shimmering"];
  var nouns = ["Jogger", "Racoon", "City", "Farm", "Space"];
  var extencion = [".com", ".net", ".us", ".io"];

  var resultado = domainGenereitor(pronouns, adjectives, nouns, extencion);

  var myDomain = document.getElementById("myDomain");

  myDomain.textContent = resultado;
};
