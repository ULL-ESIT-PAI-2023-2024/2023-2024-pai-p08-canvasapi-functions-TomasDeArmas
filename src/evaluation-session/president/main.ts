/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Client program to test the president class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 19 2024
 */
import {President} from './president.js';

const main = function (): void {
  const president: President = President.getPresident();
  console.log(president.getName());
  const anotherPresident: President = President.getPresident();
  console.log(anotherPresident.getName());
}

main();
