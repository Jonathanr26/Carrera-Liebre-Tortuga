class Corredor{
    posicion = 0;
    correr(paso){
        this.posicion += paso;
        return this.posicion; 
    }
    contador(){
        return Math.ceil(Math.random()*100)+1;
    }
}

class Tortuga extends Corredor{
    mover(){
        let pasos = 0;
        if(this.contador() <= 50){
            console.log('La tortuga dio un paso rapido');
            pasos = 3;
        }else
        if(this.contador() <= 70 && this.posicion >= 6){
            console.log('La tortuga tuvo un resbalon');
            pasos = -6;
        }else{
            console.log('La tortuga dio un paso lento');
            pasos = 1;
        }
        console.log('La tortuga avanzo ' + pasos + ' pasos');
        return this.correr(pasos);
    }
}

class Liebre extends Corredor{
    mover(){
        let pasos = 0;
        if(this.contador() <= 20){
            console.log('La liebre se durmio');
            pasos = 0;
        }else
        if(this.contador() <= 40){
            console.log('La liebre dio un salto grande');
            pasos = 9;
        }else
        if(this.contador() <= 50 && this.posicion >= 12){
            console.log('la liebre dio un resbalon grande');
            pasos = -12;
        }else
        if(this.contador() <= 85){
            console.log('la liebre dio un salto pequeño');
            pasos = 1;
        }else{
            console.log('la liebre dio un resbalon pequeño');
            pasos = -2;
        }
        console.log('La tortuga avanzo ' + pasos + ' pasos');
        return this.correr(pasos);
    }
}

class Carrera{
    tortuga = new Tortuga();
    liebre = new Liebre();
    distancia = 0;
    ganador = null
    constructor(distancia = 90){
        this.distancia = distancia;
    }
    iniciar(){
        let avanceTortuga; 
        let avanceLiebre;
        let ronda = 1;
        while(!this.ganador){
            avanceTortuga = this.tortuga.mover();
            console.log('La tortuga recorrio: ' + avanceTortuga);
            avanceLiebre = this.liebre.mover();
            console.log('La liebre recorrio: ' + avanceLiebre);
            if(avanceTortuga >= this.distancia && avanceLiebre >= this.distancia){
                this.ganador = 'Empate';
            }else
            if(avanceTortuga >= this.distancia){
                this.ganador = 'La tortuga, Ganó';
            }else
            if(avanceLiebre >= this.distancia){
                this.ganador = 'La liebre, Ganó'
            }
            if(this.ganador){
                console.log(this.ganador);
            }else{
                console.log('Siguiente ronda ' + ronda);
            }
            ronda++
        }
    }
}

let app = new Carrera();
app.iniciar();