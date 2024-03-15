/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the Sine class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Function } from './function-interface.js';

/**
 * Class that defines a sine function
 * Sine is a trigonometric function that for an acute angle in a right
 * triangle is the ratio of the side opposite the angle to the hypotenuse
 * @implements {Function}
 */
export class Sine implements Function {
  private amplitude: number;

  constructor(amplitude: number) {
    this.amplitude = amplitude;
  }

  /**
   * Method that evaluates the sine function in a given value
   * @param x - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(x: number): number {
    return this.amplitude * Math.cos(x);
  }
}