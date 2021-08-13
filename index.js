
let strawberry = `This cake contains strawberry`
let WhatDoesThisCakeContain = function(typeOfCake){
  return typeOfCake
}
let RunwhatDoeThisCakeContain = WhatDoesThisCakeContain(strawberry)

function receivesAFunction(cheesecake){
  return (cheesecake(strawberry))
}
function returnsANamedFunction(){
    return WhatDoesThisCakeContain;
}

function returnsAnAnonymousFunction(){
    return function(){
    }    
}