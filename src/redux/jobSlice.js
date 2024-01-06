import { createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, getJobs } from "./jobAction";

const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        mjobs: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        filtredBySearch: (state, action) => {
            const { text, field } = action.payload;
            const query = text.toLowerCase();

            const filteredJobs = state.mjobs.filter(
                (job) => job[field] && job[field].toLowerCase().includes(query)
            );

            state.jobs = filteredJobs;
        },
        clearFilters: (state) => {
            state.jobs = state.jobs
        },
        sortJobs: (state, action) => {
            switch (action.payload) {
                case 'a-z':
                    state.jobs.sort((a, b) => a.company.localeCompare(b.company))
                    break;

                case 'z-a':
                    state.jobs.sort((a, b) => b.company.localeCompare(a.company))
                    break;

                case "New":
                    state.jobs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    break;

                case "Old":
                    state.jobs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                    break;

                default:
                    break;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getJobs.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = action.payload
                state.mjobs = action.payload;
            })
            .addCase(addJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addJob.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
            })
            .addCase(addJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs.push(action.payload);
            })
            .addCase(deleteJob.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteJob.rejected, (state) => {
                state.isLoading = false;
                state.isError = true
            })
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = state.jobs.filter(job => job.id !== action.payload);
            })
    }
})

export default jobSlice.reducer;
export const { filtredBySearch, sortJobs, clearFilters } = jobSlice.actions;