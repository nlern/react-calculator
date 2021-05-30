import React from 'react';
import CalculatorControlTypesEnum from '../enums/calculator-control-types.enum';
import { CalculatorPanelRow } from '../interfaces/calculator-panel.interface';

export interface CalculatorControlsProps {
    onBtnClick: (param: {
        id: string;
        type: CalculatorControlTypesEnum;
        value: string | number;
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
                    type: CalculatorControlTypesEnum.special,
                    value: '',
                },
                {
                    id: 'plusMinus',
                    title: '+/-',
                    type: CalculatorControlTypesEnum.special,
                    value: '',
                },
                {
                    id: 'percent',
                    title: '%',
                    type: CalculatorControlTypesEnum.special,
                    value: '',
                },
                {
                    id: 'opDivide',
                    title: '÷',
                    type: CalculatorControlTypesEnum.operator,
                    value: '',
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
                    value: 7,
                },
                {
                    id: 'digit8',
                    title: '8',
                    type: CalculatorControlTypesEnum.digit,
                    value: 8,
                },
                {
                    id: 'digit9',
                    title: '9',
                    type: CalculatorControlTypesEnum.digit,
                    value: 9,
                },
                {
                    id: 'opMult',
                    title: 'x',
                    type: CalculatorControlTypesEnum.operator,
                    value: '',
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
                    value: 4,
                },
                {
                    id: 'digit5',
                    title: '5',
                    type: CalculatorControlTypesEnum.digit,
                    value: 5,
                },
                {
                    id: 'digit6',
                    title: '6',
                    type: CalculatorControlTypesEnum.digit,
                    value: 6,
                },
                {
                    id: 'opSub',
                    title: '-',
                    type: CalculatorControlTypesEnum.operator,
                    value: '',
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
                    value: 1,
                },
                {
                    id: 'digit2',
                    title: '2',
                    type: CalculatorControlTypesEnum.digit,
                    value: 2,
                },
                {
                    id: 'digit3',
                    title: '3',
                    type: CalculatorControlTypesEnum.digit,
                    value: 3,
                },
                {
                    id: 'opAdd',
                    title: '+',
                    type: CalculatorControlTypesEnum.operator,
                    value: '',
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
                    value: 0,
                },
                {
                    id: 'digitDot',
                    title: '.',
                    type: CalculatorControlTypesEnum.special,
                    value: '',
                },
                {
                    id: 'opEval',
                    title: '=',
                    type: CalculatorControlTypesEnum.operator,
                    value: '',
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
                        {rowItems.map(({ id, title, type, value }) => {
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
