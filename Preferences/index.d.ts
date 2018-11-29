import * as Sequelize from 'sequelize';
import { DBModel } from '../DBModel';
export declare enum PreferencesKeys {
    PREFERENCES = "preferences"
}
export interface PreferencesAttributes extends DBModel {
    preferences: any;
}
interface PreferencesInstanceMethods {
}
export interface PreferencesPrototype {
    prototype: PreferencesInstanceMethods;
}
export interface PreferencesInstance extends Sequelize.Instance<PreferencesAttributes>, PreferencesInstanceMethods, PreferencesAttributes {
}
export interface PreferencesClassMethods {
}
export interface PreferencesModel extends Sequelize.Model<PreferencesInstance, PreferencesAttributes>, PreferencesClassMethods {
}
export {};
