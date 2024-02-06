import { useQuery } from 'react-query';

import { getMainLecture } from '@/apis/lecture';
import { getMajorType } from '@/apis/suwiki';
import { LECTURE_MAIN, MAJOR_TYPES } from '@/constants/queryKeys';
import { LectureOptions } from '@/interfaces/lecture';

export const useGetMainLectureList = (
  option: LectureOptions = 'modifiedDate',
  majorType: string = '전체'
) => {
  const query = useQuery(
    [LECTURE_MAIN, option, majorType],
    () => getMainLecture(option, majorType),
    {
      keepPreviousData: true,
    }
  );
  return query;
};

export const useGetMajorTypes = () => {
  const query = useQuery([MAJOR_TYPES], getMajorType, {
    cacheTime: Infinity,
    staleTime: Infinity,
  });
  return query;
};
