import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchFacultyPageData,
  fetchMainPageData,
} from "@/app/utils/apiHelpers";

export interface MainPageDataType {
  eventImages: string[];
  schoolData: {
    name: string;
  };
  description: string;
  achievement: Array<{ id: number; title: string; year: number }>;
  hightlights: Array<{ id: number; title: string; description: string }>;
}

export const fetchMainPageDetails = createAsyncThunk(
  "data/fetchMainPageData",
  async () => {
    try {
      const response = await fetchMainPageData();
      if (response?.success) {
        return response?.response;
      }
    } catch (error) {
      throw new Error("Failed to fetch main page data");
    }
  }
);

export const getFacultyDetails = createAsyncThunk(
  "data/fetchFacultyPageData",
  async () => {
    try {
      const response = await fetchFacultyPageData();
      if (response?.success) {
        console.log("response.response", response.response);
        return response?.response;
      }
    } catch (error) {
      throw new Error("Failed to fetch main page data");
    }
  }
);

const dataSlice = createSlice({
  name: "schoolDetails",
  initialState: {
    data: {
      openings: [],
      about: {},
      contact: {},
      faculty: {},
    },
    mainPageDetails: null as MainPageDataType | null,
    loading: false,
    error: false,
    submissionStatus: null,
    submissionError: null,
    facultyDetails: null,
  },
  reducers: {
    resetSubmissionStatus: (state) => {
      state.submissionStatus = null;
      state.submissionError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainPageDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchMainPageDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.mainPageDetails = action.payload;
      })
      .addCase(fetchMainPageDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getFacultyDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFacultyDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.facultyDetails = action.payload;
      });
  },
});

export const { resetSubmissionStatus } = dataSlice.actions;
export default dataSlice.reducer;
