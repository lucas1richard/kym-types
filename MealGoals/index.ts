import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { userIdType } from '../global';

export interface MealGoalsAttributes {
  goals: any
  user_uuid: userIdType
}

interface MealGoalsInstanceMethods {
  sanitize(): any
}

export interface MealGoalsPrototype {
  prototype: MealGoalsInstanceMethods
}

export interface MealGoalsInstance extends Instance<MealGoalsAttributes>, MealGoalsInstanceMethods, MealGoalsAttributes {
}

export interface MealGoalsClassMethods {
  sanitizeMealGoal(arg1: MealGoalsInstance): Promise<any>
}

export interface MealGoalsModel extends Sequelize.Model<MealGoalsInstance, MealGoalsAttributes>, MealGoalsClassMethods, MealGoalsPrototype {
}
