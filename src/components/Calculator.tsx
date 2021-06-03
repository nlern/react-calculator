import React, { useState } from 'react';
import CalculatorControlTypesEnum from '../enums/calculator-control-types.enum';
import CalculatorOperatorTypesEnum from '../enums/calculator-operator-types.enum';
import CalculatorSpecialOperatorTypesEnum from '../enums/calculator-special-operator-types.enum';
import add from '../utils/calculation/add';
import divide from '../utils/calculation/divide';
import multiply from '../utils/calculation/multiply';
import subtract from '../utils/calculation/subtract';
import CalculatorControls from './CalculatorControls';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState<string>('0');
    const [operand1, setOperand1] = useState<number>(0);
    const [operand2, setOperand2] = useState<number>(0);
    const [operator, setOperator] =
        useState<CalculatorOperatorTypesEnum | null>(null);

    const updateResult = (result: number): void => {
        const updatedResult = result < 0.000001 ? 0 : result;
        const displayResult = Number.isInteger(updatedResult)
            ? updatedResult.toString()
            : updatedResult.toFixed(5);
        setDisplay(displayResult);
        setOperand1(result);
        setOperand2(0);
        setOperator(null);
    };

    const handlePanelButtonClick = ({
        type,
        value,
    }: {
        id: string;
        type: CalculatorControlTypesEnum;
        value:
            | CalculatorSpecialOperatorTypesEnum
            | CalculatorOperatorTypesEnum
            | number
            | '.';
    }) => {
        switch (type) {
            case CalculatorControlTypesEnum.SpecialOperator:
                switch (value as CalculatorSpecialOperatorTypesEnum) {
                    case CalculatorSpecialOperatorTypesEnum.AllClear: {
                        updateResult(0);
                        return;
                    }
                    case CalculatorSpecialOperatorTypesEnum.ChangeSign: {
                        const operand = Number.parseFloat(display);
                        const newOperand = -operand;
                        setDisplay(newOperand.toString());
                        if (operator) {
                            setOperand2(newOperand);
                        } else {
                            setOperand1(newOperand);
                        }
                        return;
                    }
                    case CalculatorSpecialOperatorTypesEnum.Percent: {
                        const operand = Number.parseFloat(display);
                        if (operand === 0) {
                            return;
                        }
                        const percent = divide(operand, 100);
                        const newOperand = percent < 0.000001 ? 0 : percent;
                        setDisplay(
                            Number.isInteger(newOperand)
                                ? newOperand.toString()
                                : newOperand.toFixed(5),
                        );
                        if (operator) {
                            setOperand2(newOperand);
                        } else {
                            setOperand1(newOperand);
                        }
                        return;
                    }

                    default:
                        return;
                }
            case CalculatorControlTypesEnum.Operator:
                if (value !== CalculatorOperatorTypesEnum.Evaluate) {
                    setOperator(value as CalculatorOperatorTypesEnum);
                    setDisplay('0');
                    return;
                }
                if (
                    operand1 !== null &&
                    operand2 !== null &&
                    operator !== null
                ) {
                    switch (operator) {
                        case CalculatorOperatorTypesEnum.Add: {
                            const result = add(operand1, operand2);
                            updateResult(result);
                            return;
                        }

                        case CalculatorOperatorTypesEnum.Subtract: {
                            const result = subtract(operand1, operand2);
                            updateResult(result);
                            return;
                        }

                        case CalculatorOperatorTypesEnum.Multiply: {
                            const result = multiply(operand1, operand2);
                            updateResult(result);
                            return;
                        }

                        case CalculatorOperatorTypesEnum.Divide: {
                            try {
                                const result = divide(operand1, operand2);
                                updateResult(result);
                            } catch (error) {
                                return;
                            }
                            return;
                        }

                        default:
                            return;
                    }
                }
                return;

            case CalculatorControlTypesEnum.Digit: {
                const operandStr = display;
                const digitStr = value?.toString();
                const newOperandStr = `${operandStr}${digitStr}`;
                let newOperand = Number(newOperandStr);
                if (Number.isFinite(newOperand) === false) {
                    newOperand = 0;
                }
                setDisplay(newOperand.toString());
                if (operator !== null) {
                    setOperand2(newOperand);
                } else {
                    setOperand1(newOperand);
                }

                break;
            }

            case CalculatorControlTypesEnum.Dot: {
                if (display.includes('.')) {
                    return;
                }
                const newDisplay = `${display}.`;
                setDisplay(newDisplay);

                break;
            }
            default:
                break;
        }
    };

    return (
        <div className="h-full flex flex-col">
            <CalculatorDisplay content={display} />
            <CalculatorControls onBtnClick={handlePanelButtonClick} />
        </div>
    );
};

export default Calculator;
