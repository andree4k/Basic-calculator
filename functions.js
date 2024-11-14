
//habra una forma de poner todos los eventos de los number en una sola funcion?
const w = document.getElementById('window');
const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
let p = "";
n0.onclick = ()=>{
    let texto = w.innerHTML;//capturo el texto de la pantalla de la calculadora
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';  //dejo vacio todo el texto de la pantalla de la calculadora
        bool_nro2 = true;  //para validar que solo se efectue 1 operacion a la vez, osea un 3+5 y no un 3+5+2
    }
    //validar que no se escriban ceros a la izquierda, ejem 000, pero aun admite 0500 o 02.000
    if(texto!=='0'&& texto.length < 10){
        p = n0.innerHTML;  //es igual a decir p = '0'
        w.innerHTML += p;//concatena nros
    }
    
}
n1.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    //antes de escribir se debe validar que si hay un cero => el sgt nro debe de sobreescribirlo
    //ejem si tengo 01 => 1
    if(texto!=='0'){
        if(texto.length < 10){ //para admitir como max 10 caracteres numerales incluido el (.) decimal
            p = n1.innerHTML;
            w.innerHTML += p;
        }  
    }
    else{
        w.textContent = '1';
    }
    
}
n2.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n2.innerHTML;
            w.innerHTML += p;
        }    
    }
    else{
        w.textContent = '2';
    }
}
n3.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n3.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '3';
    }
}
n4.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n4.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '4';
    }
}
n5.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n5.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '5';
    }
}
n6.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n6.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '6';
    }
}
n7.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n7.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '7';
    }
}
n8.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n8.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '8';
    }
}
n9.onclick = ()=>{
    let texto = w.innerHTML;
    if(texto.includes('+') || texto.includes('-') || texto.includes('x') || texto.includes('/')){
        w.innerHTML = '';
        bool_nro2 = true;
    }
    if(texto!=='0'){
        if(texto.length < 10){
            p = n9.innerHTML;
            w.innerHTML += p;
        } 
    }
    else{
        w.textContent = '9';
    }
}//10.07.2022

//next job, borrar a un caracter. done!
//y validar la cant max de numeros a ingresar
//mejorar la caja window con el css y dejar el watermark
/*nota: al clickear varias veces sobre el boton se resalta el texto del boton lo que se ve feito, como solucionarlo?*/
//elimina de a uno los caracteres
const del = document.getElementById('del');//para mejorar, deshabilitar el evento click
del.onclick = ()=>{                         //when no haya nros en el display
    let display = w.innerHTML;
    let n_caracter = display.length;
    if(n_caracter>0){
        let letter = display.slice(0,n_caracter-1);
        w.innerHTML = letter;
    }  
};
//agrega el punto decimal
const dot = document.getElementById('dot');
dot.onclick = ()=>{
    let display = w.innerHTML;
    let n_caracter = display.length;
    if(n_caracter>0 && !display.includes('.') && !display.includes('+') && !display.includes('-') && !display.includes('/')){
        w.innerHTML += '.';
    }
};
//limpiar pantalla y ¡limpiar los datos?
const clear = document.getElementById('clear');
clear.onclick = ()=>{
    w.innerHTML = '';
    signo_operacion = '';
    mode_operator = false;
    bool_nro2 = false;
};

let number1;//number1 == undefined
let number2;
let signo_operacion;// +-*/
//saber si estas en modo operador, osea q en la pantalla aparezca algun operador
var mode_operator = false;//true false
let bool_nro2 = false;

//sumar
const sum = document.getElementById('sum');
sum.onclick = ()=>{
    let display = w.innerHTML;
    let n_caracter = display.length;
    if(mode_operator == false){
        if(n_caracter>0){
            number1 = Number(display);
            w.innerHTML = '+';
            mode_operator = true;
            signo_operacion = '+';
        }
    }
    if(mode_operator == true && bool_nro2==false){
        w.innerHTML = '+';
        signo_operacion = '+';
    }
};
//restar
const res = document.getElementById('res');
res.onclick = ()=>{
    let display = w.innerHTML;
    let n_caracter = display.length;
    if(mode_operator == false){
        if(n_caracter>0){
            number1 = Number(display);
            w.innerHTML = '-';
            mode_operator = true;
            signo_operacion = '-';
        }
    }
    if(mode_operator == true && bool_nro2==false){
        w.innerHTML = '-';
        signo_operacion = '-';
    }
};
//igual
const equal = document.getElementById('equal');
equal.onclick = ()=>{
    let display = w.innerHTML;
    if(number1!=undefined && display!='+' && display!='-' && display!='x' && display!='/' && display!=''){
        number2 = Number(display);
        if(signo_operacion == '+')
            w.innerHTML = number1+number2;
        if(signo_operacion == '-')
            w.innerHTML = number1-number2;
        if(signo_operacion == 'x')
            w.innerHTML = number1*number2;
        if(signo_operacion == '/')
            w.innerHTML = number1/number2;
        number1 = undefined;
        signo_operacion = '';
        mode_operator = false;
        bool_nro2 = false;
    }
};
//producto
const pro = document.getElementById('mul');
pro.onclick = ()=>{
    let display = w.innerHTML;
    let n_caracter = display.length;
    if(mode_operator == false){
        if(n_caracter>0){
            number1 = Number(display);
            w.innerHTML = 'x';
            mode_operator = true;
            signo_operacion = 'x';
        }
    }
    if(mode_operator == true && bool_nro2==false){
        w.innerHTML = 'x';
        signo_operacion = 'x';
    }
};

//division
const div = document.getElementById('div');
div.onclick = ()=>{
    let display = w.innerHTML;
    let n_caracter = display.length;
    if(mode_operator == false){
        if(n_caracter>0){
            number1 = Number(display);
            w.innerHTML = '/';
            mode_operator = true;
            signo_operacion = '/';
        }
    }
    if(mode_operator == true && bool_nro2==false){
        w.innerHTML = '/';
        signo_operacion = '/';
    }
};
//falta
/*
cuando hay varias operaciones
ejem 5+12+10 deberia dar 27, pero solo opera el primer y ultimo osea bota 15, done

eso depende de como se quiera dejar la logica de la calculadora


-hay un bug con los ceros, no deberia dejar escribir 0000 consecutivos done
-mejorar los bordes
-falta limitar la cantidad de nros
    para este caso, para ingresar un nro sera de maximo 10 digitos
    en este caso probando 9999999999 x 9999999999 = da 20 digitos de resultado
    la mayoria de resultados en division con decimales saca 18 digitos como max
    ejem 31/3 = bota 18 digitos aunque el resultado podria prolongarse ojo

    pero si valido para que se ingrese solo 10 digitos tendria un problema ya que podria obtener 
    un resultado de 20 digitos y ese resultado lo operaria con otro de 10 digitos y ya tendria un
    problema, aunque eso resulte un poco absurdo, aunque el resultado me daria con expresiones de
    potencia para abreviar, ya que js hace la operacion o el so

    en tal caso solo validare para que se ingrese como maximo 10 digitos contando con el punto decimal
    osea 10 caracteres max, ya el resultado se podra operar como siempre
*/

/*
    la lógica es la sgt:
    solo opera una operacion a la vez y al resultado tambien se le puede operar

    ejem 5+6 =11 (aqui solo presiono 5 + 6 = )
    11 x 2 = 22 (aqui solo presiono x 2 = )

                                    calculadora terminada el 15.01.2023
                                    by andree
*/