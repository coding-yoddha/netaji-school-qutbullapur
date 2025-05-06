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

// Mock API response (same as before)
const mockApiResponse = {
  openings: [
    {
      id: 1,
      title: "Primary Teacher",
      description:
        "Teach core subjects to young learners. Requires B.Ed and 2+ years of experience.",
    },
    {
      id: 2,
      title: "Secondary Math Teacher",
      description:
        "Specialize in Mathematics for higher classes. Requires M.Sc/B.Sc and B.Ed.",
    },
    {
      id: 3,
      title: "School Librarian",
      description:
        "Manage library resources and promote reading. Requires B.Lib or equivalent.",
    },
  ],
  about: {
    title: "About Netaji High School",
    description: "One of the premier schools in Hyderabad...",
  },
  contact: {
    email: "info@netajihighschool.in",
    phone: "+91 12345-67890",
  },
  faculty: {
    title: "Our Faculty",
    members: [
      { id: 1, name: "Dr. Anil Kumar", role: "Principal" },
      { id: 2, name: "Ms. Priya Sharma", role: "Math Teacher" },
    ],
  },
};

// Async thunk to fetch data
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Replace with real API call later:
    // const response = await fetch('/api/data');
    // return response.json();
    return mockApiResponse;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

// Async thunk for form submission
export const submitApplication = createAsyncThunk(
  "data/submitApplication",
  async (formData) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Replace with real API call later:
      // const response = await fetch('/api/careers', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // return response.json();
      return { success: true, message: "Application submitted successfully" };
    } catch (error) {
      throw new Error("Failed to submit application");
    }
  }
);

export const fetchMainPageDetails = createAsyncThunk(
  "data/fetchMainPageData",
  async () => {
    try {
      const response = await fetchMainPageData();
      return response;
      //Uncomment this
      // if (response?.success) {
      //   return response?.response;
      // }
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
      // Fetch Data
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(submitApplication.pending, (state) => {
        state.submissionStatus = "submitting";
        state.submissionError = null;
      })
      .addCase(submitApplication.fulfilled, (state) => {
        state.submissionStatus = "success";
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.submissionStatus = "error";
        state.submissionError = action.error.message;
      })
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
