const navButton = document.querySelector('.nav-button i')
const sideNav = document.querySelector('ul')
const links = document.querySelector('ul li a')

navButton.addEventListener('click', ()=>{
    sideNav.classList.toggle('active')
    
    if(navButton.classList.contains('fa-bars')){
        navButton.classList.remove('fa-bars')
        navButton.classList.add('fa-times')
        navButton.style.color = '#f5c532'
    
    } else{
        navButton.classList.remove('fa-times')
        navButton.classList.add('fa-bars')   
        navButton.style.color = '#241f42'
    }
})