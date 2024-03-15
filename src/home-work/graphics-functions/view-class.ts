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

/**
 * This class have the function to implement the drawing
 * the functions graphically on web
 */
export class View {
  private static canvas: HTMLCanvasElement;
  private static context: CanvasRenderingContext2D | null;
  private functionToPrint: Function;

  constructor(functionToPrint: Function, canvas: HTMLCanvasElement | null = null) {
    if (canvas) {
      View.canvas = canvas;
      View.context = canvas.getContext('2d');
    }
    this.functionToPrint = functionToPrint;
  }

  drawScheme(): void {
  }


  /**
   * This method draws the function graphically on the canvas
   */
  drawFunction(): void {
    const ctx = View.context;
    const canvas = View.canvas;
    const scaleX = canvas.width / 10; // Escalado en x para que el eje x se ajuste al canvas
    const scaleY = canvas.height / 10; // Escalado en y para que el eje y se ajuste al canvas

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 2;

      for (let pixelX = 0; pixelX < canvas.width; pixelX++) {
        const x = (pixelX - canvas.width / 2) / scaleX; // Convertir pixel a coordenada x

        const y = -this.functionToPrint.evaluate(x) * scaleY + canvas.height / 2; // Convertir valor de la función a coordenada y

        if (pixelX === 0) {
          ctx.moveTo(pixelX, y);
        } else {
          ctx.lineTo(pixelX, y);
        }
      }

      ctx.stroke();
    }
  }

}