import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';

export interface UserRecordFavoritesAttributes {
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
