/**
 * Evaluate Reverse Polish Notation - Medium
 * 
 * https://neetcode.io/problems/evaluate-reverse-polish-notation
 * 
 * You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
 * Return the integer that represents the evaluation of the expression.
 * The operands may be integers or the results of other operations.
 * The operators include '+', '-', '*', and '/'.
 * Assume that division between integers always truncates toward zero.
 * 
 * Example 1:
 * Input: tokens = ["1", "2", "+", "3", "*", "4", "-"]
 * Output: 5
 * 
 * Explanation: ((1 + 2) * 3) - 4 = 5
 * 
 * Constraints:
 * - 1 <= tokens.length <= 1000.
 * - tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].
 * 
 * Solution:
 * - Use a stack to evaluate the Reverse Polish Notation.
 * - Traverse each token, push numbers onto the stack, and for operators, pop the last two numbers, perform the operation, and push the result back onto the stack.
 */

export function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    const isOperators = (o: string) => ["+", "-", "*", "/"].includes(o)

    for (let token of tokens) {
        if (isOperators(token)) {
            // pop b first
            const b = stack.pop()!
            const a = stack.pop()!

            let result = 0

            switch (token) {
                case '+':
                    result = a + b
                    break;
                case '-':
                    result = a - b
                    break;
                case '*':
                    result = a * b
                    break;
                case '/':
                    result = Math.trunc(a / b)
                    break;
                default:
                    break;
            }

            stack.push(result)

        } else {
            stack.push(Number.parseInt(token, 10))
        }
    }

    return stack.pop()!
}
