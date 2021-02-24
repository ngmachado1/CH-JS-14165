// calcular el perimetro de un rectangulo

// 2*(a+b)

function pedirDato(){
    return parseInt(prompt("ingrese el lado"));

}

function perimetroRectangulo(ladoA, ladoB){
    return  2 * (ladoA + ladoB);
}

let ladoA = pedirDato();
let ladoB = pedirDato();

alert(perimetroRectangulo(ladoA, ladoB));




// tabla de multiplicar

 var numero = parseFloat(prompt('ingresa el numero que queres multiplicar'));

 function crearTabla(n){
     //el metodo nativo de js document.write imprime por pantalla lo que le pasemos por parametro ("")
     //ej, imprimimos el titulo de la tabla de multiplicar
     document.write("<h1 class='rojo'> esta es la tabla del " + n + "</h1>")
     
     // contar los numeros del 1 al 10
     for(var i = 0; i<=10; i++){
         
         //devolver por consola el valor de i en cada ciclo del bucle y multiplicarlo por el parametro de entrada de la funcion
         console.log(n +"x"+ i +" = "+i * n);
         
         //mostrar en el documento html la tabla
         document.write(n +"x"+ i +" = "+i * n+ "<br>");
     }
 }
//llamamos a la funcion para que se ejecute
 crearTabla(numero);


