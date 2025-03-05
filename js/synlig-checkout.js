"use strict";
function visFirst() {
    let sumtal = Number(document.getElementById("classicSum").value);
    let produktKasse = document.getElementById("first")
    

    if (sumtal !== 0) {
        produktKasse.style.display = "block"; // Gør teksten synlig
        
        }
    else {
        produktKasse.style.display = "none"; // Skjuler teksten igen
        
        }
            
    }

    function visProdukt() {
        let inputs = document.querySelectorAll("input[type='number']");
        
        inputs.forEach(input => {
            if (!input.id.includes("total")) { // Hvis "total" IKKE er i id'et
                input.style.display = (Number(input.value) !== 0) ? "inline-block" : "none";
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
        console.log("du trykkede på slet alt 'classic'-knappen");  
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
        console.log("du trykkede på slet alt 'classic'-knappen");  
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
        console.log("du trykkede på slet alt 'classic'-knappen");  
        updateUIFromCart();
        saveCartToLocalStorage();
        visFirst();
        visProdukt();
    }
    
    function removeSixLakrids() {
        cart.forEach(bajer => {
            if (bajer.type == "lakirids-sixpack") {
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
    
    function removeTFLakrids() {
        cart.forEach(bajer => {
            if (bajer.type == "lakrids-ramme") {
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

    function removeOneIngefaer() {
        cart.forEach(bajer => {
            if (bajer.type == "ingefaer") {
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
    
    function removeSixIngefaer() {
        cart.forEach(bajer => {
            if (bajer.type == "ingefaer-sixpack") {
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
    
    function removeTFIngefaer() {
        cart.forEach(bajer => {
            if (bajer.type == "ingefaer-ramme") {
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

    function removeOneCitron() {
        cart.forEach(bajer => {
            if (bajer.type == "citron") {
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
    
    function removeSixCitron() {
        cart.forEach(bajer => {
            if (bajer.type == "citron-sixpack") {
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
    
    function removeTFCitron() {
        cart.forEach(bajer => {
            if (bajer.type == "citron-ramme") {
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

    function removeOneHyldeblomst() {
        cart.forEach(bajer => {
            if (bajer.type == "hyldeblomst") {
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
    
    function removeSixHyldeblomst() {
        cart.forEach(bajer => {
            if (bajer.type == "hyldeblomst-sixpack") {
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
    
    function removeTFHyldeblomst() {
        cart.forEach(bajer => {
            if (bajer.type == "hyldeblomst-ramme") {
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


       
        
        
        
        
        
        


