// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface ciudadCoticaFn {
  (ciudadanos: string[]): number
}

const ciudadGotica: ciudadCoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements PersonaInterface {
  public constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) { }
  imprimirBio(): void {
    console.log('Incluir aquí una breve descripción');
  }
}