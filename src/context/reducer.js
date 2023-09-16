export const Login_Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN START":
      return {
        user: null,
        loading: true,
        error: false,
      };

    case "LOGIN SUCESS":
      return {
        user: action.payload,
        loading: false,
        error: false,
      };

    case "LOGIN FAILED":
      return {
        user: null,
        loading: false,
        error: true,
      };
  }
}