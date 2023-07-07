import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    LOGIN: (curState) => {
      curState.auth = !curState.auth;

      return { auth: curState.auth };
    },
  };
  initStore(actions, {
    auth: false,
  });
};

export default configureStore;
