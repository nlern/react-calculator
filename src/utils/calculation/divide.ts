const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error('Invalid operation: Cannot divide by 0');
    }
    return a / b;
};

export default divide;
