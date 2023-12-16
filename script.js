

const container = document.querySelector('#container')

const btnElement = document.querySelectorAll(".btn");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const chiffre = document.querySelectorAll('.chiffre')

const ecran = document.querySelector("#ecran");



function addition(nb1,nb2){
        return parseFloat(nb1) + parseFloat(nb2)
}

function soustraction(nb1,nb2){
    return parseFloat(nb1) - parseFloat(nb2)
}
function multiplication(nb1,nb2){
    return parseFloat(nb1)*parseFloat(nb2)
}
function division(nb1,nb2){
    return parseFloat(nb1)/parseFloat(nb2)
}
const linkElement = document.querySelector('link');
const monAttribut = linkElement.getAttribute('href')
const premier = document.querySelector('#premier');
const deuxieme = document.querySelector('#deuxieme');
const troisieme = document.querySelector('#troisieme')
const myBtn = document.querySelectorAll('.clou');


myBtn[1].addEventListener('click',()=>{
linkElement.setAttribute('href',"style1.css")
premier.classList.add('hidden');
troisieme.classList.add('hidden');
deuxieme.classList.remove('hidden');
       })
       myBtn[0].addEventListener('click',()=>{
        premier.classList.remove('hidden');
        troisieme.classList.add('hidden');
        deuxieme.classList.add('hidden');
        linkElement.setAttribute('href',"style.css")
       })
       myBtn[2].addEventListener('click',()=>{
        premier.classList.add('hidden');
        deuxieme.classList.add('hidden')
        troisieme.classList.remove('hidden');
        linkElement.setAttribute('href',"style2.css")
       });
       
const signe = document.querySelectorAll('.signe');


    function incorporetLeSigne(event){
     const   index = event.currentTarget.getAttribute('data-index');
     localStorage.setItem('valeur',ecran.value) 
      localStorage.setItem('signe',signe[index].textContent)
     console.log();
   }


for(let i= 0; i < signe.length;i++){
 signe[i].addEventListener('click',(event,variablleOne,variablleTwo)=>{
 
    signe[i].setAttribute('data-index',i)
    let element = localStorage.getItem('signe')
   variablleOne = localStorage.getItem('valeur');
   
    incorporetLeSigne(event);
    ecran.innerHTML = ''
   
 })
}

function resultat(event,variablleOne,variablleTwo){
    
    switch(event){
        case '+' :
            ecran.innerHTML = addition(variablleOne,variablleTwo);
            break;
        case '-':
            ecran.innerHTML = soustraction(variablleOne,variablleTwo);
            break;
        case 'x':
            ecran.innerHTML = multiplication(variablleOne,variablleTwo);
            break;
        case '÷':
            ecran.innerHTML = division(variablleOne,variablleTwo);
            break;
        default:
        break;
    }
  
}

equal.addEventListener('click',(event,x,y)=>{
    localStorage.setItem('variable',ecran.value)
  
    event = localStorage.getItem('signe')
    affiche(event)
    console.log(event);
    y =  localStorage.getItem('variable')
    x = localStorage.getItem('valeur');
    resultat(event,x,y);
   
    localStorage.setItem('resultat',ecran.innerHTML)
  
  
})

//cette fonction affiche les element à l'ecran

function affiche(val) {
    if(ecran.value === localStorage.getItem('resultat')){
        ecran.innerHTML = ''
    }
    ecran.value += val;
}

function del() {
    let a = ecran.value.split('')
    delete a[a.length - 1]
    ecran.value = a.join('')
}


function effacer() {
    ecran.value = '';
}
