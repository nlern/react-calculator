import CalculatoControlTypesEnum from '../enums/calculator-control-types.enum';

export interface CaclculatorPanelRowItem {
    id: string;
    title: string;
    type: CalculatoControlTypesEnum;
    value: string | number;
}

export interface CalculatorPanelRow {
    rowId: string;
    rowItems: CaclculatorPanelRowItem[];
}
