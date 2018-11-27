import * as Sequelize from 'sequelize';
import {
  MakeHistoricalArrayInterface,
  CreateWithMealProp
} from './classMethods';

export interface FindByDateInterface {
  (date: string, uuid: string): Promise<FoodRecordInstance[]>
}

export interface FindMicroByDateInterface {
  (date: string, uuid: string): Promise<FoodRecordInstance[]>
}

import { AbbrevInstance } from '../Abbrev';
import { MealInstance } from '../Meal';
import { CalcedRecord } from './instanceMethods';
import { userIdType } from '../global';

export interface FoodRecordAttributes {
  id?: number
  Date: string
  Meal: 1|2|3|4|5|6
  Quantity: number
  Unit: number
  fromProgram: boolean
  confirmed: boolean
  user_uuid?: userIdType
  abbrev?: AbbrevInstance
  meal?: MealInstance
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

interface FoodRecordInstanceMethods {
  calMacros(): Promise<CalcedRecord>
  updateQuantity(quantity: { seq: string, quantity: number }): Promise<FoodRecordInstance>
}

export interface FoodRecordPrototype {
  prototype: FoodRecordInstanceMethods
}

/**
 * Extends `Sequelize.Instance`, `FoodRecordInstanceMethods`, and `FoodRecordAttributes`
 */
export interface FoodRecordInstance extends Sequelize.Instance<FoodRecordAttributes>, FoodRecordInstanceMethods, FoodRecordAttributes {
}

export interface FoodRecordClassMethods {
  createWithMeal: (prop: CreateWithMealProp) => Promise<FoodRecordInstance>
  findByDate: FindByDateInterface
  findMicroByDate: FindMicroByDateInterface,
  makeHistoricalArray: MakeHistoricalArrayInterface
}

export interface FoodRecordModel extends Sequelize.Model<FoodRecordInstance, {
  id?: number
  Date: string
  Meal: 1|2|3|4|5|6
  Quantity: number
  Unit: number
  fromProgram: boolean
  confirmed: boolean
  user_uuid?: userIdType
  abbrev?: AbbrevInstance
  meal?: MealInstance
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}>, FoodRecordClassMethods, FoodRecordPrototype {}
