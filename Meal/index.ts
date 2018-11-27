import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { userIdType } from '../global';

export interface MealAttributes {
  id?: number
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
