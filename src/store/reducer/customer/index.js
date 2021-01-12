import { GET_ALL_CUSTOMERS } from '../../selectors/customer';

const initialState = {
  customers: [],
};

export const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CUSTOMERS:
      return { ...state, customers: action.payload };

    default:
      return state;
  }
};
