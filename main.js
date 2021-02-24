/*Funcion con Parametros
Una funcion es una estructura de codigo que ejecuta datos de entrada
 (input)-->PARAMETROS y los transforma 
 en un dato de salida (output) en forma de 
 dato o acción.

 function (parametros de entrada){    
    proceso (instrucciones)    
    ->devuelve datos (return)    
    o bien,     
    ->realiza una accion.
}    

input: Son parametros de la funcion y no son necesariamente obligatorios.
        Los parametros:
        1 - Una función no necesariamente tiene inputs. Por ejemplo 
        podríamos crear que siempre que fuera «invocada» ejecutara un proceso.    
        
        Las instrucciones:
        1 - El fin de una función es ejecutar instrucciones de cualquier tipo.
        
        Los outputs:
        1 Una función no necesariamente devuelve datos.
        2 Una función que no devuelve datos tal vez ha ejecutado una acción.
        Esto propiamente ya sería un output. Un efecto sobre el exterior.
        Una función puede devolver datos y o acciones de cualquier tipo.
        
        Scope

        nivel local -> dentro de una funcion
        nivel global -> fuera de una funcion

        var numero = 3;
        declaracion 
        var numero;

        asignacion
        numero = 1;


        var let y const 

        Hoisting

pepito()

        function pepito(numero){
            return numero
        }
        var numero;
pepito()pepito()pepito()
pepito()


        numero = 8;



        for ()

        
        para calcular el perímetro de un rectángulo necesitamos saber la longitud 
    de 2 lados contiguos    
    la fórmula del perímetro  es p = 2*(a +b) dónde a y b 
    son dos lados no opuestos.    
    
    Crear una tabla de multiplicar.*/
    
        var numero;  //-> redefinir  ->reasignar ->alcance scope
        let numero; //-> no se puede redefinir, -> si se puede reasignar -> alcance de bloque
        const numero; // --> no se puede redefinir, -> no se puede reasignar -> alcance de bloque 

        // function(){
        //     //scope de la variable local

        //     if(){
        //         var otroNumero;
        //         let numero
        //     }

        // }

        console.log(numero);

        numero = 1;

        console.log(numero) // 1



var numero =1;
console.log(numero)




    
    //2*(a+b)// function pedirDato(){ 
//    return parseFloat(prompt("ingrese la medida del lado"))
// } 

//var pedirDato = () => parseFloat(prompt("ingrese la medida del lado"));


// var ladoA = pedirDato()
// var ladoB = pedirDato()

// function calcularPerimtro(parametroA, parametroB) {
//     return 2 * (parametroA + parametroB)
// } document.write('los lados del rectangulo miden ' + ladoA + ' y ' + ladoB + 'cm <br>' + 'y su perimetro total es: ' + calcularPerimtro(ladoA, ladoB))
//console.log(calcularPerimtro(ladoA, ladoB))//
    // var numero = parseInt(prompt('tabla que desea conocer'));
    // function crearTabla(n){//     //multiplicar del 1 al 10
    //     for(var i = 0; i<=10; i++){
    //         var resultado = n*r;
    //         document.write(n + " x " + i + " = " + resultado  + "<br>")
    //     }
    // }
    // crearTabla(numero)