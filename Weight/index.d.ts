import * as Sequelize from 'sequelize';
import { Instance } from 'sequelize';
import { DBModel } from '../DBModel';
export declare enum WeightKeys {
    SEQ = "Seq",
    AMOUNT = "Amount",
    DESCRIPTION = "Description",
    GR_WGT = "Gr_Wgt"
}
export interface WeightAttributes extends DBModel {
    Seq: number;
    Amount: number;
    Description: string;
    Gr_Wgt: number;
    normalized?: {
        weight: number;
        txt: string;
    };
}
interface WeightInstanceMethods {
}
export interface WeightPrototype {
    prototype: WeightInstanceMethods;
}
export interface WeightInstance extends Instance<WeightAttributes>, WeightInstanceMethods, WeightAttributes {
}
export interface WeightClassMethods {
}
export interface WeightModel extends Sequelize.Model<WeightInstance, WeightAttributes>, WeightClassMethods, WeightPrototype {
}
export {};
