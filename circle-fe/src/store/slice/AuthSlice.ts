import { SetAuthToken } from "@/config/api";
import { UserType } from "@/types/UserType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserType = {
	id: 0,
	full_name: "",
	username: "",
	photo_profile: "",
	bio: "",
	followers: [],
	following: []
};

export const AuthSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		AUTH_LOGIN: (_, action) => {
			const payload = action.payload;
			SetAuthToken(payload);
			localStorage.setItem("token",payload);
		},
		AUTH_CHECK: (state, action) => {
			state.id= action.payload.id
			state.bio= action.payload.bio
			state.full_name= action.payload.full_name
			state.username= action.payload.username
			state.photo_profile= action.payload.photo_profile
			state.followers= action.payload.followers
			state.following= action.payload.following
		},
		AUTH_ERROR: () => {
			localStorage.removeItem("token");
		},
		AUTH_LOGOUT: () => {
			localStorage.removeItem("token");
		},
	},
});

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } = AuthSlice.actions;
export default AuthSlice.reducer