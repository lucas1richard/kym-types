import { ProgramGoalType, ProgramStatusType, ProgramResultType } from "./attributesTypes";
import { userIdType } from "../global";
export interface MakeProgramObject {
    (measure: {
        units: string;
        weight: number;
        uuid: userIdType;
        goal: ProgramGoalType;
    }): {
        user_uuid: userIdType;
        startWeight: number;
        endGoal: number;
        startDate: Date;
        endDate: Date;
        status: ProgramStatusType;
        result: ProgramResultType;
    };
}
