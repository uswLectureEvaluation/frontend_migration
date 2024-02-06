import { useQuery } from 'react-query';

import { getMainLecture } from '@/apis/lecture';
import { LECTURE_MAIN } from '@/constants/queryKeys';
import { LectureOptions } from '@/interfaces/lecture';

/* eslint-disable import/prefer-default-export */
export const useGetMainLectureList = (
  option: LectureOptions = 'modifiedDate',
  majorType: string = '전체'
) => {
  const { data, isLoading } = useQuery([LECTURE_MAIN, option, majorType], () =>
    getMainLecture(option, majorType)
  );
  return { data, isLoading };
};
