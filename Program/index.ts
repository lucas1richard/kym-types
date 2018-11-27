import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';
import { ProgramStatusType, ProgramResultType } from './attributesTypes';
import { MakeProgramObject } from './classMethods';
import { userIdType } from '../global';

export interface ProgramAttributes {
  startWeight: number
  endWeight?: number
  endGoal?: number
  startDate: Date
  endDate: Date
  user_uuid: userIdType
  status: ProgramStatusType
  result: ProgramResultType
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
