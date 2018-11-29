import * as Sequelize from 'sequelize';
import { QueryInterfaceOptions } from 'sequelize';
import { AbbrevAttributes as Attributes } from './attributes';
export interface AbbrevAttributes extends Attributes {
}
interface AbbrevInstanceMethods {
    addWeight: (newWeight: number, options: QueryInterfaceOptions) => any;
    setFoodDesc: (foodDesc: any, options: QueryInterfaceOptions) => any;
    setAbbrevMicro: (foodDesc: any, options: QueryInterfaceOptions) => any;
}
export interface AbbrevPrototype {
    prototype: AbbrevInstanceMethods;
}
export interface AbbrevInstance extends Sequelize.Instance<AbbrevAttributes>, AbbrevInstanceMethods, AbbrevAttributes {
}
export interface AbbrevClassMethods {
    calculateMacros: (goals: any, id: number[], _foods?: {}[], sensitive?: boolean) => any;
    dayCalculation: (uuid: string, type: any) => Promise<any[]>;
    fpCalculateMacros: () => any;
}
export interface AbbrevModel extends Sequelize.Model<AbbrevInstance, AbbrevAttributes>, AbbrevClassMethods, AbbrevPrototype {
}
export {};
