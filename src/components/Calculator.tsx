import React from 'react';
import CalculatorControls from './CalculatorControls';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator: React.FC = () => {
    return (
        <div className="h-full flex flex-col">
            <CalculatorDisplay content={0} />
            <CalculatorControls />
        </div>
    );
};

export default Calculator;
