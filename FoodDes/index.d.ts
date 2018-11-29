import { DBModel } from '../DBModel';
import { Model, Instance } from 'sequelize';
import { GetBestGroupInterface } from './classMethods';
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
