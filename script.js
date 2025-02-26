document.addEventListener('DOMContentLoaded', () => {
    const botonEjercicioUno = document.querySelector('.boton-ejercicio-1');
    const botonEjercicioDos = document.querySelector('.boton-ejercicio-2');
    const botonEjercicioTres = document.querySelector('.boton-ejercicio-3');
    const botonEjercicioCuatro = document.querySelector('.boton-ejercicio-4');
    const botonEjercicioCinco = document.querySelector('.boton-ejercicio-5');
    const botonEjercicioSix = document.querySelector('.boton-ejercicio-6');

    // Ejercicio 1
    function primerEjercicio() {
        botonEjercicioUno.addEventListener('click', () => {
            let peso = document.querySelector('.peso');
            let altura = document.querySelector('.altura');
            let parrafo = document.querySelector('.result-1');

            if (peso.value == '' || altura.value == '') {
                parrafo.innerHTML = 'Por favor llene los datos';
                parrafo.style.color = '#e35260';
                peso.style.border = '1px solid #e35260';
                altura.style.border = '1px solid #e35260';
            } else {
                calcularIMC(parrafo, peso, altura);
            }
        });
    }

    function calcularIMC(parrafo, peso, altura) {
        // parrafo.innerHTML = '';
        parrafo.style.color = 'black';
        peso.style.border = '1px solid rgb(203, 193, 193)';
        altura.style.border = '1px solid rgb(203, 193, 193)';
        
        altura = parseFloat(altura.value);
        peso = parseFloat(peso.value);

        let alturaCuadrado = Math.pow(altura, 2);
        let IMC = (peso / alturaCuadrado).toFixed(2);

        if (IMC < 18.5) {
            parrafo.innerHTML = `Su indice de IMC es: ${IMC} Bajo de peso`;
        } else if (IMC >= 18.5 && IMC <= 24.9) {
            parrafo.innerHTML = `Su indice de IMC es: ${IMC} Peso saludable`;
        } else if (IMC >= 25 && IMC <= 29.9) {
            parrafo.innerHTML = `Su indice de IMC es: ${IMC} Sobrepeso`;
        } else {
            parrafo.innerHTML = `Su indice de IMC es: ${IMC} Obesidad`;
        }
    }

    // Ejercicio 2
    function ejercicioDos() {
        botonEjercicioDos.addEventListener('click', () => {
            const numero = document.querySelector('.numero-factorial');
            const parrafo = document.querySelector('.result-2');

            if (numero.value == '') {
                parrafo.innerHTML = 'Por favor ingrese un numero';
                parrafo.style.color = '#e35260';
                numero.style.border = '1px solid #e35260';
            } else {
                calcularFactorial(numero.value, parrafo);
            }
        });
    }

    function calcularFactorial(numero, parrafo) {
        let numeroFloat = parseFloat(numero);

        if (numero == 0) {
            parrafo.innerHTML = `El factorial de ${numeroFloat} es 1`
            parrafo.style.color = '#1021a1';
        } else if (numero < 0){
            parrafo.innerHTML = `Ingresa un numero mayor a 0`
            parrafo.style.color = 'red';
        } else {
            console.log(numero);
            let factorNumero = factorial(numero);
            console.log(factorNumero);
            parrafo.innerHTML = `El factorial de ${numero} es  ${factorNumero}`
            parrafo.style.color = '#1021a1';
        }
    }

    function factorial(n) {
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    // Ejercicio 3
    function ejercicioTres() {
        botonEjercicioTres.addEventListener('click',  () => {
            const moneda = document.querySelector('.dolar');
            const parrafo = document.querySelector('.result-3');

            if (moneda.value == '') {
                parrafo.innerHTML = 'Por favor ingrese un valor';
                parrafo.style.color = '#e35260';
                moneda.style.border = '1px solid #e35260';
            } else {
                convertirDolar(parrafo, moneda);
            }
        });
    }

    function convertirDolar(parrafo, moneda) {
        let monedaFormato = parseFloat(moneda.value);
        let dolares = (parseFloat(monedaFormato) / 4105.63).toFixed(2);

        parrafo.innerHTML = `El valor en dolares de ${monedaFormato} es de ${dolares} dolares`;
        parrafo.style.color = '#1021a1';
    }

    // Ejercicio 4
    function ejercicioCuatro() {
        botonEjercicioCuatro.addEventListener('click', () => {
            let ancho = document.querySelector('.alto');
            let alto = document.querySelector('.ancho');
            let parrafo = document.querySelector('.result-4');

            if (ancho.value == '' || alto.value == '') {
                parrafo.innerHTML = 'Por favor ingrese un valor';
                parrafo.style.color = '#e35260';
                ancho.style.border = '1px solid #e35260';
                alto.style.border = '1px solid #e35260';
            } else {
                calcularPerimetroArea(alto, ancho, parrafo);
            }
        });
    }

    function calcularPerimetroArea(h, a, parrafo) {

        let altura = parseFloat(h.value);
        let ancho = parseFloat(a.value);

        let area = ancho * altura;
        let perimetro = 2 * (ancho + altura);

        parrafo.innerHTML = `El area es: ${area}, el perimetro es: ${perimetro}`;
        parrafo.style.color = '#1021a1';
    }

    // Ejercicio 5
    function ejercicioCinco() {
        botonEjercicioCinco.addEventListener('click', () => {
            let radio = document.querySelector('.radio');
            let parrafo = document.querySelector('.result-5');

            if (radio.value == '') {
                parrafo.innerHTML = 'Por favor ingrese un valor';
                parrafo.style.color = '#e35260';
                radio.style.border = '1px solid #e35260';
            } else {
                calcularRadio(radio, parrafo);
            }
        });
    }

    function calcularRadio(radio, parrafo) {
        let radioFormat = parseFloat(radio.value);

        let areaCircuferencia = Math.PI * Math.pow(radioFormat, 2);
        let circunferencia = 2 * Math.PI * radioFormat
        
        parrafo.innerHTML = `El area del circulo es ${areaCircuferencia.toFixed(2)}, la circuferencia es: ${circunferencia.toFixed(2)}`;
        parrafo.style.color = '#1021a1';
    }

    // Ejercicio 6
    function six() {
        botonEjercicioSix.addEventListener('click', () => {
            let multiplicar = document.querySelector('.multiplicar');
            let parrafo = document.querySelector('.result-6');

            if (multiplicar.value == '') {
                parrafo.innerHTML = 'Por favor ingrese un valor';
                parrafo.style.color = '#e35260';
                multiplicar.style.border = '1px solid #e35260';
            } else {
                numeroMultiplicar(multiplicar, parrafo);
            }
        });
    }

    function numeroMultiplicar(multiplicar, parrafo) {
        let numetoFormat = parseFloat(multiplicar.value);
        let resultado = '';

        for (let i = 1; i <= 10; i++) {
            resultado += `${i} x ${numetoFormat} = ${numetoFormat * i} <br>`; 
        }

        parrafo.innerHTML = resultado;
    }

    primerEjercicio();
    ejercicioDos();
    ejercicioTres()
    ejercicioCuatro();
    ejercicioCinco();
    six();
});
