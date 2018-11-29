import * as Sequelize from 'sequelize';
import { DBModel } from '../DBModel';
import { userIdType } from '../global';
export declare enum DayKeys {
    DAYTYPE = "dayType",
    DATE = "date"
}
export interface DayAttributes<T = Date> extends DBModel {
    user_uuid?: userIdType;
    dayType: boolean;
    date: T;
}
interface DayInstanceMethods {
}
export interface DayPrototype {
    prototype: DayInstanceMethods;
}
export interface DayInstance extends Sequelize.Instance<DayAttributes>, DayInstanceMethods, DayAttributes {
}
export interface DayClassMethods {
}
export interface DayModel extends Sequelize.Model<DayInstance, DayAttributes>, DayClassMethods, DayPrototype {
}
export {};
