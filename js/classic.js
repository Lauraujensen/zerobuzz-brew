"use strict"

function adjustQuantity(element, change) {
    let quantitySpan = element.parentElement.querySelector(".quantity");
    let currentQuantity = parseInt(quantitySpan.textContent);
    let newQuantity = Math.max(0, currentQuantity + change);
    quantitySpan.textContent = newQuantity;
}