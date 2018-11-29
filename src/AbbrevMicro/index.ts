import * as Sequelize from 'sequelize';
import { DBModel } from '../DBModel';

import { QueryInterfaceOptions } from 'sequelize';

export interface AbbrevMicroAttributes extends DBModel {
  Water?: number
  Ash?: number
  Fiber?: number
  Sugar?: number
  Calcium?: number
  Iron?: number
  Magnesium?: number
  Phosphorus?: number
  Potassium?: number
  Sodium?: number
  Zinc?: number
  Copper?: number
  Manganese?: number
  Selenium?: number
  Vit_C?: number
  Thiamin?: number
  Riboflavin?: number
  Niacin?: number
  Panto_acid?: number
  Vit_B6?: number
  Folate_Tot?: number
  Folic_acid?: number
  Food_Folate?: number
  Folate_DFE?: number
  Choline_Tot?: number
  Vit_B12?: number
  Vit_A_IU?: number
  Vit_A_RAE?: number
  Retinol?: number
  Alpha_Carot?: number
  Beta_Carot?: number
  Beta_Crypt?: number
  Lycopene?: number
  Lut_Zea?: number
  Vit_E?: number
  Vit_D_mcg?: number
  Vit_D_IU?: number
  Vit_K?: number
  FA_Sat?: number
  FA_Mono?: number
  FA_Poly?: number
  Cholestrl?: number
}

interface AbbrevMicroInstanceMethods {
  // syncAbbrevId: () => Promise<void>
}

export interface AbbrevMicroPrototype {
  prototype: AbbrevMicroInstanceMethods
}

export interface AbbrevMicroInstance extends Sequelize.Instance<AbbrevMicroAttributes>, AbbrevMicroInstanceMethods, AbbrevMicroAttributes {
}

export interface AbbrevMicroClassMethods {
}

export interface AbbrevMicroModel extends Sequelize.Model<AbbrevMicroInstance, AbbrevMicroAttributes>, AbbrevMicroClassMethods, AbbrevMicroPrototype {
}
