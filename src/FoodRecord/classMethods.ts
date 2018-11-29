import { FoodRecordInstance } from "./";

export interface CreateWithMealProp {
  abbrev_id: string,
  date,
  meal,
  quantity,
  unit,
  uuid,
  confirmed
}
export interface CreateWithMealInterface {
  (instance: CreateWithMealProp): Promise<FoodRecordInstance>
}

export interface FindByDateInterface {
  (date: string, uuid: string): Promise<FoodRecordInstance[]>
}

export interface FindMicroByDateInterface {
  (date: string, uuid: string): Promise<FoodRecordInstance[]>
}

export interface MakeHistoricalArrayInterface {
  (uuid: string): Promise<any>
}
