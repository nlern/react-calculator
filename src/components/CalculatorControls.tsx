import React from 'react';

const CalculatorControls: React.FC = () => {
    const panelGrid: {
        rowId: string;
        rowItems: { id: string; title: string; type: number }[];
    }[] = [
        {
            rowId: 'row1',
            rowItems: [
                { id: 'ac', title: 'AC', type: 1 },
                { id: 'plusMinus', title: '+/-', type: 1 },
                { id: 'percent', title: '%', type: 1 },
                { id: 'opDivide', title: '÷', type: 2 },
            ],
        },
        {
            rowId: 'row2',
            rowItems: [
                { id: 'digit7', title: '7', type: 1 },
                { id: 'digit8', title: '8', type: 1 },
                { id: 'digit9', title: '9', type: 1 },
                { id: 'opMult', title: 'x', type: 2 },
            ],
        },
        {
            rowId: 'row3',
            rowItems: [
                { id: 'digit4', title: '4', type: 1 },
                { id: 'digit5', title: '5', type: 1 },
                { id: 'digit6', title: '6', type: 1 },
                { id: 'opSub', title: '-', type: 2 },
            ],
        },
        {
            rowId: 'row4',
            rowItems: [
                { id: 'digit1', title: '1', type: 1 },
                { id: 'digit2', title: '2', type: 1 },
                { id: 'digit3', title: '3', type: 1 },
                { id: 'opAdd', title: '+', type: 2 },
            ],
        },
        {
            rowId: 'row5',
            rowItems: [
                { id: 'digit0', title: '0', type: 3 },
                { id: 'digitDot', title: '.', type: 1 },
                { id: 'opEval', title: '=', type: 2 },
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
                                        type === 2 ? 'orange' : ''
                                    } ${type === 3 ? 'wide' : 'flex-1'}`}
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
