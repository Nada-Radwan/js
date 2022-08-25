// ========Menu Show Y Hidden=======
const navMenu = document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

// =======Menu Show=======
// validate if constant exist
if(navToggle){
    navToggle.addEventListener('click',()=>{

            navMenu.classList.add('show-menu')
    })
}
// =======Menu Hidden=======
// validate if constant exist
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })

}

// =======Remove menu Mobile======
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    // when click on each nav__link, we remove show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click',linkAction))
// ========Show Scroll=======
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560)
    scrollUp.classList.add('show-scroll');
    else
    scrollUp.classList.remove('show-scroll');

}
window.addEventListener('scroll',scrollUp)
// =========Scroll section active link=======

const section=document.querySelectorAll('section[id');
function scrollActive(){
    const scrollY=window.pageYOffset

    section.forEach( current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId=current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })

}
window.addEventListener('scroll',scrollActive)

// ========= Dark Theme=======
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme ='uil-sun'
//perviuosly selected topic if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
//we obtain the theme than the interface has by validating darl theme cl
const getCurrentTheme = () => document.body.classList(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList(iconTheme) ? 'uil-moon' : 'uil-sun'
//we validate if user choose a topic
if(selectedTheme)
{
    //if the validation is fulfilled, we ask what the issue was to know if we activated
    document.body.classList[selectedTheme==='dark' ?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uli-moon' ?'add':'remove'](iconTheme)

}
//activate / deavtivate theme manually with button
themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save the theme & the current icon that the user choose
    localStorage.setItem('selected-theme',  getCurrentTheme())
    localStorage.setItem('selected-icon',  getCurrentIcon())
})



// =========According skills=======
const skillsContent =document.getElementByClassName('skills__content'),
    skillsHeader=document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    for( i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className ='skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})


