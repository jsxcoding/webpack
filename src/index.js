import loadhome from "./home"
import loadcontact from "./contact"
import loadmenu from "./menu"

function clearcontent(){
    let content = document.getElementById('content')
    content.textContent = ''
}

function initialize(){
    let content = document.getElementById('content')
    content.appendChild(loadhome())

    let homebtn = document.getElementById('home')
homebtn.addEventListener('click', function(){
    clearcontent()
    content.appendChild(loadhome())
})

let menubtn = document.getElementById('menu')
menubtn.addEventListener('click', function(){
    clearcontent()
    content.appendChild(loadmenu())
})

let contactbtn = document.getElementById('contact')
contactbtn.addEventListener('click', function(){
    clearcontent()
    content.appendChild(loadcontact())
})
}

initialize()


