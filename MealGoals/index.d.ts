import * as Sequelize from 'sequelize';
import { Instance } from 'sequelize';
import { userIdType } from '../global';
import { DBModel } from '../DBModel';
export interface MealGoalsAttributes extends DBModel {
    goals: any;
    user_uuid: userIdType;
}
interface MealGoalsInstanceMethods {
    sanitize(): any;
}
export interface MealGoalsPrototype {
    prototype: MealGoalsInstanceMethods;
}
export interface MealGoalsInstance extends Instance<MealGoalsAttributes>, MealGoalsInstanceMethods, MealGoalsAttributes {
}
export interface MealGoalsClassMethods {
    sanitizeMealGoal(arg1: MealGoalsInstance): Promise<any>;
}
export interface MealGoalsModel extends Sequelize.Model<MealGoalsInstance, MealGoalsAttributes>, MealGoalsClassMethods, MealGoalsPrototype {
}
export {};
