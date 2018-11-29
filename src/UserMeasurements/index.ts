import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { userIdType } from '../global';
import { DBModel } from '../DBModel';

export enum UserMeasurementsKeys {
  AGE = 'age',
  GENDER = 'gender',
  HEIGHT = 'height',
  UNITS = 'units',
  WEIGHT = 'weight',
  BODYFAT = 'bodyfat',
  LIFESTYLE = 'lifestyle',
  GOAL = 'goal',
  DATE = 'date',
  BMRBODYFAT = 'bmrBodyFat',
  BMRTRADITIONAL = 'bmrTraditional'
};

export interface UserMeasurementsAttributes extends DBModel {
  user_uuid: userIdType
  age: number
  gender: string
  height: number
  units: 'imperial'|'metric'
  weight: number
  bodyfat: number
  lifestyle: 'Sedentary'|'Normal'|'Active'
  goal: 'Lose Fat'|'Gain Muscle'|'Maintain'
  date: string
  bmrTraditional: number
  bmrBodyFat: number
}

interface UserMeasurementsInstanceMethods {
}

export interface UserMeasurementsPrototype {
  prototype: UserMeasurementsInstanceMethods
}

export interface UserMeasurementsInstance extends Instance<UserMeasurementsAttributes>, UserMeasurementsInstanceMethods, UserMeasurementsAttributes {
}

export interface UserMeasurementsClassMethods {
  findAllByUserId(uuid: userIdType): Promise<UserMeasurementsInstance>
}

export interface UserMeasurementsModel extends Sequelize.Model<UserMeasurementsInstance, UserMeasurementsAttributes>, UserMeasurementsClassMethods, UserMeasurementsPrototype {
}
