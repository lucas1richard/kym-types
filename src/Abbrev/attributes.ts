import { AbbrevMicroAttributes } from '../AbbrevMicro';
import { WeightAttributes } from '../Weight';
import { FoodDesInstance } from '../FoodDes';
import { DBModel } from '../DBModel';

export interface AbbrevAttributes extends DBModel {
  Main: string
  Sub: string
  Calories: number
  Calc_Calories: number
  Protein: number
  Percent_Protein: number
  Fat: number
  Percent_Fat: number
  Carbohydrates: number
  Percent_Carbohydrates: number
  longname?: string
  GmWt_1: number
  GmWt_Desc1: string
  GmWt_2?: number
  GmWt_Desc2?: string
  user_uuid?: string
  photo?: string
  abbrevMicro?: AbbrevMicroAttributes
  foodDesc?: FoodDesInstance
  weights?: WeightAttributes[]
  maxMacro?: 'Protein'|'Carbohydrates'|'Fat'
}