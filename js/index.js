// Menu Mobile
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu-icon.png";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/menu-close.png";
    }
}
// Renderizações condicionais por click
    //Variaveis dos itens para mudar a renderização de produtos.
const cg1 = document.querySelector("#cg1");
const cg2 = document.querySelector("#cg2");
const cg3 = document.querySelector("#cg3");
const cg4 = document.querySelector("#cg4");
const cg5 = document.querySelector("#cg5");
const cg6 = document.querySelector("#cg6");
    //Variaveis das sessões de produtos
const cat1 = document.querySelector("#cat1");
const cat2 = document.querySelector("#cat2");
const cat3 = document.querySelector("#cat3");
const cat4 = document.querySelector("#cat4");
const cat5 = document.querySelector("#cat5");
const cat6 = document.querySelector("#cat6");

cg1.addEventListener('click', function(){  
    cat1.style.display = "block";
    cat2.style.display = "none";
    cat3.style.display = "none";
    cat4.style.display = "none";
    cat5.style.display = "none";
    cat6.style.display = "none";
});
cg2.addEventListener('click', function(){  
    cat1.style.display = "none";
    cat2.style.display = "block";
    cat3.style.display = "none";
    cat4.style.display = "none";
    cat5.style.display = "none";
    cat6.style.display = "none";
})
cg3.addEventListener('click', function(){  
    cat1.style.display = "none";
    cat2.style.display = "none";
    cat3.style.display = "block";
    cat4.style.display = "none";
    cat5.style.display = "none";
    cat6.style.display = "none";
})
cg4.addEventListener('click', function(){  
    cat1.style.display = "none";
    cat2.style.display = "none";
    cat3.style.display = "none";
    cat4.style.display = "black";
    cat5.style.display = "none";
    cat6.style.display = "none";
})
cg5.addEventListener('click', function(){  
    cat1.style.display = "none";
    cat2.style.display = "none";
    cat3.style.display = "none";
    cat4.style.display = "none";
    cat5.style.display = "block";
    cat6.style.display = "none";
})
cg6.addEventListener('click', function(){  
    cat1.style.display = "none";
    cat2.style.display = "none";
    cat3.style.display = "none";
    cat4.style.display = "none";
    cat5.style.display = "none";
    cat6.style.display = "block";
})
