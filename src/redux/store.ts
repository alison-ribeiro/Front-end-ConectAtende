// store.js
import { configureStore } from "@reduxjs/toolkit";

import chatSlice from "./reducers/userReducer";

export const store = configureStore({
	reducer: {
		chat: chatSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
