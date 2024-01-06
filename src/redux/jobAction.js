import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk('jobs/getJobs', async () => {
    const response = await axios.get('http://localhost:4000/jobs');
    return response.data;
})

export const addJob = createAsyncThunk('jobs/addJob', async (job) => {
    await axios.post('http://localhost:4000/jobs', job);
    return job;
})

export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id) => {
    await axios.delete(`http://localhost:4000/jobs/${id}`);
    return id;
})