import React, { useState } from 'react';
import CalculatorControlTypesEnum from '../enums/calculator-control-types.enum';
import CalculatorOperatorTypesEnum from '../enums/calculator-operator-types.enum';
import add from '../utils/calculation/add';
import multiply from '../utils/calculation/multiply';
import CalculatorControls from './CalculatorControls';
import CalculatorDisplay from './CalculatorDisplay';

const Calculator: React.FC = () => {
    const [operand1, setOperand1] = useState<number>(0);
    const [operand2, setOperand2] = useState<number>(0);
    const [operator, setOperator] =
        useState<CalculatorOperatorTypesEnum | null>(null);

    const updateResult = (result: number): void => {
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
        value: CalculatorOperatorTypesEnum | number | '.';
    }) => {
        switch (type) {
            case CalculatorControlTypesEnum.Operator:
                if (value !== CalculatorOperatorTypesEnum.Evaluate) {
                    setOperator(value as CalculatorOperatorTypesEnum);
                    break;
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
                            break;
                        }

                        case CalculatorOperatorTypesEnum.Multiply: {
                            const result = multiply(operand1, operand2);
                            updateResult(result);
                            break;
                        }
                        default:
                            break;
                    }
                }
                break;

            case CalculatorControlTypesEnum.Digit: {
                const operand = operator !== null ? operand2 : operand1;
                const operandStr = operand.toString();
                const digitStr = value?.toString();
                const newOperandStr = `${operandStr}${digitStr}`;
                let newOperand = Number(newOperandStr);
                if (Number.isFinite(newOperand) === false) {
                    newOperand = 0;
                }

                if (operator !== null) {
                    setOperand2(newOperand);
                } else {
                    setOperand1(newOperand);
                }

                break;
            }
            default:
                break;
        }
    };

    return (
        <div className="h-full flex flex-col">
            <CalculatorDisplay content={operator ? operand2 : operand1} />
            <CalculatorControls onBtnClick={handlePanelButtonClick} />
        </div>
    );
};

export default Calculator;
