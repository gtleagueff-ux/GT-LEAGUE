async function entrar(){

let nick = document.getElementById("nick").value
let pix = document.getElementById("pix").value

let res = await fetch("/api/pagar",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body: JSON.stringify({nick,pix})
})

let data = await res.json()

window.location = data.link
}
