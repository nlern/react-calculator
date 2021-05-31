import CalculatorControlTypesEnum from '../enums/calculator-control-types.enum';
import CalculatorOperatorTypesEnum from '../enums/calculator-operator-types.enum';
import CalculatorSpecialOperatorTypesEnum from '../enums/calculator-special-operator-types.enum';

export interface CaclculatorPanelRowItem {
    id: string;
    title: string;
    type: CalculatorControlTypesEnum;
    value:
        | CalculatorOperatorTypesEnum
        | CalculatorSpecialOperatorTypesEnum
        | number
        | '.';
    isWide?: boolean;
}

export interface CalculatorPanelRow {
    rowId: string;
    rowItems: CaclculatorPanelRowItem[];
}
