import * as Sequelize from 'sequelize';
import { Instance } from 'sequelize';
import { DBModel } from '../DBModel';
export declare enum UserRecordFavoritesKeys {
    MEAL = "meal"
}
export interface UserRecordFavoritesAttributes extends DBModel {
    meal: number;
}
interface UserRecordFavoritesInstanceMethods {
}
export interface UserRecordFavoritesPrototype {
    prototype: UserRecordFavoritesInstanceMethods;
}
export interface UserRecordFavoritesInstance extends Instance<UserRecordFavoritesAttributes>, UserRecordFavoritesInstanceMethods, UserRecordFavoritesAttributes {
}
export interface UserRecordFavoritesClassMethods {
}
export interface UserRecordFavoritesModel extends Sequelize.Model<UserRecordFavoritesInstance, UserRecordFavoritesAttributes>, UserRecordFavoritesClassMethods, UserRecordFavoritesPrototype {
}
export {};
