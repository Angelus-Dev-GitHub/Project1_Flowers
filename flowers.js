let roseCounter =0;
let roseQuantityToAdd=0;
let totalToShow=0;

document.querySelector("#rose-button").onclick = function(event) {
    event.preventDefault();
    const basketRose= document.querySelector("#rose-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const roseAmount = document.querySelector("#rose-amount");
    const roseQuantity = document.querySelector("#rose-quantity");
    basketRose.style.display="flex";
    basketRose.style.justifyContent="space-evenly";
    roseCounter = roseAmount.innerHTML;
    roseCounter=parseFloat(roseCounter);
    roseCounter= roseCounter + 2.99;
    roseAmount.innerHTML= (roseCounter).toFixed(2);
    roseQuantityToAdd=roseQuantity.innerHTML

    roseQuantityToAdd=parseFloat(roseQuantityToAdd);
    roseQuantityToAdd=roseQuantityToAdd + 1
    roseQuantity.innerHTML = roseQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+2.99).toFixed(2);

};

document.querySelector("#rose-delete").onclick = function(event) {
    event.preventDefault();
    const basketRose= document.querySelector("#rose-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const roseAmount = document.querySelector("#rose-amount");
    const roseQuantity = document.querySelector("#rose-quantity");
    basketRose.style.display="flex";
    basketRose.style.justifyContent="space-evenly";
    roseCounter = roseAmount.innerHTML;
    roseCounter=parseFloat(roseCounter);
    roseCounter= roseCounter - 2.99;
    roseAmount.innerHTML= (roseCounter).toFixed(2);
    roseQuantityToAdd=roseQuantity.innerHTML
    if (roseQuantityToAdd==1) {
        basketRose.style.display="none";
    }
    roseQuantityToAdd=parseFloat(roseQuantityToAdd);
    roseQuantityToAdd=roseQuantityToAdd - 1
    roseQuantity.innerHTML = roseQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-2.99).toFixed(2);

};



let tulCounter =0;
let tulQuantityToAdd=0;


document.querySelector("#tul-button").onclick = function(event) {
    event.preventDefault();
    const baskettul= document.querySelector("#tul-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const tulAmount = document.querySelector("#tul-amount");
    const tulQuantity = document.querySelector("#tul-quantity");
    baskettul.style.display="flex";
    baskettul.style.justifyContent="space-evenly";
    tulCounter = tulAmount.innerHTML;
    tulCounter=parseFloat(tulCounter);
    tulCounter= tulCounter + 4.49;
    tulAmount.innerHTML= (tulCounter).toFixed(2);
    tulQuantityToAdd=tulQuantity.innerHTML
    tulQuantityToAdd=parseFloat(tulQuantityToAdd);
    tulQuantityToAdd=tulQuantityToAdd + 1
    tulQuantity.innerHTML = tulQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+4.49).toFixed(2);

};

document.querySelector("#tul-delete").onclick = function(event) {
    event.preventDefault();
    const baskettul= document.querySelector("#tul-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const tulAmount = document.querySelector("#tul-amount");
    const tulQuantity = document.querySelector("#tul-quantity");
    baskettul.style.display="flex";
    baskettul.style.justifyContent="space-evenly";
    tulCounter = tulAmount.innerHTML;
    tulCounter=parseFloat(tulCounter);
    tulCounter= tulCounter - 4.49;
    tulAmount.innerHTML= (tulCounter).toFixed(2);
    tulQuantityToAdd=tulQuantity.innerHTML
    if (tulQuantityToAdd==1) {
        baskettul.style.display="none";
    }
    tulQuantityToAdd=parseFloat(tulQuantityToAdd);
    tulQuantityToAdd=tulQuantityToAdd - 1
    tulQuantity.innerHTML = tulQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-4.49).toFixed(2);

};




let orchCounter =0;
let orchQuantityToAdd=0;


document.querySelector("#orch-button").onclick = function(event) {
    event.preventDefault();
    const basketorch= document.querySelector("#orch-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const orchAmount = document.querySelector("#orch-amount");
    const orchQuantity = document.querySelector("#orch-quantity");
    basketorch.style.display="flex";
    basketorch.style.justifyContent="space-evenly";
    orchCounter = orchAmount.innerHTML;
    orchCounter=parseFloat(orchCounter);
    orchCounter= orchCounter + 3.99;
    orchAmount.innerHTML= (orchCounter).toFixed(2);
    orchQuantityToAdd=orchQuantity.innerHTML
    orchQuantityToAdd=parseFloat(orchQuantityToAdd);
    orchQuantityToAdd=orchQuantityToAdd + 1
    orchQuantity.innerHTML = orchQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+3.99).toFixed(2);

};

document.querySelector("#orch-delete").onclick = function(event) {
    event.preventDefault();
    const basketorch= document.querySelector("#orch-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const orchAmount = document.querySelector("#orch-amount");
    const orchQuantity = document.querySelector("#orch-quantity");
    basketorch.style.display="flex";
    basketorch.style.justifyContent="space-evenly";
    orchCounter = orchAmount.innerHTML;
    orchCounter=parseFloat(orchCounter);
    orchCounter= orchCounter - 3.99;
    orchAmount.innerHTML= (orchCounter).toFixed(2);
    orchQuantityToAdd=orchQuantity.innerHTML
    if (orchQuantityToAdd==1) {
        basketorch.style.display="none";
    }
    orchQuantityToAdd=parseFloat(orchQuantityToAdd);
    orchQuantityToAdd=orchQuantityToAdd - 1
    orchQuantity.innerHTML = orchQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-3.99).toFixed(2);

};

let jonCounter =0;
let jonQuantityToAdd=0;


document.querySelector("#jon-button").onclick = function(event) {
    event.preventDefault();
    const basketjon= document.querySelector("#jon-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const jonAmount = document.querySelector("#jon-amount");
    const jonQuantity = document.querySelector("#jon-quantity");
    basketjon.style.display="flex";
    basketjon.style.justifyContent="space-evenly";
    jonCounter = jonAmount.innerHTML;
    jonCounter=parseFloat(jonCounter);
    jonCounter= jonCounter + 3.99;
    jonAmount.innerHTML= (jonCounter).toFixed(2);
    jonQuantityToAdd=jonQuantity.innerHTML
    jonQuantityToAdd=parseFloat(jonQuantityToAdd);
    jonQuantityToAdd=jonQuantityToAdd + 1
    jonQuantity.innerHTML = jonQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+3.99).toFixed(2);

};

document.querySelector("#jon-delete").onclick = function(event) {
    event.preventDefault();
    const basketjon= document.querySelector("#jon-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const jonAmount = document.querySelector("#jon-amount");
    const jonQuantity = document.querySelector("#jon-quantity");
    basketjon.style.display="flex";
    basketjon.style.justifyContent="space-between";
    jonCounter = jonAmount.innerHTML;
    jonCounter=parseFloat(jonCounter);
    jonCounter= jonCounter - 3.99;
    jonAmount.innerHTML= (jonCounter).toFixed(2);
    jonQuantityToAdd=jonQuantity.innerHTML
    if (jonQuantityToAdd==1) {
        basketjon.style.display="none";
    }
    jonQuantityToAdd=parseFloat(jonQuantityToAdd);
    jonQuantityToAdd=jonQuantityToAdd - 1
    jonQuantity.innerHTML = jonQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-3.99).toFixed(2);

};

let lysCounter =0;
let lysQuantityToAdd=0;


document.querySelector("#lys-button").onclick = function(event) {
    event.preventDefault();
    const basketlys= document.querySelector("#lys-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const lysAmount = document.querySelector("#lys-amount");
    const lysQuantity = document.querySelector("#lys-quantity");
    basketlys.style.display="flex";
    basketlys.style.justifyContent="space-between";
    lysCounter = lysAmount.innerHTML;
    lysCounter=parseFloat(lysCounter);
    lysCounter= lysCounter + 1.99;
    lysAmount.innerHTML= (lysCounter).toFixed(2);
    lysQuantityToAdd=lysQuantity.innerHTML
    lysQuantityToAdd=parseFloat(lysQuantityToAdd);
    lysQuantityToAdd=lysQuantityToAdd + 1
    lysQuantity.innerHTML = lysQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+1.99).toFixed(2);

};

document.querySelector("#lys-delete").onclick = function(event) {
    event.preventDefault();
    const basketlys= document.querySelector("#lys-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const lysAmount = document.querySelector("#lys-amount");
    const lysQuantity = document.querySelector("#lys-quantity");
    basketlys.style.display="flex";
    basketlys.style.justifyContent="space-between";
    lysCounter = lysAmount.innerHTML;
    lysCounter=parseFloat(lysCounter);
    lysCounter= lysCounter - 1.99;
    lysAmount.innerHTML= (lysCounter).toFixed(2);
    lysQuantityToAdd=lysQuantity.innerHTML
    if (lysQuantityToAdd==1) {
        basketlys.style.display="none";
    }
    lysQuantityToAdd=parseFloat(lysQuantityToAdd);
    lysQuantityToAdd=lysQuantityToAdd - 1
    lysQuantity.innerHTML = lysQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-1.99).toFixed(2);

};

let glaCounter =0;
let glaQuantityToAdd=0;


document.querySelector("#gla-button").onclick = function(event) {
    event.preventDefault();
    const basketgla= document.querySelector("#gla-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const glaAmount = document.querySelector("#gla-amount");
    const glaQuantity = document.querySelector("#gla-quantity");
    basketgla.style.display="flex";
    basketgla.style.justifyContent="space-between";
    glaCounter = glaAmount.innerHTML;
    glaCounter=parseFloat(glaCounter);
    glaCounter= glaCounter + 3.49;
    glaAmount.innerHTML= (glaCounter).toFixed(2);
    glaQuantityToAdd=glaQuantity.innerHTML
    glaQuantityToAdd=parseFloat(glaQuantityToAdd);
    glaQuantityToAdd=glaQuantityToAdd + 1
    glaQuantity.innerHTML = glaQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+3.49).toFixed(2);

};


document.querySelector("#gla-delete").onclick = function(event) {
    event.preventDefault();
    const basketgla= document.querySelector("#gla-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const glaAmount = document.querySelector("#gla-amount");
    const glaQuantity = document.querySelector("#gla-quantity");
    basketgla.style.display="flex";
    basketgla.style.justifyContent="space-between";
    glaCounter = glaAmount.innerHTML;
    glaCounter=parseFloat(glaCounter);
    glaCounter= glaCounter - 3.49;
    glaAmount.innerHTML= (glaCounter).toFixed(2);
    glaQuantityToAdd=glaQuantity.innerHTML
    if (glaQuantityToAdd==1) {
        basketgla.style.display="none";
    }
    glaQuantityToAdd=parseFloat(glaQuantityToAdd);
    glaQuantityToAdd=glaQuantityToAdd - 1
    glaQuantity.innerHTML = glaQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-3.49).toFixed(2);

};


let antCounter =0;
let antQuantityToAdd=0;


document.querySelector("#ant-button").onclick = function(event) {
    event.preventDefault();
    const basketant= document.querySelector("#ant-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const antAmount = document.querySelector("#ant-amount");
    const antQuantity = document.querySelector("#ant-quantity");
    basketant.style.display="flex";
    basketant.style.justifyContent="space-between";
    antCounter = antAmount.innerHTML;
    antCounter=parseFloat(antCounter);
    antCounter= antCounter + 3.99;
    antAmount.innerHTML= (antCounter).toFixed(2);
    antQuantityToAdd=antQuantity.innerHTML
    antQuantityToAdd=parseFloat(antQuantityToAdd);
    antQuantityToAdd=antQuantityToAdd + 1
    antQuantity.innerHTML = antQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+3.99).toFixed(2);

};


document.querySelector("#ant-delete").onclick = function(event) {
    event.preventDefault();
    const basketant= document.querySelector("#ant-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const antAmount = document.querySelector("#ant-amount");
    const antQuantity = document.querySelector("#ant-quantity");
    basketant.style.display="flex";
    basketant.style.justifyContent="space-between";
    antCounter = antAmount.innerHTML;
    antCounter=parseFloat(antCounter);
    antCounter= antCounter - 3.99;
    antAmount.innerHTML= (antCounter).toFixed(2);
    antQuantityToAdd=antQuantity.innerHTML
    if (antQuantityToAdd==1) {
        basketant.style.display="none";
    }
    antQuantityToAdd=parseFloat(antQuantityToAdd);
    antQuantityToAdd=antQuantityToAdd - 1
    antQuantity.innerHTML = antQuantityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-3.99).toFixed(2);

};

let oeilCounter =0;
let oeilQuoeilityToAdd=0;


document.querySelector("#oeil-button").onclick = function(event) {
    event.preventDefault();
    const basketoeil= document.querySelector("#oeil-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const oeilAmount = document.querySelector("#oeil-amount");
    const oeilQuoeility = document.querySelector("#oeil-quantity");
    basketoeil.style.display="flex";
    basketoeil.style.justifyContent="space-between";
    oeilCounter = oeilAmount.innerHTML;
    oeilCounter=parseFloat(oeilCounter);
    oeilCounter= oeilCounter + 4.99;
    oeilAmount.innerHTML= (oeilCounter).toFixed(2);
    oeilQuoeilityToAdd=oeilQuoeility.innerHTML
    oeilQuoeilityToAdd=parseFloat(oeilQuoeilityToAdd);
    oeilQuoeilityToAdd=oeilQuoeilityToAdd + 1
    oeilQuoeility.innerHTML = oeilQuoeilityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+4.99).toFixed(2);

};

document.querySelector("#oeil-delete").onclick = function(event) {
    event.preventDefault();
    const basketoeil= document.querySelector("#oeil-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const oeilAmount = document.querySelector("#oeil-amount");
    const oeilQuoeility = document.querySelector("#oeil-quantity");
    basketoeil.style.display="flex";
    basketoeil.style.justifyContent="space-between";
    oeilCounter = oeilAmount.innerHTML;
    oeilCounter=parseFloat(oeilCounter);
    oeilCounter= oeilCounter - 4.99;
    oeilAmount.innerHTML= (oeilCounter).toFixed(2);
    oeilQuoeilityToAdd=oeilQuoeility.innerHTML
    if (oeilQuoeilityToAdd==1) {
        basketoeil.style.display="none";
    }
    oeilQuoeilityToAdd=parseFloat(oeilQuoeilityToAdd);
    oeilQuoeilityToAdd=oeilQuoeilityToAdd - 1
    oeilQuoeility.innerHTML = oeilQuoeilityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-4.99).toFixed(2);

};

let anemCounter =0;
let anemQuanemityToAdd=0;


document.querySelector("#anem-button").onclick = function(event) {
    event.preventDefault();
    const basketanem= document.querySelector("#anem-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const anemAmount = document.querySelector("#anem-amount");
    const anemQuanemity = document.querySelector("#anem-quantity");
    basketanem.style.display="flex";
    basketanem.style.justifyContent="space-between";
    anemCounter = anemAmount.innerHTML;
    anemCounter=parseFloat(anemCounter);
    anemCounter= anemCounter + 2.49;
    anemAmount.innerHTML= (anemCounter).toFixed(2);
    anemQuanemityToAdd=anemQuanemity.innerHTML
    anemQuanemityToAdd=parseFloat(anemQuanemityToAdd);
    anemQuanemityToAdd=anemQuanemityToAdd + 1
    anemQuanemity.innerHTML = anemQuanemityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow+2.49).toFixed(2);

};

document.querySelector("#anem-delete").onclick = function(event) {
    event.preventDefault();
    const basketanem= document.querySelector("#anem-basketitem");
    const totalAmount = document.querySelector("#total-amount");
    const anemAmount = document.querySelector("#anem-amount");
    const anemQuanemity = document.querySelector("#anem-quantity");
    basketanem.style.display="flex";
    basketanem.style.justifyContent="space-between";
    anemCounter = anemAmount.innerHTML;
    anemCounter=parseFloat(anemCounter);
    anemCounter= anemCounter - 2.49;
    anemAmount.innerHTML= (anemCounter).toFixed(2);
    anemQuanemityToAdd=anemQuanemity.innerHTML
    if (anemQuanemityToAdd ==1) {
        basketanem.style.display="none";
    }
    anemQuanemityToAdd=parseFloat(anemQuanemityToAdd);
    anemQuanemityToAdd=anemQuanemityToAdd - 1
    anemQuanemity.innerHTML = anemQuanemityToAdd;
    totalToShow=totalAmount.innerHTML;
    totalToShow=parseFloat(totalToShow);
    totalAmount.innerHTML=(totalToShow-2.49).toFixed(2);

};