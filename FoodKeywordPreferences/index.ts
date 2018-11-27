import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { DBModel } from '../DBModel';

export interface FoodKeywordAttributes extends DBModel {
  Long_Desc?: string
  Short_Desc?: string
  ComName?: string
  ManufacName?: string
  Survey?: string
  Ref_desc?: string
  Refuse?: number
  SciName?: string
  N_Factor?: number
  Pro_Factor?: number
  Fat_Factor?: number
  CHO_Factor?: number
  FdGrp_Cd: string
  foodGroup?: { Description: string }
}

interface FoodKeywordInstanceMethods {
}

export interface FoodKeywordPrototype {
  prototype: FoodKeywordInstanceMethods
}

/**
 * Extends `Sequelize.Instance`, `FoodKeywordInstanceMethods`, and `FoodKeywordAttributes`
 */
export interface FoodKeywordInstance extends Instance<FoodKeywordAttributes>, FoodKeywordInstanceMethods, FoodKeywordAttributes {
}

export interface FoodKeywordClassMethods {
}


export interface FoodKeywordModel extends Sequelize.Model<FoodKeywordInstance, FoodKeywordAttributes>, FoodKeywordClassMethods {
}
