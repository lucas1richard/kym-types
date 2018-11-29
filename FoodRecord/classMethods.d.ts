import { FoodRecordInstance } from "./";
export interface CreateWithMealProp {
    abbrev_id: string;
    date: any;
    meal: any;
    quantity: any;
    unit: any;
    uuid: any;
    confirmed: any;
}
export interface CreateWithMealInterface {
    (instance: CreateWithMealProp): Promise<FoodRecordInstance>;
}
export interface FindByDateInterface {
    (date: string, uuid: string): Promise<FoodRecordInstance[]>;
}
export interface FindMicroByDateInterface {
    (date: string, uuid: string): Promise<FoodRecordInstance[]>;
}
export interface MakeHistoricalArrayInterface {
    (uuid: string): Promise<any>;
}
