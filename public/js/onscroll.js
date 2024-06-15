window.addEventListener('scroll',()=>{
    var reveals=document.querySelectorAll('.data');
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=100;
        if (revealtop < windowheight-revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
  })