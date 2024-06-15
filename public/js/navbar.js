
window.addEventListener('scroll', () => {
    var navbar1 = document.getElementById('navbar');
    var navbar2 = document.getElementById('navbar1');
    if (window.scrollY > 300) {
        navbar1.style.visibility = 'hidden';
        navbar2.style.top = '5px';
    } else if(window.scrollY<99){
        navbar1.style.visibility = 'visible';
        navbar2.style.top = '-200px';
        
    }
});

function goToAboutUs() {
   
    window.location.href = "index.html#about";
  }
  function goToPortfolio() {
   
    window.location.href = "index.html#portfolio";
  }
 
  window.addEventListener('resize', ()=>{
    const div=document.getElementById("this");
    const div1=document.getElementById("that");
    if(window.innerWidth>1480){
      div.classList.remove("custom");
      div.classList.add("container");
      div1.classList.remove("custom");
      div1.classList.add("container");
    }else{
        div.classList.add("custom");
        div.classList.remove("container");
        div1.classList.add("custom");
        div1.classList.remove("container");
    }
  });