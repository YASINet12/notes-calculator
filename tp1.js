function calculer(){
    let control1 =Number( document.getElementById("control1").value)
    let control2 = Number(document.getElementById("control2").value)
    let control3 = Number(document.getElementById("control3").value)
    let EFM = Number(document.getElementById("EFM").value)
    let res=(control1+control2+control3+EFM)/4
    if (res >= 10) {
        let valider = document.getElementById("valider");
        let non_valider = document.getElementById("non_valider");
    
        valider.style.display = "block";     
        valider.style.backgroundColor = "green"; 
        valider.style.color = "white"; 
        valider.style.padding = "10px";  
        valider.style.borderRadius = "5px";  
        valider.style.textAlign = "center"; 
        valider.style.position = "absolute";  
        valider.style.top = "450px";
        valider.style.width = "350px";  
        valider.style.left = "50%";  
        valider.style.transform = "translate(-50%, -50%)";   
    
        non_valider.style.display = "none";  
    
        valider.innerHTML = res + " 🎉 Bravo ! Vous avez validé le module.";
    } else {
        let valider = document.getElementById("valider");
        let non_valider = document.getElementById("non_valider");
    
        valider.style.display = "none";  
    
        non_valider.style.display = "block";  
        non_valider.style.backgroundColor = "red"; 
        non_valider.style.color = "white"; 
        non_valider.style.padding = "10px";  
        non_valider.style.borderRadius = "5px";  
        non_valider.style.textAlign = "center";   
        non_valider.style.position = "absolute";  
        non_valider.style.top = "450px";  
        non_valider.style.left = "50%";  
        non_valider.style.width = "350px";
        non_valider.style.transform = "translate(-50%, -50%)"; 
    
        non_valider.innerHTML = res + " ❌ Dommage ! Vous n'avez pas validé.";
    }
    
    

}