import { DBModel } from '../DBModel';
import { Model, Instance } from 'sequelize';
import { GetBestGroupInterface } from './classMethods';
export declare enum FoodDesKeys {
    LONG_DESC = "Long_Desc",
    SHORT_DESC = "Short_Desc",
    COMNAME = "ComName",
    MANUFACNAME = "ManufacName",
    SURVEY = "Survey",
    REF_DESC = "Ref_desc",
    REFUSE = "Refuse",
    SCINAME = "SciName",
    N_FACTOR = "N_Factor",
    PRO_FACTOR = "Pro_Factor",
    FAT_FACTOR = "Fat_Factor",
    CHO_FACTOR = "CHO_Factor"
}
export interface FoodDesAttributes extends DBModel {
    Long_Desc?: string;
    Short_Desc?: string;
    ComName?: string;
    ManufacName?: string;
    Survey?: string;
    Ref_desc?: string;
    Refuse?: number;
    SciName?: string;
    N_Factor?: number;
    Pro_Factor?: number;
    Fat_Factor?: number;
    CHO_Factor?: number;
    FdGrp_Cd: string;
    foodGroup?: {
        Description: string;
    };
}
interface FoodDesInstanceMethods {
}
export interface FoodDesPrototype {
    prototype: FoodDesInstanceMethods;
}
/**
 * Extends `Sequelize.Instance`, `FoodDesInstanceMethods`, and `FoodDesAttributes`
 */
export interface FoodDesInstance extends Instance<FoodDesAttributes>, FoodDesInstanceMethods, FoodDesAttributes {
}
export interface FoodDesClassMethods {
    getBestGroup: GetBestGroupInterface;
}
export interface FoodDesModel extends Model<FoodDesInstance, FoodDesAttributes>, FoodDesClassMethods, FoodDesPrototype {
}
export {};
