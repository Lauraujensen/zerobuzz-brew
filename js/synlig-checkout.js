"use strict";
//Et forsøg på at få alle funktionerne fra visFirst til visFifth i én generalisernede funktion 
// function visFirst() {
//     let smagCon = document.querySelectorAll("article.can"); // Finder alle article-elementer med class "can"
    
//     smagCon.forEach(article => {
//         let sumtal = Number(article.getAttribute("data-value")); // Henter værdien fra et data-attribut

//         // Kontroller om sumtal ikke er 0 og er et gyldigt tal
//         if (!isNaN(sumtal) && sumtal !== 0) {
//             article.style.display = "block"; // Hvis ikke 0, vis artiklen
//         } else {
//             article.style.display = "none"; // Hvis 0, skjul artiklen
//         }
//     });
//}

 function visFirst() {document.querySelectorAll("input[type='number']");
     let sumtal = Number(document.getElementById("classicSum").value);
     let produktKasse = document.getElementById("first")
    

     if (sumtal !== 0) {
         produktKasse.style.display = "block"; // Gør teksten synlig
        
         }
     else {
         produktKasse.style.display = "none"; // Skjuler teksten igen
        
         }
            
     }

    function visSecond() {document.querySelectorAll("input[type='number']");
    let sumtal = Number(document.getElementById("lakridsSum").value);
    let produktKasse = document.getElementById("second")
    

    if (sumtal !== 0) {
        produktKasse.style.display = "block"; // Gør teksten synlig
        
        }
    else {
        produktKasse.style.display = "none"; // Skjuler teksten igen
        
        }
            
    }

    function visThird() {document.querySelectorAll("input[type='number']");
        let sumtal = Number(document.getElementById("ingefaerSum").value);
        let produktKasse = document.getElementById("third")
        

        if (sumtal !== 0) {
            produktKasse.style.display = "block"; // Gør teksten synlig
            
            }
        else {
            produktKasse.style.display = "none"; // Skjuler teksten igen
            
            }
                
        }

    function visFourth() {document.querySelectorAll("input[type='number']");
        let sumtal = Number(document.getElementById("citronSum").value);
        let produktKasse = document.getElementById("fourth")
        
    
        if (sumtal !== 0) {
            produktKasse.style.display = "block"; // Gør teksten synlig
            
            }
        else {
            produktKasse.style.display = "none"; // Skjuler teksten igen
            
            }
                
        }

    function visFifth() {document.querySelectorAll("input[type='number']");
        let sumtal = Number(document.getElementById("hyldeblomstSum").value);
        let produktKasse = document.getElementById("fifth")
        
    
        if (sumtal !== 0) {
            produktKasse.style.display = "block"; // Gør teksten synlig
            
            }
        else {
            produktKasse.style.display = "none"; // Skjuler teksten igen
            
            }
                
        }

    function visProdukt() {
        let inputs = document.querySelectorAll("input[type='number']");
        
        // inputs.forEach(input => {
        //     if (!input.id.includes("total")) { // Hvis "total" IKKE er i id'et
        //         input.style.display = (Number(input.value) !== 0) ? "inline-block" : "none";
        //     }
        // });

        inputs.forEach(input => {
            if (!input.id.includes("total")) { // Undgå "totalSum"
                let tilknyttetKasse = document.getElementById(input.id + "-kas"); // Antag at kassen har samme ID med "kas" tilføjet
    
                if (tilknyttetKasse) { // Sikrer at der findes en kasse til feltet
                    tilknyttetKasse.style.display = (Number(input.value) !== 0) ? "block" : "none";
                }
            }
        });
                
    }

    document.querySelectorAll("input[type='number']").forEach(input => {
        input.addEventListener("input", visProdukt);
    });


    


    function removeOneClassic() {
        cart.forEach(bajer => {
            if (bajer.type == "classic") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'classic'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFirst();
        visProdukt();
    }
    
    function removeSixClassic() {
        cart.forEach(bajer => {
            if (bajer.type == "classic-sixpack") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'classic-sixpack'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFirst();
        visProdukt();
    }
    
    function removeTFClassic() {
        cart.forEach(bajer => {
            if (bajer.type == "classic-ramme") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });  
        console.log("du trykkede på slet alt 'classic-ramme'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFirst();
        visProdukt();
    }

    function removeOneLakrids() {
        cart.forEach(bajer => {
            if (bajer.type == "lakrids") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet lakrids-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visSecond();
        visProdukt();
    }
    
    function removeSixLakrids() {
        cart.forEach(bajer => {
            if (bajer.type == "lakrids-sixpack") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'lakrids-sixpack'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visSecond();
        visProdukt();
    }
    
    function removeTFLakrids() {
        cart.forEach(bajer => {
            if (bajer.type == "lakrids-ramme") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });  
        console.log("du trykkede på slet alt 'lakrids-ramme'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visSecond();
        visProdukt();
    }

    function removeOneIngefaer() {
        cart.forEach(bajer => {
            if (bajer.type == "ingefaer") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'ingefaer'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visThird();
        visProdukt();
    }
    
    function removeSixIngefaer() {
        cart.forEach(bajer => {
            if (bajer.type == "ingefaer-sixpack") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'ingefaer-sixpack'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visThird();
        visProdukt();
    }
    
    function removeTFIngefaer() {
        cart.forEach(bajer => {
            if (bajer.type == "ingefaer-ramme") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });  
        console.log("du trykkede på slet alt 'ingefaer-ramme'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visThird();
        visProdukt();
    }

    function removeOneCitron() {
        cart.forEach(bajer => {
            if (bajer.type == "citron") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'citron'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFourth();
        visProdukt();
    }
    
    function removeSixCitron() {
        cart.forEach(bajer => {
            if (bajer.type == "citron-sixpack") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'citron-sixpack'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFourth();
        visProdukt();
    }
    
    function removeTFCitron() {
        cart.forEach(bajer => {
            if (bajer.type == "citron-ramme") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });  
        console.log("du trykkede på slet alt 'citron-ramme'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFourth();
        visProdukt();
    }

    function removeOneHyldeblomst() {
        cart.forEach(bajer => {
            if (bajer.type == "hyldeblomst") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'hyldeblomst'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFifth();
        visProdukt();
    }
    
    function removeSixHyldeblomst() {
        cart.forEach(bajer => {
            if (bajer.type == "hyldeblomst-sixpack") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });    
        console.log("du trykkede på slet alt 'hyldeblomst-sixpack'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFifth();
        visProdukt();
    }
    
    function removeTFHyldeblomst() {
        cart.forEach(bajer => {
            if (bajer.type == "hyldeblomst-ramme") {
                bajer.quantity = 0;
                bajer.total = 0;
            }
        });  
        console.log("du trykkede på slet alt 'hyldeblomst-ramme'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFifth();
        visProdukt();
    }


       
        
        
        
        
        
        


