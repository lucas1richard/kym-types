import { Model, Instance, QueryInterfaceOptions } from 'sequelize';
import { userIdType } from '../global';

export interface DayAttributes {
  user_uuid?: userIdType
  dayType: boolean,
  date: Date
}

interface DayInstanceMethods {}

export interface DayPrototype {
  prototype: DayInstanceMethods
}

export interface DayInstance extends Instance<DayAttributes>, DayInstanceMethods, DayAttributes {}

export interface DayClassMethods {}

export interface DayModel extends Model<DayInstance, DayAttributes>, DayClassMethods, DayPrototype {
}
