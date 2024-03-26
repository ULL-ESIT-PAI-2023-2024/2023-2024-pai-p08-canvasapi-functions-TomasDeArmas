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
 * Function that calculates the factorial of a number
 * @param factorialNumber 
 * @returns the factorial of the number
 */
export function factorial(factorialNumber: number): number {
  if (factorialNumber == 0) return 1;
  return factorialNumber * factorial(factorialNumber - 1);
}