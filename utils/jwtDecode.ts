const jwtDecode = (token: string) => {
  const base64Payload = token.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');
  const result = JSON.parse(payload.toString());

  return result;
};

export default jwtDecode;
