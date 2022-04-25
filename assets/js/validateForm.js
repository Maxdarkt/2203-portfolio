const regex = require('~/assets/js/regex')

function resetClassForm(input) {
  input.classList.remove('is-invalid')
  input.classList.remove('is-valid')
}
function changeClassForm(input, action){
  if(action){
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
  } else {
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
  }
}
function validateForm(inputId){
  const input = document.getElementById(inputId)
  switch(inputId){
  case 'company':
    if (regex.nameComplex.test(this.company)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'division':
  if (regex.nameComplex.test(this.division)){
    this.changeClassForm(input, true)
  } else {
    this.changeClassForm(input, false)
  }
  break;
  case 'address':
    if (regex.text.test(this.address)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'complement':
    if (regex.complement.test(this.complement)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'postal':
    if (regex.postal.test(this.postal)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'city':
    if (regex.city.test(this.city)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'country':
    if (regex.city.test(this.country)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'matricule':
    if (regex.matricule.test(this.matricule)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
  break;
  case 'status':
    if (regex.status.test(this.status)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'lastName':
    if (regex.name.test(this.lastName)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'firstName':
    if (regex.name.test(this.firstName)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'email':
    if (regex.email.test(this.email)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'password':
    if (regex.password.test(this.password)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'passwordCheck':
    if (this.password === this.passwordCheck){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'mobile':
    if (regex.mobile.test(this.mobile)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'fonction':
    if (regex.nameComplex.test(this.fonction)){
      this.changeClassForm(input, true)
    } else {
      this.changeClassForm(input, false)
    }
    break;
  case 'message':
      if (regex.message.test(this.message)){
        this.changeClassForm(input, true)
      } else {
        this.changeClassForm(input, false)
      }
      break;  
  default:
    console.log('erreur switch form')
  }
}
function displayPassword(id){
  const eye = document.querySelectorAll('.eye')
  const eyeOff = document.querySelectorAll('.eye-off')
  let passwordField = ''
  if(id === 'eye1' || id === 'eyeOff1'){
    passwordField = document.getElementById('password')
  } else if(id === 'eye2' || id === 'eyeOff2') {
    passwordField = document.getElementById('passwordCheck')
  } else {
    return console.log('erreur id displayPassword')
  }

  switch(id){
    case 'eye1':
      eye[0].style.display = "none"
      eyeOff[0].style.display = "block"
      passwordField.type = 'text'
      break;
    case 'eyeOff1':
      eye[0].style.display = "block"
      eyeOff[0].style.display = "none"
      passwordField.type = 'password'
      break;
    case 'eye2':
      eye[1].style.display = "none"
      eyeOff[1].style.display = "block"
      passwordField.type = 'text'
      break;
    case 'eyeOff2':
      eye[1].style.display = "block"
      eyeOff[1].style.display = "none"
      passwordField.type = 'password'
      break;
    default:
      console.log('erreur switch displayPassword')
  }    
}
module.exports = {
    changeClassForm,
    validateForm,
    displayPassword,
    resetClassForm
}