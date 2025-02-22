import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension"; // Updated import

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
  devTools: composeWithDevTools(), // Enable Redux DevTools
});

export default store;
