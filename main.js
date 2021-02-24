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
        
       --------------------------------------------------------------------------
        
       
        Scope

        nivel local -> las variables que estan dentro de una funcion son accesibles a su valor asignado solo dentro de la funcion
        nivel global -> las variables que estan fuera de una funcion son accesibles a su valor asignado en cualquier parte del codigo

        Declaracion y asignacion
        var numero = 3;
        
        
        declaracion 
        var numero;

        asignacion
        numero = 1;

------------------------------------------------------------------

        Hoisting
        
        
        Es esencial quedarnos con dos conceptos:
        Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
        La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.
        
        https://developer.mozilla.org/es/docs/Glossary/Hoisting
        https://medium.com/@anamartinezaguilar/qu%C3%A9-es-el-hoisting-327870f67b36
        
        
        var numero;  //-> se puede redefinir  ->se puede reasignar -> alcance su contexto de ejecucion (dentro o fuera de una funcion)
        let numero; //-> no se puede redefinir, -> si se puede reasignar -> alcance de bloque (dentro de las {} de cualquier bloque.. ej, un if(true){let n = 1}
        const numero; // --> no se puede redefinir, -> no se puede reasignar -> alcance de bloque
        
        
        
        
        
        -------------------PROBLEMAS TRABAJADOS EN AFTER CLASS DE FUNCIONES ------------------
        
        
        //PROBLEMA 1
        
        Hacer funciones para calcular el perimetro de un rectangulo.
            
        la fórmula del perímetro  es p = 2*(a +b) dónde a y b son dos lados contiguos.    
        
        
       //PROBLEMA 2
        
        Crear una tabla de multiplicar que le pida al usuario el numero que desea multiplicar e imprimirla por pantalla
        
        
        RESOLICION EN app.js
        
        */
    

