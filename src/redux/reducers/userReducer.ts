import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message  } from "../../__mocks__/messages";
const initialState:Message[] = [];

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		setMessage: (state, action: PayloadAction<Message>) => {
			state.push(action.payload);
		},
	},
});

export const { setMessage } = chatSlice.actions;
export default chatSlice.reducer;