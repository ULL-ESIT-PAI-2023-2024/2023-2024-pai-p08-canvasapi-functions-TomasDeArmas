/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @fileoverview Program that defines the Polynomial class
 * A polynomial an expression of more than two algebraic terms,
 * especially the sum of several terms that contain different powers
 * of the same variable(s).
 * @author Tomás De Armas Déniz alu0101491776@ull.edu.es
 * @since Mar 05 2024
 */

/**
 * Class that represents a Polynomial
 * A polynomial is a mathematical expression consisting of indeterminates
 * (also called variables) and coefficients, that involves only the operations
 * of addition, subtraction, multiplication, and positive-integer powers of variables
 * In this there is only one variable, 'x'
 */
export class Polynomial {
	/**
	 * This property stores the coefficients of the polynomial
	 * in upward order to the power of the variable
	 */
	private coefficientsOfPolynomial: number[] = [];

	/**
	 * Constructor of the class
	 * @param coefficients The coefficients of the polynomial in
	 * 		upward order to the power of the variable
	 */
	constructor(...coefficients: number[]) {
		this.coefficientsOfPolynomial = coefficients;
	}

	/**
	 * Getter of the coefficients of the polynomial
	 * @returns The coefficients of the polynomial
	 */
	getPolynomial(): number[] {
		return this.coefficientsOfPolynomial;
	}

	/**
	 * Method that evaluates the polynomial for a given value of the variable
	 * @param numberToAssignToTheVariable The value of the variable ('x')
	 * @returns The result of the evaluation
	 */
	evaluatePolynomial(numberToAssignToTheVariable: number): number {
		let resultOfEvaluateThePolynomial: number = 0;
		for (let i = 0; i < this.coefficientsOfPolynomial.length; i++) {
			resultOfEvaluateThePolynomial += this.coefficientsOfPolynomial[i] * Math.pow(numberToAssignToTheVariable, i);
		}
		return resultOfEvaluateThePolynomial;
	}

	/**
	 * Method that sums two polynomials
	 * Sum the coefficients of the same powers
	 * @param polynomial The polynomial to sum
	 * @returns The result of the sum
	 */
	sumPolynomials(polynomial: Polynomial): Polynomial {
		let resultOfPolynomialSum: number[] = [];
		const maxDegree: number = Math.max(this.coefficientsOfPolynomial.length, polynomial.getPolynomial().length);
		for (let i = 0; i < maxDegree; i++) {
			resultOfPolynomialSum.push((this.coefficientsOfPolynomial[i] || 0) + (polynomial.getPolynomial()[i] || 0));
		}
		return new Polynomial(...resultOfPolynomialSum);
	}

	/**
	 * Multiplication of two polynomials
	 * Multiply the coefficients of the polynomials
	 * @param polynomial The polynomial to multiply
	 * @returns The result of the multiplication
	 */
	multiplyPolynomials(polynomial: Polynomial): Polynomial {
		const resultOfPolynomialMultiplication: number[] = [];
		for (let i = 0; i < this.coefficientsOfPolynomial.length; i++) {
			for (let j = 0; j < polynomial.getPolynomial().length; j++) {
				if (resultOfPolynomialMultiplication[i + j] === undefined) {
					resultOfPolynomialMultiplication[i + j] = 0;
				}
				resultOfPolynomialMultiplication[i + j] += this.coefficientsOfPolynomial[i] * polynomial.getPolynomial()[j];
			}
		}
		return new Polynomial(...resultOfPolynomialMultiplication);
	}

	/**
	 * Method that returns the opposite of the polynomial
	 * @returns The opposite of the polynomial
	 */
	opposite(): Polynomial {
		const oppositePolynomial: number[] = [];
		for (let i = 0; i < this.coefficientsOfPolynomial.length; i++) {
			if (this.coefficientsOfPolynomial[i] === 0) {
				oppositePolynomial.push(this.coefficientsOfPolynomial[i]);
				continue;
			}
			oppositePolynomial.push(-this.coefficientsOfPolynomial[i]);
		}
		return new Polynomial(...oppositePolynomial);
	}

	/**
	 * Muliplies the polynomial by a given scalar number
	 * @param scalar The scalar number to multiply the polynomial by
	 * @returns The polynomial result of the multiplication
	 */
	multiplyToScalar(scalar: number): Polynomial {
		const resultOfScalarMultiplication: number[] = [];
		for (let i = 0; i < this.coefficientsOfPolynomial.length; i++) {
			resultOfScalarMultiplication.push(this.coefficientsOfPolynomial[i] * scalar);
		}
		return new Polynomial(...resultOfScalarMultiplication);
	}

	/**
	 * Method that checks if two polynomials are equal
	 * @param polinomial The polynomial to compare
	 * @returns True if the polynomials are equal, false otherwise
	 */
	isEqualTo(polinomial: Polynomial): boolean {
		if (this.coefficientsOfPolynomial.length !== polinomial.getPolynomial().length) {
			return false;
		}
		for (let i = 0; i < this.coefficientsOfPolynomial.length; i++) {
			if (this.coefficientsOfPolynomial[i] !== polinomial.getPolynomial()[i]) {
				return false;
			}
		}
		return true;
	}

	/**
	 * Method that returns the string representation of the polynomial
	 * @returns The string representation of the polynomial
	 */
	toString(): string {
		let stringRepresentationOfThePolynomial: string = '';
		for (let numberOfCoefficent = this.coefficientsOfPolynomial.length - 1; numberOfCoefficent >= 0; numberOfCoefficent--) {
			if (this.coefficientsOfPolynomial[numberOfCoefficent] === 0) continue;
			if (numberOfCoefficent !== this.coefficientsOfPolynomial.length - 1 && this.coefficientsOfPolynomial[numberOfCoefficent] > 0) {
				stringRepresentationOfThePolynomial += ' + ';
			}
			switch (numberOfCoefficent) {
				case 0:
					stringRepresentationOfThePolynomial += this.coefficientsOfPolynomial[numberOfCoefficent];
					break;
				case 1:
					stringRepresentationOfThePolynomial += this.coefficientsOfPolynomial[numberOfCoefficent] + 'x';
					break;
				default:
					stringRepresentationOfThePolynomial += this.coefficientsOfPolynomial[numberOfCoefficent] + 'x^' + numberOfCoefficent;
					break;
			}
		}
		return stringRepresentationOfThePolynomial;
	}

	/**
	 * Method that returns the derivative of the polynomial
	 * @returns The derivative of the polynomial
	 */
	derivePolynomial(): Polynomial {
		const derivedPolynomial: number[] = [];
		for (let i = 1; i < this.coefficientsOfPolynomial.length; i++) {
			derivedPolynomial.push(this.coefficientsOfPolynomial[i] * i);
		}
		return new Polynomial(...derivedPolynomial);
	}
}