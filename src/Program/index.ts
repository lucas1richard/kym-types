import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { ProgramStatusType, ProgramResultType } from './attributesTypes';
import { MakeProgramObject } from './classMethods';
import { userIdType } from '../global';
import { DBModel } from '../DBModel';

export enum ProgramKeys {
  STARTWEIGHT = 'startWeight',
  ENDGOAL = 'endGoal',
  ENDWEIGHT = 'endWeight',
  STARTDATE = 'startDate',
  ENDDATE = 'endDate',
  STATUS = 'status',
  RESULT = 'result'
}

export interface ProgramAttributes extends DBModel {
  [ProgramKeys.STARTWEIGHT]: number
  [ProgramKeys.ENDWEIGHT]?: number
  [ProgramKeys.ENDGOAL]?: number
  [ProgramKeys.STARTDATE]: Date
  [ProgramKeys.ENDDATE]: Date
  user_uuid: userIdType
  [ProgramKeys.STATUS]: ProgramStatusType
  [ProgramKeys.RESULT]: ProgramResultType
}

interface ProgramInstanceMethods {
}

export interface ProgramPrototype {
  prototype: ProgramInstanceMethods
}

export interface ProgramInstance extends Instance<ProgramAttributes>, ProgramInstanceMethods, ProgramAttributes {
}

export interface ProgramClassMethods {
  makeProgramObject: MakeProgramObject
}

export interface ProgramModel extends Sequelize.Model<ProgramInstance, ProgramAttributes>, ProgramClassMethods, ProgramPrototype {
}
