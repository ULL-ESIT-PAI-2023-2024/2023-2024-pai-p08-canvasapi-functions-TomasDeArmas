/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverTableBoard Program that defines the TableBoard class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 15 2024
 */
import { Piece } from './piece-class.js';

/**
 * This class have the function to implement the drawing
 * the functions TableBoardally on web
 */
export class TableBoard {
  private static instance: TableBoard;
  private static canvas: HTMLCanvasElement;
  private static context: CanvasRenderingContext2D | null;
  private pieces: Piece[];

  /**
   * The static method that controls the access to the TableBoard instance.
   */
  public static getInstance(canvasId: string = '', pieces: Piece[]): TableBoard {
    if (!TableBoard.instance) {
      TableBoard.instance = new TableBoard(canvasId, pieces);
    }
    return TableBoard.instance;
  }

  /**
   * This function draws the board on the canvas
   */
  drawBoard(): void {
    const canvas: HTMLCanvasElement = TableBoard.canvas;
    const context: CanvasRenderingContext2D | null = TableBoard.context;
    if (!context) throw new Error('Context is null');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.moveTo(0, 0);
    context.lineTo(canvas.width, 0);
    context.lineTo(canvas.width, canvas.height);
    context.lineTo(0, canvas.height);
    context.lineTo(0, 0);
    context.stroke();
  }

  drawPieces(): void {
  }



  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor(canvasId: string = '', pieces: Piece[]) {
    if (canvasId) {
      TableBoard.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
      TableBoard.context = TableBoard.canvas.getContext('2d');
    }
    this.pieces = pieces;
  }

 

 
  
}