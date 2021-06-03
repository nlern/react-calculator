import React from 'react';
import CalculatorControlTypesEnum from '../enums/calculator-control-types.enum';
import CalculatorOperatorTypesEnum from '../enums/calculator-operator-types.enum';
import CalculatorSpecialOperatorTypesEnum from '../enums/calculator-special-operator-types.enum';
import { CalculatorPanelRow } from '../interfaces/calculator-panel.interface';

export interface CalculatorControlsProps {
    onBtnClick: (param: {
        id: string;
        type: CalculatorControlTypesEnum;
        value:
            | CalculatorSpecialOperatorTypesEnum
            | CalculatorOperatorTypesEnum
            | number
            | '.';
    }) => void;
}

const CalculatorControls: React.FC<CalculatorControlsProps> = ({
    onBtnClick,
}) => {
    const panelGrid: CalculatorPanelRow[] = [
        {
            rowId: 'row1',
            rowItems: [
                {
                    id: 'ac',
                    title: 'AC',
                    type: CalculatorControlTypesEnum.SpecialOperator,
                    value: CalculatorSpecialOperatorTypesEnum.AllClear,
                },
                {
                    id: 'plusMinus',
                    title: '+/-',
                    type: CalculatorControlTypesEnum.SpecialOperator,
                    value: CalculatorSpecialOperatorTypesEnum.ChangeSign,
                },
                {
                    id: 'percent',
                    title: '%',
                    type: CalculatorControlTypesEnum.SpecialOperator,
                    value: CalculatorSpecialOperatorTypesEnum.Percent,
                },
                {
                    id: 'opDivide',
                    title: '÷',
                    type: CalculatorControlTypesEnum.Operator,
                    value: CalculatorOperatorTypesEnum.Divide,
                },
            ],
        },
        {
            rowId: 'row2',
            rowItems: [
                {
                    id: 'digit7',
                    title: '7',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 7,
                },
                {
                    id: 'digit8',
                    title: '8',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 8,
                },
                {
                    id: 'digit9',
                    title: '9',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 9,
                },
                {
                    id: 'opMult',
                    title: 'x',
                    type: CalculatorControlTypesEnum.Operator,
                    value: CalculatorOperatorTypesEnum.Multiply,
                },
            ],
        },
        {
            rowId: 'row3',
            rowItems: [
                {
                    id: 'digit4',
                    title: '4',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 4,
                },
                {
                    id: 'digit5',
                    title: '5',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 5,
                },
                {
                    id: 'digit6',
                    title: '6',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 6,
                },
                {
                    id: 'opSub',
                    title: '-',
                    type: CalculatorControlTypesEnum.Operator,
                    value: CalculatorOperatorTypesEnum.Subtract,
                },
            ],
        },
        {
            rowId: 'row4',
            rowItems: [
                {
                    id: 'digit1',
                    title: '1',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 1,
                },
                {
                    id: 'digit2',
                    title: '2',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 2,
                },
                {
                    id: 'digit3',
                    title: '3',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 3,
                },
                {
                    id: 'opAdd',
                    title: '+',
                    type: CalculatorControlTypesEnum.Operator,
                    value: CalculatorOperatorTypesEnum.Add,
                },
            ],
        },
        {
            rowId: 'row5',
            rowItems: [
                {
                    id: 'digit0',
                    title: '0',
                    type: CalculatorControlTypesEnum.Digit,
                    value: 0,
                    isWide: true,
                },
                {
                    id: 'digitDot',
                    title: '.',
                    type: CalculatorControlTypesEnum.Dot,
                    value: '.',
                },
                {
                    id: 'opEval',
                    title: '=',
                    type: CalculatorControlTypesEnum.Operator,
                    value: CalculatorOperatorTypesEnum.Evaluate,
                },
            ],
        },
    ];
    return (
        <div className="h-full flex flex-col flex-wrap calculator-controls">
            {panelGrid.map(({ rowId, rowItems }) => {
                return (
                    <div
                        className="flex-1 flex flex-row row gap-px"
                        key={rowId}
                    >
                        {rowItems.map(({ id, title, type, value, isWide }) => {
                            return (
                                <div
                                    className={`calculator-button inline-flex ${
                                        type ===
                                        CalculatorControlTypesEnum.Operator
                                            ? 'orange'
                                            : ''
                                    } ${isWide ? 'wide' : 'flex-1'}`}
                                    key={id}
                                >
                                    <button
                                        id={id}
                                        type="button"
                                        className="flex-1 text-6xl rounded-none"
                                        onClick={() =>
                                            onBtnClick({ id, type, value })
                                        }
                                    >
                                        {title}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default CalculatorControls;
