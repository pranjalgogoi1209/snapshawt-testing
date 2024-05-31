import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contactRef: "",
  priceRef: "",
  userData: "",
  credits: [],
};

const Slice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {
    // contact form
    ContactForm: (state, action) => {
      const data = {
        id: nanoid(),
        contact: action.payload,
      };
      //   console.log(data);
      state.contactRef = data;
    },

    // price section
    PriceSection: (state, action) => {
      const data = {
        id: nanoid(),
        price: action.payload,
      };
      state.priceRef = data;
    },

    // user data
    UserData: (state, action) => {
      const data = {
        id: nanoid(),
        user: action.payload,
      };
      state.userData = data;
    },

    // credits
    AvalableCredits: (state, action) => {
      const data = {
        id: nanoid(),
        credits: action.payload,
      };
      state.credits.push(data.credits);
    },
  },
});

export const { ContactForm, PriceSection, UserData, AvalableCredits } =
  Slice.actions;
export default Slice.reducer;
