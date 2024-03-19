/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the exponent function class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Function } from './function-interface.js';

/**
 * Class that defines a exponent function
 * @implements {Function}
 */
export class Exponential implements Function {
  private exponent: number;

  constructor(exponent: number) {
    this.exponent = exponent;
  }

  /**
   * Method that evaluates the exponential function in a given value
   * @param x - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(x: number): number {
    return Math.pow(x, this.exponent);
  }
}