/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview President class
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 19 2024
 */

/**
 * Class President indentifies the president of a city
 * This class follows the singleton pattern 
 */
export class President {
  private static president: President;
  private name: string;

  

 /**
  * Method to implement the singleton pattern
  * The singleton pattern consists to create a class that the user is
  * only be able to create one instance of this class
  * @param nameOfThePresident
  * @returns the instance of the class
  */
  public static getPresident(nameOfThePresident: string = 'Biden'): President {
    if (!President.president) {
      President.president = new President(nameOfThePresident);
    }
    return President.president;
  }

  /**
   * Getter fot the property name
   * @returns the name property
   */
  getName(): string {
    return this.name;
  }

  private constructor(nameOfThePresident: string) {
    this.name = nameOfThePresident;
  }

}