/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the Tangent class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Function } from './function-interface.js';

/**
 * Class that defines a tangent function
 * Tangent is the trigonometric ratio between the adjacent side and
 * the opposite side of a right triangle containing that angle
 * @implements {Function}
 */
export class Tangent implements Function {
  private amplitude: number;

  constructor(amplitude: number) {
    this.amplitude = amplitude;
  }

  /**
   * Method that evaluates the Tangent function in a given value
   * @param x - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(x: number): number {
    return this.amplitude * Math.tan(x);
  }
}