export const emailValidate = {
  required: '허용되지 않는 형식의 이메일입니다.',
  pattern: {
    value: /^[a-zA-Z0-9.'_-]+@[a-zA-Z0-9.'-]+\.[a-zA-Z]{2,}$/,
    message: '허용되지 않는 형식의 이메일입니다.',
  },
};

export const passwordValidate = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    value: /^[a-zA-Z0-9!@#$%^&*()\-_,S]{8,16}$/,
    message:
      '비밀번호는 8 ~ 16자의 영문 대 소문자, 숫자 및 !@#$%^&*()-_, 만 가능합니다.',
  },
};
