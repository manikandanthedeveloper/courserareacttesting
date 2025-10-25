import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},
		increaseQuantity: (state, action) => {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				item.quantity += 1;
			}
		},
		decreaseQuantity: (state, action) => {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			}
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload.id
			);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	clearCart,
	increaseQuantity,
	decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
