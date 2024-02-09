import API_URLS from '@/constants/apiUrls';
import { LectureOptions, MainLectureResponse } from '@/interfaces/lecture';

import http from './http';

export const getMainLecture = async (
  pageParam: number,
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
    const nextPage = pageParam + 1;
    return {
      nextPage,
      response,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getSearchLecture = async (
  searchValue: string,
  pageParam: number,
  option: LectureOptions = 'modifiedDate',
  majorType: string = '전체'
) => {
  try {
    const response: MainLectureResponse = await http.get(
      API_URLS.LECTURE.SEARCH,
      {
        params: { searchValue, option, majorType, page: pageParam },
      }
    );
    const nextPage = pageParam + 1;
    return {
      nextPage,
      response,
    };
  } catch (error) {
    console.error(error);
  }
};
