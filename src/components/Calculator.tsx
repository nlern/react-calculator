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
                        if (operand2) {
                            setOperand2(-operand2);
                        } else if (operand1) {
                            setOperand1(-operand1);
                        }
                        return;
                    }
                    case CalculatorSpecialOperatorTypesEnum.Percent:
                        if (operand2) {
                            const newOp = divide(operand2, 100);
                            setOperand2(newOp);
                        } else if (operand1) {
                            const newOp = divide(operand1, 100);
                            setOperand1(newOp);
                        }
                        return;

                    default:
                        return;
                }
            case CalculatorControlTypesEnum.Operator:
                if (value !== CalculatorOperatorTypesEnum.Evaluate) {
                    setOperator(value as CalculatorOperatorTypesEnum);
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
