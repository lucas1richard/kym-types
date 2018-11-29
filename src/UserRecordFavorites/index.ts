import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { DBModel } from '../DBModel';

export enum UserRecordFavoritesKeys {
  MEAL = 'meal'
};

export interface UserRecordFavoritesAttributes extends DBModel {
  meal: number
}

interface UserRecordFavoritesInstanceMethods {
}

export interface UserRecordFavoritesPrototype {
  prototype: UserRecordFavoritesInstanceMethods
}

export interface UserRecordFavoritesInstance extends Instance<UserRecordFavoritesAttributes>, UserRecordFavoritesInstanceMethods, UserRecordFavoritesAttributes {
}

export interface UserRecordFavoritesClassMethods {
}

export interface UserRecordFavoritesModel extends Sequelize.Model<UserRecordFavoritesInstance, UserRecordFavoritesAttributes>, UserRecordFavoritesClassMethods, UserRecordFavoritesPrototype {
}
