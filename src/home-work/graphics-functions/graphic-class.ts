/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverGraphic Program that defines the Graphic class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */

import { Function } from './function-interface.js';

/**
 * This class have the function to implement the drawing
 * the functions graphically on web
 */
export class Graphic {
  private static instance: Graphic;
  private static canvas: HTMLCanvasElement;
  private static context: CanvasRenderingContext2D | null;
  private gridSize: number;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor(canvasId: string = '', gridSize: number = 20) {
    if (canvasId) {
      Graphic.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
      Graphic.context = Graphic.canvas.getContext('2d');
      alert('Canvas created');
    }
    alert('Canvas not created');
    this.gridSize = gridSize;
    this.drawGrid();
    this.drawAxes();
  }

  /**
   * The static method that controls the access to the Graphic instance.
   */
  public static getInstance(canvasId: string = '', gridSize: number = 20): Graphic {
    if (!Graphic.instance) {
      Graphic.instance = new Graphic(canvasId, gridSize);
      alert('Graphic instance created');
    }
    alert('Graphic instance not created');
    return Graphic.instance;
  }

  /**
   * This method draws the grid on the canvas
   */
  private drawGrid() {
    const canvas: HTMLCanvasElement = Graphic.canvas;
    const context: CanvasRenderingContext2D | null = Graphic.context;
    if (!context) throw new Error('Context is null');

    context.beginPath();
    context.strokeStyle = '#ccc';
    context.lineWidth = 1;
    context.font = "9px Arial";
    // Drawing the horizontal lines and the numbers
    for (let y = this.gridSize; y < canvas.height; y += this.gridSize) {
      const num = Math.round((canvas.height / 2 - y) / this.gridSize);
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.fillText(num.toString(), canvas.width / 2 - 15, y + 1);
    }
    // Drawing the vertical lines and the numbers
    for (let x = this.gridSize; x < canvas.width; x += this.gridSize) {
      const num = Math.round((x - canvas.width / 2) / this.gridSize);
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.fillText(num.toString(), x + 3, canvas.height / 2 + 10);
    }
    context.stroke();
  }

  /**
   * This method draws the axes on the canvas
   */
  private drawAxes() {
    const canvas: HTMLCanvasElement = Graphic.canvas;
    const context: CanvasRenderingContext2D | null = Graphic.context;
    if (!context) throw new Error('Context is null');
    // Draw y axis
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
    context.fillText('Y', canvas.width / 2 - 20, 10);
    // Draw x axis
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();
    context.fillText('X', canvas.width - 20, canvas.height / 2 + 20);
  }

  /**
   * This method draws the function graphically on the canvas
   * @param func Function to draw
   */
  drawFunction(func: Function, color: string = 'blue') {
    const canvas: HTMLCanvasElement = Graphic.canvas;
    const context: CanvasRenderingContext2D | null = Graphic.context;
    if (!context) throw new Error('Context is null');
    const scaleX = canvas.width / 2 / 10;
    const scaleY = canvas.height / 2 / 10;

    // Reset the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawGrid();
    this.drawAxes();

    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 2;

    for (let pixelX = 0; pixelX < canvas.width; pixelX++) {
      const x = (pixelX - canvas.width / 2) / scaleX;
      const y = -func.evaluate(x) * scaleY + canvas.height / 2;
      if (pixelX === 0) {
        context.moveTo(pixelX, y);
      } else {
        context.lineTo(pixelX, y);
      }
    }

    context.stroke();
  }
}