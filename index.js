
function sendForm(){
const send = confirm('Do you want to send this form?')

if (send==true){
    document.write("<h2> Thank you your message have been sent... you are now redirected to the home page</h2>")
    window.location= "index.html"
}
else{
document.write("<h2>you have cancel the form so been redirected to the home page</h2>")
window.location= "index.html"
}


    e.preventDefault()
    const name = document.getElementById('name')
    const subject = document.getElementById('message')
    const elEmail = document.getElementById('email')

    if(name.value==''){
        return "You must enter a valid name"
        name.focus();
       return false
    }

    if(subject.value ==''){
        alert('must not be empty');
        name.focus();
        return false
    }
    if(elEmail.value==''){
        alert('empty not allowed')
    }
    return true
}

