import {
  subscribed,
  failSubscribed,
  getStatus,
  FailGetStatus,
} from "../constants/subscription-types";
import subscriptionService from "../services/subscription";

export const subscribeAction = (course, userId) => async (dispatch) => {
  try {
    const res = await subscriptionService.subscribed(course, userId);

    dispatch({
      type: subscribed,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSubscribed,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
// export const unSubscribeAction = (course, userId) => async (dispatch) => {
//   try {
//     const res = await subscriptionService.unSubscribed(course, userId);

//     dispatch({
//       type: FailUnsubscribed,
//       payload: res.data,
//     });

//     return Promise.resolve(res.data);
//   } catch (error) {
//     dispatch({
//       type: getStatus,
//       payload: error.response.data,
//     });
//     return Promise.reject(error);
//   }
// };

export const getStatusAction = (course, userId) => async (dispatch) => {
  try {
    const res = await subscriptionService.getStatus(course, userId);

    dispatch({
      type: getStatus,
      payload: res.data,
    });
    console.log("res.data", res.data);
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: FailGetStatus,
      payload: error.response.data,
    });
    console.log("error", error);
    return Promise.reject(error);
  }
};
