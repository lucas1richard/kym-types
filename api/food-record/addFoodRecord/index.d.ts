import { FoodRecordKeys } from '../../../FoodRecord';
export interface requestBody {
    abbrev_id: number;
    [FoodRecordKeys.DATE]: string;
    [FoodRecordKeys.MEAL]: number;
    [FoodRecordKeys.QUANTITY]: number;
    [FoodRecordKeys.UNIT]: number;
    [FoodRecordKeys.CONFIRMED]?: boolean;
}
