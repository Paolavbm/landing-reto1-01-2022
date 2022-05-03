const formu = document.querySelector('#formu')
const buttonMailto = document.querySelector('#enviar')

formu.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
     const formular = new FormData(this)
    
    buttonMailto.setAttribute('href', `mailto:paola.val2311@gmail.com?subject=Mi correo ${formular.get('email')}&body=Hola Paola, mi correo es ${formular.get('email')}`)
    buttonMailto.click()
}