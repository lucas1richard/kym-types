import * as Sequelize from 'sequelize';
import { Instance, QueryInterfaceOptions } from 'sequelize';

export interface WeightAttributes {
  Seq: number
  Amount: number
  Description: string
  Gr_Wgt: number
  normalized?: {
    weight: number
    txt: string
  }
}

interface WeightInstanceMethods {
}

export interface WeightPrototype {
  prototype: WeightInstanceMethods
}

export interface WeightInstance extends Instance<WeightAttributes>, WeightInstanceMethods, WeightAttributes {
}

export interface WeightClassMethods {
}

export interface WeightModel extends Sequelize.Model<WeightInstance, WeightAttributes>, WeightClassMethods, WeightPrototype {
}
