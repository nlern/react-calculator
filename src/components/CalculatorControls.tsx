import React from 'react';
import CalculatorControlTypesEnum from '../enums/calculator-control-types.enum';
import { CalculatorPanelRow } from '../interfaces/calculator-panel.interface';

const CalculatorControls: React.FC = () => {
    const panelGrid: CalculatorPanelRow[] = [
        {
            rowId: 'row1',
            rowItems: [
                {
                    id: 'ac',
                    title: 'AC',
                    type: CalculatorControlTypesEnum.special,
                },
                {
                    id: 'plusMinus',
                    title: '+/-',
                    type: CalculatorControlTypesEnum.special,
                },
                {
                    id: 'percent',
                    title: '%',
                    type: CalculatorControlTypesEnum.special,
                },
                {
                    id: 'opDivide',
                    title: '÷',
                    type: CalculatorControlTypesEnum.operator,
                },
            ],
        },
        {
            rowId: 'row2',
            rowItems: [
                {
                    id: 'digit7',
                    title: '7',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'digit8',
                    title: '8',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'digit9',
                    title: '9',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'opMult',
                    title: 'x',
                    type: CalculatorControlTypesEnum.operator,
                },
            ],
        },
        {
            rowId: 'row3',
            rowItems: [
                {
                    id: 'digit4',
                    title: '4',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'digit5',
                    title: '5',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'digit6',
                    title: '6',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'opSub',
                    title: '-',
                    type: CalculatorControlTypesEnum.operator,
                },
            ],
        },
        {
            rowId: 'row4',
            rowItems: [
                {
                    id: 'digit1',
                    title: '1',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'digit2',
                    title: '2',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'digit3',
                    title: '3',
                    type: CalculatorControlTypesEnum.digit,
                },
                {
                    id: 'opAdd',
                    title: '+',
                    type: CalculatorControlTypesEnum.operator,
                },
            ],
        },
        {
            rowId: 'row5',
            rowItems: [
                {
                    id: 'digit0',
                    title: '0',
                    type: CalculatorControlTypesEnum.digitWide,
                },
                {
                    id: 'digitDot',
                    title: '.',
                    type: CalculatorControlTypesEnum.special,
                },
                {
                    id: 'opEval',
                    title: '=',
                    type: CalculatorControlTypesEnum.operator,
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
                        {rowItems.map(({ id, title, type }) => {
                            return (
                                <div
                                    className={`calculator-button inline-flex ${
                                        type ===
                                        CalculatorControlTypesEnum.operator
                                            ? 'orange'
                                            : ''
                                    } ${
                                        type ===
                                        CalculatorControlTypesEnum.digitWide
                                            ? 'wide'
                                            : 'flex-1'
                                    }`}
                                    key={id}
                                >
                                    <button
                                        type="button"
                                        className="flex-1 text-6xl rounded-none"
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
