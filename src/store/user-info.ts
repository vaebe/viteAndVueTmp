import { defineStore } from 'pinia';
import { reactive } from 'vue';

export interface UserInfoType {
  token: '';

  [propName: string]: string | number | object;
}

export const useUserInfo = defineStore('user-info', () => {
  const userInfo = reactive<UserInfoType>({
    token: ''
  });

  const setUserInfo = (data: UserInfoType) => {
    Object.assign(userInfo, data);
  };

  return {
    userInfo,
    setUserInfo
  };
});
