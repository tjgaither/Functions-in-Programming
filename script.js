var wrapper =  document.body.querySelector(".wrapper");

var dragonDamage = 0;
var dragonEle = document.createElement("h1");
dragonEle.innerHTML = "Dragon Damage: " + dragonDamage


var winEle = document.createElement("h2");

function dragonAttack(damage, attackType){
  if (attackType == "fire"){
    dragonDamage = dragonDamage + (damage - 1);
  }
  if (attackType == "ice"){
    dragonDamage = dragonDamage + (damage + 1);
  }
  if (attackType == "poison"){
    dragonDamage = dragonDamage + damage
  }
  
  dragonEle.innerHTML = "Dragon Damage: " + dragonDamage

  if (dragonDamage >=10){
    winEle.innerHTML = "The dragon has been defeated!"
    winEle.style.color="red"
  }
}

document.body.querySelector(".hot").addEventListener("click", function(){
  dragonAttack(3, "fire")
}); 
document.body.querySelector(".cold").addEventListener("click", function(){
  dragonAttack(1, "ice")
}); 
document.body.querySelector(".sick").addEventListener("click", function(){
  dragonAttack(4, "poison")
});

document.body.appendChild(dragonEle)
document.body.appendChild(winEle)