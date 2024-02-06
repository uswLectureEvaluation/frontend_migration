/* eslint-disable prefer-spread */
import { DependencyList, useEffect } from 'react';

function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: DependencyList
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, []);
    }, waitTime);

    return () => {
      clearTimeout(t);
    };
  }, deps);
}

export default useDebounceEffect;
