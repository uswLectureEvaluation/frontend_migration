import API_URLS from '@/constants/apiUrls';
import { LectureOptions, MainLectureResponse } from '@/interfaces/lecture';

import http from './http';

/* eslint-disable import/prefer-default-export */
export const getMainLecture = async (
  option: LectureOptions = 'modifiedDate',
  majorType: string = '전체'
) => {
  try {
    const response: MainLectureResponse = await http.get(
      API_URLS.LECTURE.MAIN,
      {
        params: { option, majorType },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
