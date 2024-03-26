/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the cosine class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Function } from './function-interface.js';

/**
 * Class that defines a cosine function
 * Cosine is a trigonometric function that is the ratio between the side
 * next to an acute angle in a right triangle and the hypotenuse
 * @implements {Function}
 */
export class Cosine implements Function {
  private amplitude: number;

  constructor(amplitude: number) {
    this.amplitude = amplitude;
  }

  /**
   * Method that evaluates the cosine function in a given value
   * @param valueToEvaluate - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(valueToEvaluate: number): number {
    return this.amplitude * Math.cos(valueToEvaluate);
  }
}