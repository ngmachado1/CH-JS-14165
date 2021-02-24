// calcular el perimetro de un rectangulo

// 2*(a+b)
function pedirDato(){
    return parseInt(prompt("ingrese el lado"));

}

function perimetroRectangulo(ladoA, ladoB){
    return  2 * (ladoA + ladoB);
}

//let ladoA = pedirDato();
//let ladoB = pedirDato();

//alert(perimetroRectangulo(ladoA, ladoB));




// tabla de multiplicar

// var numero = parseFloat(prompt('ingresa el numero que queres multiplicar'));

// function crearTabla(n){
//     // contar los numeros del 1 al 10
//     for(var i = 0; i<=100; i++){
//         console.log(n +"x"+ i +" = "+i * n);

//         document.write(n +"x"+ i +" = "+i * n);
//     }
    

//     // devolver valores
// }
// crearTabla(numero);

    var numero = parseInt(prompt('tabla que desea conocer'));
    function crearTabla(n){//     //multiplicar del 1 al 10
        
        document.write("<h1 class='rojo'> esta es la tabla del " + n + "</h1>")
        
        
        for(var i = 0; i<=10; i++){
            var resultado = n*i;
            document.write(n + " x " + i + " = " + resultado  + "<br>")
        }
    }
    //crearTabla(numero)


    setTimeout(crearTabla(numero), 3000);

    //setTimeout(callback , tiempo en milisegundos)