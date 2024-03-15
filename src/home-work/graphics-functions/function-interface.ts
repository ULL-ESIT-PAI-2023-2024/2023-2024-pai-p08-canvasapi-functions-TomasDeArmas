/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the function interface
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */

/**
 * Interface that defines a function
 */
export interface Function {
  /**
   * Method that evaluates the function in a given value
   * @param x - The value to evaluate
   * @returns The result of the evaluation
   */
  evaluate(x: number): number;
}