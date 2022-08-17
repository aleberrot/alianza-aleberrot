document.getElementById("btn_right");
document.getElementById("btn_wrong");
document.getElementById("btn_xD");

btn_wrong.addEventListener("click", ()=>{
    alert("estas tomando una mala decision");
    
});

btn_right.addEventListener("click", ()=>{
    alert("Buena decision crack, eres el mas capito");
    
});

btn_xD.addEventListener("click", ()=>{
        let saludo = prompt("COÑO MANO TU MAMA ESTA DEMASIADO BUENA MRC PROVOCA MAMALE ESE P****")
        if(saludo == "a"){
            alert("JIJIJIJA");
        }
        else{
            alert("Era bait bro xD");
        }
});

addEventListener("load", ()=>{
    console.log("EL SITIO HA CARGADO EXITOSAMENTE")
})
