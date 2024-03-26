/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the polynomial function class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Function } from './function-interface.js';
import { Polynomial } from './polynomial-class.js';

/**
 * Class that defines a polynomial function
 * @implements {Function}
 */
export class PolynomialFunction extends Polynomial implements Function  {
  private polynomial: Polynomial;

  constructor(...coefficients: number[]) {
    super(...coefficients);
    this.polynomial = new Polynomial(...coefficients);
  }

  /**
   * Method that evaluates the polynomial function in a given value
   * @param valueToEvaluate - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(valueToEvaluate: number): number {
    return this.polynomial.evaluatePolynomial(valueToEvaluate);
  }
}