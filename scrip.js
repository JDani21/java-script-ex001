var valor1= Number(prompt("Digite um numero"))
var valor2= Number(prompt("Digite um numero"))
var valor3= Number(prompt("Digite um numero"))

var media = (valor1 + valor2 + valor3) /3
var mediaConvertidaBRL = media.toLocaleString(`pt-br` , {style:"currency", currency: "BRL"})

    alert(mediaConvertidaBRL)