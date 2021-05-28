import React from 'react';

interface CalculatorDisplayProps {
    content: number;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ content }) => {
    return (
        <div className="calculator-display text-6xl md:text-8xl lg:text-9xl text-white flex justify-end p-4">
            {content}
        </div>
    );
};

export default CalculatorDisplay;
