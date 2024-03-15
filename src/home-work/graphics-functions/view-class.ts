/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the View class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */

import {Function} from './function-interface.js';
import { Graphic } from './graphic-class.js';

/**
 * This class have the function to implement the drawing
 * the functions graphically on web
 */
export class View {
  private static graphic: Graphic;
  private functionToPrint: Function;

  constructor(functionToPrint: Function, graphic: Graphic) {
    this.functionToPrint = functionToPrint;
    View.graphic = graphic;
  }

  /**
   * This method draws the function graphically on the canvas
   */
  drawFunction(): void {
    View.graphic.drawFunction(this.functionToPrint);
  }

}