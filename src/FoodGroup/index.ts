import { DBModel } from '../DBModel';

import * as Sequelize from 'sequelize';

export enum FoodGroupKeys {
  GROUPID = 'GroupId',
  DESCRIPTION = 'Description'
};

export interface FoodGroupAttributes extends DBModel {
  GroupID: number,
  Description: string
}

interface FoodGroupInstanceMethods {
}

export interface FoodGroupPrototype {
  prototype: FoodGroupInstanceMethods
}

/**
 * Extends `Sequelize.Instance`, `FoodGroupInstanceMethods`, and `FoodGroupAttributes`
 */
export interface FoodGroupInstance extends Sequelize.Instance<FoodGroupAttributes>, FoodGroupInstanceMethods, FoodGroupAttributes {
}

export interface FoodGroupClassMethods {
}

export interface FoodGroupModel extends Sequelize.Model<FoodGroupInstance, FoodGroupAttributes>, FoodGroupClassMethods {
}
