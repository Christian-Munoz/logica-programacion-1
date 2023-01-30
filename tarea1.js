alert("Hola debes ingresar sólo 3 numeros");

let num1 = Number(prompt("Ingrese tu primer número"));
let num2 = Number(prompt("Ingrese tu segundo número"));
let num3 = Number(prompt("Ingrese tu tercer número"));
let arreglo = [num1,num2,num3];


if ((num1 > num2 && num1 > num3 )) {
  alert(`🔥El numero mayor es:  ${num1}`);
  alert (`Los numeros odenados de menor a mayor son: ${arreglo}`);
    alert (`Los numeros odenados de mayor a menor son: ${arreglo.reverse()}`);
  if(num2>num3){
    alert(`🔥El numero intermedio es:  ${num2}`);
    alert(`🔥El numero menor es:  ${num3}`);
    alert (`Los numeros odenados de menor a mayor son: ${arreglo}`);
    alert (`Los numeros odenados de mayor a menor son: ${arreglo.reverse()}`);
  }
  } else if(num2>num3){
    alert(`🔥El número mayor es:  ${num2}`);
    alert(`🔥El numero intermedio es:${num3}`);
    alert(`🔥El numero menor es:  ${numb1}`);
    alert (`Los numeros odenados de menor a mayor son: ${arreglo}`);
    alert (`Los numeros odenados de mayor a menor son: ${arreglo.reverse()}`);
  } else{
    alert(`🔥El número mayor es:  ${num3}`);
    alert(`🔥El numero intermedio es: ${num2}`);
    alert(`🔥El numero menor es:  ${num1}`);
    alert (`Los numeros odenados de menor a mayor son: ${arreglo}`);
    alert (`Los numeros odenados de mayor a menor son: ${arreglo.reverse()}`);
  }

