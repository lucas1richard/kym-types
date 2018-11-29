import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { userIdType } from '../global';
import { DBModel } from '../DBModel';

export enum MealKeys {
  DATE = 'date',
  MEAL = 'meal',
  PUBLIC = 'public',
  POSTWORKOUT = 'postWorkout',
  UUID = 'uuid'
};

export interface MealAttributes extends DBModel {
  preference: 'like'|'dislike'
  date: Date
  meal: 1|2|3|4|5|6
  postWorkout: boolean
  uuid: string
  public?: boolean
  user_uuid?: userIdType
}

interface MealInstanceMethods {
}

export interface MealPrototype {
  prototype: MealInstanceMethods
}

export interface MealInstance extends Instance<MealAttributes>, MealInstanceMethods, MealAttributes {
}

export interface MealClassMethods {
  findByDate(): any
}

export interface MealModel extends Sequelize.Model<MealInstance, MealAttributes>, MealClassMethods, MealPrototype {
}
