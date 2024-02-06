import API_URLS from '@/constants/apiUrls';
import { MajorTypeResponse } from '@/interfaces/suwiki';

import http from './http';

/* eslint-disable import/prefer-default-export */
export const getMajorType = async () => {
  try {
    const response: MajorTypeResponse = await http.get(
      API_URLS.SUWIKI.MAJOR_TYPE
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
