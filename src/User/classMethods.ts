import { UserInstance, UserModel } from "./";
import { AbbrevAttributes } from "../Abbrev";
import { AxiosResponse } from 'axios';
import { userIdType } from "../global";

interface CredentialsInterface {
  password: string;
  email: string;
}

export interface FindByPassword {
  (this: UserModel, credentials: CredentialsInterface): Promise<UserInstance>
}

export interface AddFavoriteFood {
  (userId: string, abbrevId: number, meal: number): Promise<AbbrevAttributes & { recordFavorite: any; }>
}

export interface ExRefreshToken {
  (this: UserModel, refTok: string, uuid: userIdType, refreshBuffer: string): Promise<AxiosResponse<{
    'activities-calories': any[]
  }> | {
    data: {
      'activities-calories': any[]
    }
    error: boolean
    refreshToken: any
  }>
}

export interface RequestCalories {
  (this: UserModel, uuid: userIdType, startDate?: string, endDate?: string): Promise<AxiosResponse<{
    'activities-calories': any[]
  }> | {
    data: {
      'activities-calories': any[]
    }
    error: boolean
    refreshToken: any
  }>
}