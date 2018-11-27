import * as Sequelize from 'sequelize';

export interface FoodGroupAttributes {
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
