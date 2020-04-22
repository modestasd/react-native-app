export const actionCreator = (constant, actionPayload) => {
    return {
      type: constant,
      payload: actionPayload
    };
};
  