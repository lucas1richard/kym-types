import Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';

export interface FoodPreferencesAttributes {
  id: number
  preference: 'like'|'dislike'
}

interface FoodPreferencesInstanceMethods {
}

export interface FoodPreferencesPrototype {
  prototype: FoodPreferencesInstanceMethods
}

export interface FoodPreferencesInstance extends Instance<FoodPreferencesAttributes>, FoodPreferencesInstanceMethods, FoodPreferencesAttributes {
}

export interface FoodPreferencesClassMethods {
}

export interface FoodPreferencesModel extends Sequelize.Model<FoodPreferencesInstance, FoodPreferencesAttributes>, FoodPreferencesClassMethods, FoodPreferencesPrototype {
}
