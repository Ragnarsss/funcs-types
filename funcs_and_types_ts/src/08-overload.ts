//sobrecarga de metodos
//solo funciona con function, no con const

//con sobrecarga
//por temas de compilacion las sobrecargas se deben declarar encima del cuerpo de la funcion original
//el beneficio es acceder a las funciones que vienen con el tipado del retorno
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

//sin sobrecarga
//esta manera podria dar problemas porque ts no entiende cual tipo de argumento es la respuesta
//se deberia ocupar una confirmacion para saber que tipo fue el retorno
export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}
