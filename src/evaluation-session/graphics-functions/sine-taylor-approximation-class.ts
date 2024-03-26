/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the Sine function approximation using Taylor class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 19 2024
 */
import { Function } from './function-interface.js';
import { factorial } from './factorial-function.js';

/**
 * Class that defines a sine function approximation using Taylor's polynomials
 * @implements {Function}
 */
export class SineTaylorApproximation implements Function {
  private amplitude: number;
  private coefficentOfTaylor: number[] = [];

  constructor(amplitude: number, gradeOfApproximation: number) {
    this.amplitude = amplitude;
    let j = 1
    for (let i = 0; i < gradeOfApproximation; i++) {
      this.coefficentOfTaylor.push(j);
      j += 2;
    }
  }

  /**
   * Method that evaluates the sine function in a given value
   * @param valueToEvaluate - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(valueToEvaluate: number): number {
    let result: number = 0;
    for (let j = 0; j < this.coefficentOfTaylor.length; j++) {
      let coefficient : number = this.coefficentOfTaylor[j];
      let nextGradeOfTaylor: number = Math.pow(valueToEvaluate,coefficient) / factorial(coefficient);
      if (j % 2 == 0) result += nextGradeOfTaylor;
      else result -= nextGradeOfTaylor;
    }
    return this.amplitude * result;
  }

  private factorial(factorialNumber: number): number {
    if (factorialNumber == 0) return 1;
    return factorialNumber * factorial(factorialNumber - 1);
  }
}