// Selection des Element
  const  stepUn = document.querySelector(".un")
  const stepDeu = document.querySelector(".deu")
  const stepTroi = document.querySelector(".troi")
  const page_1 = document.querySelector(".page_1")
  const page_2 = document.querySelector(".page_2")
  const page_3 = document.querySelector(".page_3")
  const g = document.querySelector(".g")
  const  t1 = document.querySelector(".t1")
  const t2 = document.querySelector(".t2")
  const b1 = document.querySelector(".b1")
    
    //   faire passer a la page 2
      stepDeu.addEventListener("click", () => {
          page_2.style.display = "block";
          page_1.style.display = "none";    
      });
      g.addEventListener("click", () => {
        page_2.style.display = "block";
        page_1.style.display = "none";
      })
    
    //   faire revenir a la page un
      stepUn.addEventListener("click", () => {
        page_1.style.display = "block";
        page_2.style.display = "none";
      })
      
      t1.addEventListener("click", () => {
        page_1.style.display = "block";
        page_2.style.display = "none";
      })
      
    //   faire passer a la page 3
    stepTroi.addEventListener("click", () => {
        page_3.style.display = "block";
        page_2.style.display = "none";
      })
    t2.addEventListener("click", () => {
        page_3.style.display = "block";
        page_2.style.display = "none";
      })
    
    // revenir a la page 2
    b1.addEventListener("click", () => {
        page_3.style.display = "none";
        page_2.style.display = "block";
      })
      