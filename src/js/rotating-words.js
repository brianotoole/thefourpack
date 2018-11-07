/**
  * Rotating Words
  */

 let terms1 = ["manage websites", "build products", "create systems"]; //nouns
 let terms2 = ["scale your business", "sell more", "adapt"]; //adjectives
 
 function rotateTerm1() {
   var ct = $("#js-text-rotate-1").data("term") || 0;
   $("#js-text-rotate-1").data("term", ct == terms1.length -1 ? 0 : ct + 1).text(terms1[ct]).fadeIn().delay(3000).fadeOut(200, rotateTerm1);
 }
 
 function rotateTerm2() {
   var ct = $("#js-text-rotate-2").data("term") || 0;
   $("#js-text-rotate-2").data("term", ct == terms2.length -1 ? 0 : ct + 1).text(terms2[ct]).fadeIn().delay(3000).fadeOut(200, rotateTerm2);
 }
 
 $(rotateTerm1);
 $(rotateTerm2); 