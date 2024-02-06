const etcSignExp = /[\\^$.*+?()[\]{}|]/g;
const koreanCompleteExp = /[가-힣]/;
const koreanConsonantExp = /[ㄱ-ㅎ]/;

const searchExceptConsonant = (getCase: string) => {
  switch (getCase) {
    case 'ㄱ': {
      return 44032;
    }
    case 'ㄲ': {
      return 44620;
    }
    case 'ㄴ': {
      return 45208;
    }
    case 'ㄷ': {
      return 45796;
    }
    case 'ㄸ': {
      return 46384;
    }
    case 'ㄹ': {
      return 46972;
    }
    case 'ㅁ': {
      return 47560;
    }
    case 'ㅂ': {
      return 48148;
    }
    case 'ㅃ': {
      return 48736;
    }
    case 'ㅅ': {
      return 49324;
    }
    default: {
      return (getCase.charCodeAt(0) - 12613) * 588 + 49324;
    }
  }
};

const searchExpPattern = (ch: string) => {
  let r;
  if (koreanConsonantExp.test(ch)) {
    const start = searchExceptConsonant(ch);
    const end = start + 587;
    r = `[${ch}\\u${start.toString(16)}-\\u${end.toString(16)}]`;
  } else if (koreanCompleteExp.test(ch)) {
    const chCode = ch.charCodeAt(0) - 44032;
    if (chCode % 28 > 0) return ch;
    const begin = Math.floor(chCode / 28) * 28 + 44032;
    const end = begin + 27;
    r = `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else r = ch.replace(etcSignExp, '\\$&');
  return `(${r})`;
};

const getRegExSearch = (query: string, target: string) => {
  const reg = new RegExp(
    query.split('').map(searchExpPattern).join('.*?'),
    'i'
  );
  const matches = reg.exec(target);
  return Boolean(matches);
};

export default getRegExSearch;
