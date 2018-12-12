import * as Sequelize from 'sequelize';
import { QueryInterfaceOptions } from 'sequelize';
import { AbbrevAttributes as Attributes } from './attributes';
import { WeightInstance } from '../Weight';
import { FoodDesInstance } from '../FoodDes';
import { AbbrevMicroInstance } from '../AbbrevMicro';
export interface AbbrevAttributes extends Attributes {
}
interface AbbrevInstanceMethods {
    addWeight: (newWeight: WeightInstance, options: QueryInterfaceOptions) => any;
    setFoodDesc: (foodDesc: FoodDesInstance, options: QueryInterfaceOptions) => any;
    setAbbrevMicro: (foodDesc: AbbrevMicroInstance, options: QueryInterfaceOptions) => any;
}
export declare enum AbbrevKeys {
    MAIN = "Main",
    SUB = "Sub",
    CALORIES = "Calories",
    CALC_CALORIES = "Calc_Calories",
    PROTEIN = "Protein",
    PERCENT_PROTEIN = "Percent_Protein",
    CARBOHYDRATES = "Carbohydrates",
    PERCENT_CARBOHYDRATES = "Percent_Carbohydrates",
    FAT = "Fat",
    PERCENT_FAT = "Percent_Fat",
    GMWT_1 = "GmWt_1",
    GMWT_DESC1 = "GmWt_Desc1",
    GMWT_2 = "GmWt_2",
    GMWT_DESC2 = "GmWt_Desc2",
    USER = "user_uuid",
    PHOTO = "photo",
    WEIGHTS = "weights"
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
