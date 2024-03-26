/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Main Program
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Function } from './function-interface.js';
import { Sine } from './sine-function-class.js';
import { SineTaylorApproximation } from './sine-taylor-approximation-class.js'
// import { Cosine } from './cosine-function-class.js';
// import { Tangent } from './tangent-function-class.js';
// import { PolynomialFunction } from './polynomial-function-class.js';
// import { Exponential } from './exponential-function-class.js';
import { Graphic } from './graphic-class.js';

/**
 * This function selects the function to represent
 * @param functionName name of the function to represent
 * @returns the function to represent
 */
function selectFunction(functionName: string): Function[] {
  switch (functionName) {
    case 'sin':
      return [new Sine(5), new SineTaylorApproximation(5, 7)];
      break;
    default:
      alert('Invalid function name');
      throw new Error('Invalid function name');
      break;
  }
}

/**
 * This function generates the function to represent
 */
function main() {
  // promptResponse is string containing a the name of the function to represent
  let promptResponse: string | null = prompt('Enter the name of the function to represent');
  if (!promptResponse) alert('Invalid input')
  else {
    const canvasId: string = 'mycanvas';
    const graphic: Graphic = Graphic.getInstance(canvasId);
    let functionToPrint: Function[] = selectFunction(promptResponse);
    graphic.drawFunction(functionToPrint[0]);
    graphic.drawFunction(functionToPrint[1]);
  }
}

main();

