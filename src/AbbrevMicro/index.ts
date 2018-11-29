import * as Sequelize from 'sequelize';
import { DBModel } from '../DBModel';

import { QueryInterfaceOptions } from 'sequelize';

export enum AbbrevMicroKeys {
  WATER = 'water',
  ASH = 'Ash',
  FIBER = 'Fiber',
  SUGAR = 'Sugar',
  CALCIUM = 'Calcium',
  IRON = 'Iron',
  MAGNESIUM = 'Magnesium',
  PHOSPHORUS = 'Phosphorus',
  POTASSIUM = 'Potassium',
  SODIUM = 'Sodium',
  ZINC = 'Zinc',
  COPPER = 'Copper',
  MANGANESE = 'Manganese',
  SELENIUM = 'Selenium',
  VIT_C = 'Vit_C',
  THIAMIN = 'Thiamin',
  RIBOFLAVIN = 'Riboflavin',
  NIACIN = 'Niacin',
  PANTO_ACID = 'Panto_acid',
  VIT_B6 = 'Vit_B6',
  FOLATE_TOT = 'Folate_Tot',
  FOLIC_ACID = 'Folic_acid',
  FOOD_FOLATE = 'Food_Folate',
  FOLATE_DFE = 'Folate_DFE',
  CHOLINE_TOT = 'Choline_Tot',
  VIT_B12 = 'Vit_B12',
  VIT_A_IU = 'Vit_A_IU',
  VIT_A_RAE = 'Vit_A_RAE',
  RETINOL = 'Retinol',
  ALPHA_CAROT = 'Alpha_Carot',
  BETA_CAROT = 'Beta_Carot',
  BETA_CRYPT = 'Beta_Crypt',
  LYCOPENE = 'Lycopene',
  LUT_ZEA = 'Lut_Zea',
  VIT_E = 'Vit_E',
  VIT_D_MCG = 'Vit_D_mcg',
  VIT_D_IU = 'Vit_D_IU',
  VIT_K = 'Vit_K',
  FA_SAT = 'FA_Sat',
  FA_MONO = 'FA_Mono',
  FA_POLY = 'FA_Poly',
  CHOLESTEROL = 'Cholestrl'
};

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
