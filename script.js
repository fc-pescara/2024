const Container = document.querySelector('.Test-Container');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    if (Container.style.display === "none") {
        Container.style.display = "block"
    }
    else {
        Container.style.display = "none"; 
    }
})