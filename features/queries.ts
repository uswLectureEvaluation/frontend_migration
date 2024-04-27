import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import {
  getLectureDetail,
  getMainLecture,
  getSearchLecture,
} from '@/apis/lecture';
import { getMajorType } from '@/apis/suwiki';
import { isLoginState } from '@/atoms/auth';
import {
  LECTURE_DETAIL,
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

  const query = useInfiniteQuery(
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
      query.fetchNextPage();
    }
  }, [inView, query.fetchNextPage]);

  return { ...query, ref };
};

export const useGetLectureDetail = (lectureId: string) => {
  const isLogin = useRecoilValue(isLoginState);
  const query = useQuery(
    [LECTURE_DETAIL, lectureId],
    () => getLectureDetail(lectureId),
    {
      enabled: !!lectureId && isLogin,
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
