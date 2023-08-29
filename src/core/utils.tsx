export const emailValidator = (email: string) => {
  const regex = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "이메일을 입력해주세요";
  if (!regex.test(email)) return "올바른 이메일 형식이 아닙니다.";

  return "";
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return "비밀번호를 입력해주세요.";

  return "";
};

export const usernameValidator = (username: string) => {
  if (!username || username.length <= 0) return "이름을 입력해주세요.";

  return "";
};

export const idValidator = (id: string) => {
  if (!id || id.length <= 0) return "아이디를 입력해주세요.";

  return "";
};
