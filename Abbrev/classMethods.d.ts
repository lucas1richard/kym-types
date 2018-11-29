import { Macros } from "./utils";
export interface ResultFactor {
    foods: any[];
    weight: {
        gr: number;
        oz: number;
    };
    macros: Macros;
}
