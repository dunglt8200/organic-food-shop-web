import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Danh sách sản phẩm trong giỏ
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        // Tăng số lượng nếu sản phẩm đã tồn tại trong giỏ
        existingItem.soLuong += product.soLuong;
      } else {
        // Thêm sản phẩm mới vào giỏ
        state.items.push({ ...product });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, soLuong } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.soLuong = soLuong;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
