import { useEffect, useRef } from 'react';

// ref를 가진 요소 외부를 클릭했을 때 콜백 함수를 실행하는 커스텀 훅 (현재 모달, 사이드바 등에 사용)
const useClickOutside = (onClicKOutside: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClicKOutside();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClicKOutside]);

  return { ref };
};

export default useClickOutside;
