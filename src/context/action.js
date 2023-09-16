export const login_Start = () => ({
  type: "LOGIN_START"
})

export const login_Success = (user) => ({
  type: "LOGIN_START",
  payload: user
});

export const login_Failed = () => ({
  type: "LOGIN_FAILED"
});