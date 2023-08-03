// Selection des Element
  const  stepUn = document.querySelector(".un")
  const stepDeu = document.querySelector(".deu")
  const stepTroi = document.querySelector(".troi")
  const stepCat = document.querySelector(".cat")
  const stepCinq = document.querySelector(".cinq")
  const stepSix = document.querySelector(".six")
  const stepSept = document.querySelector(".sept")
  const stepHuit = document.querySelector(".huit")
  const stepNeuf = document.querySelector(".neuf")
  const page_1 = document.querySelector(".page_1")
  const page_2 = document.querySelector(".page_2")
  const page_3 = document.querySelector(".page_3")
  const g = document.querySelector(".g")
  const  t1 = document.querySelector(".t1")
  const t2 = document.querySelector(".t2")
  const b1 = document.querySelector(".b1")
  const b2 = document.querySelector(".b2")
  
  // attente du chargement de la page 1
  window.onload = () => {
    // initialisation de la page 1
    document.querySelector(".page_1").style.display = "initial";
    // click sur le step 1
    stepCat.addEventListener("click", () => {
      page_1.style.display = "block";
     page_2.style.display = "none";
    })
    // click sur le step 2
    stepDeu.addEventListener("click", () => {
       page_2.style.display = "block";
       page_1.style.display = "none";    
       });
    // click sur le step 3
    stepSept.addEventListener("click", () => {
           page_1.style.display = "block";
           page_3.style.display = "none";
         })
    
    stepHuit.addEventListener("click", () => {
           page_2.style.display = "block";
           page_3.style.display = "none";
         })
   
    stepSix.addEventListener("click", () => {
           page_3.style.display = "block";
           page_2.style.display = "none";
         })
    
    stepTroi.addEventListener("click", () => {
           page_3.style.display = "block";
           page_1.style.display = "none";
         })
  }
  
 
  // click sur le bouton suivant page 1
      g.addEventListener("click", () => {
        page_2.style.display = "block";
        page_1.style.display = "none";
      })
    
    // click sur le bouton précédent page 2
      
      t1.addEventListener("click", () => {
        page_1.style.display = "block";
        page_2.style.display = "none";
      })
      
   // click sur le  bouton suivant page 2
    t2.addEventListener("click", () => {
        page_3.style.display = "block";
        page_2.style.display = "none";
      })
    
    // click sur le bouton précédent page 3
    b1.addEventListener("click", () => {
        page_3.style.display = "none";
        page_2.style.display = "block";
      })
    // // //    envoyer le formilaire
    // // b2.addEventListener("click", () => {
        
    // //   })
    