/**
 * Callback: Es una función que se le pasa como parametro otra función,
 * se utilíza para tratar eventos síncronos.
 * 
 * 
 *  
 **/



// ********* #1 - Procesar un array - callback ********* //
var zfighters = ['Goku', 'Vegeta', 'Gohan', 'Piccolo'];

zfighters.forEach(function (name, index) {
    console.log(index + 1 + '-' + name);
});
/**
 * Print
 * 1-Goku
 * 2-Vegeta
 * 3-Gohan
 * 4-Piccolo
 */

 // ********* #2 - Procesar un array ********* //