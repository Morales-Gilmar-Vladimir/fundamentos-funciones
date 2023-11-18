//variables en javascript

var tiempo_Viaje = "3 horas" //actualmente no recomendada para trabajar 
let Fecha_actual = 23-6-2023
const año = 2023

//String
let Cancion = "  Sweet Dreams - Marilyn Manson  "
console.log(Cancion.length) //numero de letras 
console.log(Cancion.includes("Sweet")) //encontras palabras dentro del string
console.log(Cancion.toUpperCase())//Todo el String en mayuscula
console.log(Cancion.toLocaleLowerCase())//Todo el String minuscula
console.log(Cancion.trim())//Quitar espacios de inicio y final
console.log(Cancion.replace('Marilyn Manson','Eurythmics'))//Remplazar dentro de la cadena
console.log(Cancion.slice(1,10)+"...")//recortar la cadena desde inicio asta n caracter
console.log(Cancion.repeat(2))//Repetir la cadena
console.log(Cancion.split(" "))//dividir la cadena en un array

//template: crear una cadena con diferentes tipos de datos
console.log(`Durante el viaje de ${tiempo_Viaje} escuche${Cancion}`)

//Numericos
const SalarioBasico = 400
const SalarioMinimo = "200"
console.log("El salario final es:",400 + 400 * 0.5 ) //Orden de las operaciones 
//conversion de string a numerico
console.log(Number.parseInt(SalarioMinimo)) //Usando un metodo 
console.log(Number.isInteger(SalarioMinimo)) 
console.log(SalarioBasico + +SalarioMinimo) //Forma corta y más simple


//Condicional y operador ternario

//condicional IF y else
let Menu = 1
if(Menu === 1 ){
    console.log("Arroz y filete por 4,50")
}
else {
    console.log("Guatita")
}
//Operador ternario
Menu === 1 ? console.log("Arroz y filete"):console.log("Guatita")

console.log("--------")
//Bucles, ForEach-Forof-Forin-Map: Iteraciones para movilizarce en un array
const generos_musicales = ['Rock','Salsa','Rap']
const canciones = ['Dont Cry','Tu con el','Rap God']
//ForEach
generos_musicales.forEach((i,j)=> console.log(`${j} - ${i}`))
console.log("--------")
//for of
for(const t of canciones){
    console.log(t)
}
console.log("--------")
//for in
for(const valor in generos_musicales ){
    console.log(generos_musicales[valor])
}
console.log("--------")
//map
const nuevalista = canciones.map((t) => t )
console.log(nuevalista)

//FUNCIONES
function FechaActual(){
    console.log("18/11/2023")
}
console.log("--------")
FechaActual()
//Funciones declaradas y expresadas
function mostrar_canciones(){
    for(const t of canciones){
        console.log(t)
    }
}
mostrar_canciones() //funcion declarada

const peliculas =['Antman','Viernes 13','GodZilla']
const mostrar_peliculas = function(){
    for(const t in peliculas){
        console.log(peliculas[t])
    }
}
mostrar_peliculas()//funcion expresada
//Funciones anonimas y autoejecutadas
console.log(function(){
    return "ALARMA PROGRAMDA"
})//funcion anonima
console.log(function(){
    return "ALARMA PROGRAMDA 2da vez"
}())//funcion autoejecutada y anonima

function climadia(clima,dia){
    return `El dia ${dia} esta ${clima}`
}//funcion con parametros
console.log(climadia("lluviendo","Sabado"))
//funcion con parametros rest
const valorpagar = function(i1,i2, ...args){
    let ac = 0;
    let total = ac + i1 + i2
    if(args.length>0) args.forEach(e => total += e)
    return "el valor a pagar es " + total
}
console.log(valorpagar(100,200,150,200,400))
//funciones flecha
const iniciosecion = (Usser,password) => {
    console.log("Sesión iniciada")
}

iniciosecion()








 