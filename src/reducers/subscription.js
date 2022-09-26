import {
  subscribed,
  unsubscribed,
  failSubscribed,
  FailUnsubscribed,
  getStatus,
  FailGetStatus,
} from "../constants/subscription-types";
let subs = [];
const subscriptionReducer = (initialState = subs, action) => {
  switch (action.type) {
    case subscribed:
    case unsubscribed:
    case getStatus:
      return { ...action.payload };

    case failSubscribed:
    case FailUnsubscribed:
    case FailGetStatus:
      return {
        ...action.payload,

        errors: action.payload,
      };
    default:
      return initialState;
  }
};

export default subscriptionReducer;
