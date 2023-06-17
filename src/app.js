/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  function domainGenereitor(pro, adje, nou, ext) {
    var my_domain = "";
    my_domain += pro[Math.floor(Math.random() * pro.length)];
    my_domain += adje[Math.floor(Math.random() * adje.length)];
    my_domain += nou[Math.floor(Math.random() * nou.length)];
    my_domain += ext[Math.floor(Math.random() * ext.length)];

    return my_domain;
  }

  var pronoun = ["The", "Our", "I", "We", "They"];
  var adj = ["Great", "Big", "Deep", "Fabulous", "Shimmering"];
  var noun = ["Jogger", "Racoon", "City", "Farm", "Space"];
  var extencion = [".com", ".net", ".us", ".io"];

  var resultado = domainGenereitor(pronoun, adj, noun, extencion);

  var my_domain = document.getElementById("myDomain");

  my_domain.textContent = resultado;
};
