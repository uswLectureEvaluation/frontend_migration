import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';

import { getMainLecture, getSearchLecture } from '@/apis/lecture';
import { getMajorType } from '@/apis/suwiki';
import {
  LECTURE_MAIN,
  LECTURE_SEARCH,
  MAJOR_TYPES,
} from '@/constants/queryKeys';
import { LectureOptions } from '@/interfaces/lecture';

export const useGetLectureList = (
  isSearch: boolean,
  page: number,
  searchValue: string = '',
  option: LectureOptions = 'modifiedDate',
  majorType: string = '전체'
) => {
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    isSearch
      ? [LECTURE_SEARCH, searchValue, option, majorType]
      : [LECTURE_MAIN, option, majorType],

    ({ pageParam = page }) =>
      isSearch
        ? getSearchLecture(searchValue, pageParam, option, majorType)
        : getMainLecture(pageParam, option, majorType),
    {
      getNextPageParam: (lastPage) => {
        if (
          (lastPage?.response.data && lastPage?.response.data.length < 10) ||
          !isSearch
        ) {
          return undefined;
        }
        return lastPage?.nextPage;
      },
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return { ref, data, isLoading };
};

export const useGetMajorTypes = () => {
  const query = useQuery([MAJOR_TYPES], getMajorType, {
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  return query;
};
