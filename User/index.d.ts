import * as Sequelize from 'sequelize';
import { AddFavoriteFood, ExRefreshToken, FindByPassword, RequestCalories } from './classMethods';
import { AbbrevInstance } from '../Abbrev';
import { UserMeasurementsInstance } from '../UserMeasurements';
import { ProgramInstance } from '../Program';
import { userIdType } from '../global';
import { DBModel } from '../DBModel';
import { MealGoalsAttributes } from '../MealGoals';
export interface UserAttributes extends DBModel {
    uuid?: string;
    firstname: string;
    lastname: string;
    username?: string;
    email?: string;
    password?: string;
    salt?: string;
    birthdate?: string;
    fitbitSynced?: boolean;
    googleSynced?: boolean;
    googleId?: string;
    fitbitId?: string;
    fitbitToken?: string;
    fitbitRefreshToken?: string;
    isNewRecord?: boolean;
    mealGoals?: MealGoalsAttributes[];
}
interface UserInstanceMethods {
    removeAbbrev(abbrev: AbbrevInstance, options: {
        meal: number;
    }): AbbrevInstance;
    addUserMeasurement: (measurement: UserMeasurementsInstance, options: Sequelize.QueryInterfaceOptions) => any;
    addProgram: (program: ProgramInstance, options: Sequelize.QueryInterfaceOptions) => any;
    addUser: (newWeight: number, options: Sequelize.QueryInterfaceOptions) => any;
    getAbbrevs(): AbbrevInstance[];
}
export interface UserPrototype {
    prototype: UserInstanceMethods;
}
export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserInstanceMethods, UserAttributes {
    isNewRecord: boolean;
}
export interface UserClassMethods {
    addFavoriteFood: AddFavoriteFood;
    removeFavoriteFood: (uuid: userIdType, abbrevId: number, meal: number) => Promise<any>;
    exRefreshToken: ExRefreshToken;
    findByPassword: FindByPassword;
    setupFitbit: (profile: any, token: string, refreshToken: string) => UserInstance;
    requestCalories: RequestCalories;
    requestFoodLog: () => any;
    sanitizeUser: (user: UserInstance) => any;
}
export interface UserModel extends Sequelize.Model<UserInstance, UserAttributes>, UserClassMethods, UserPrototype {
}
export {};
