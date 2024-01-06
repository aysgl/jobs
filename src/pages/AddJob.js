import React, { useEffect } from 'react'
import { statusOpt, typeOpt } from '../constants'
import { v4 } from 'uuid'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addJob, getJobs } from '../redux/jobAction'

const AddJob = () => {
    const state = useSelector(store => store.jobs)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newJob = Object.fromEntries(formData.entries());

        newJob.id = v4();
        newJob.date = new Date().toLocaleDateString()

        dispatch(addJob(newJob))
            .then(() => {
                toast.success('Job added successfully!');
                navigate("/")
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
            });
    }

    useEffect(() => {
        dispatch(getJobs())
    }, [])

    return (
        <div className='container'>
            <h2>Add Job</h2>
            <form onSubmit={handleSubmit}>
                <div className='from-group mb-3'>
                    <div className='form-label'>Position</div>
                    <input list="positions" className='form-control' type='text' name="position" required />
                    <datalist id="positions">
                        {[...new Set(state.jobs.map(i => i.position))].map((position, index) => (
                            <option key={index} value={position}></option>
                        ))}
                    </datalist>
                </div>
                <div className='from-group mb-3'>
                    <div className='form-label'>Company</div>
                    <input list='companies' className='form-control' type='text' name="company" required />
                    <datalist id="companies">
                        {[...new Set(state.jobs.map(i => i.company))].map((company, index) => (
                            <option key={index} value={company}></option>
                        ))}
                    </datalist>
                </div>
                <div className='from-group mb-3'>
                    <div className='form-label'>Location</div>
                    <input list='locations' className='form-control' type='text' name="location" required />
                    <datalist id="locations">
                        {[...new Set(state.jobs.map(i => i.location))].map((location, index) => (
                            <option key={index} value={location}></option>
                        ))}
                    </datalist>
                </div>
                <div className='from-group mb-3'>
                    <div className='form-label'>Status</div>
                    <select className='form-select' type='text' name="status" required >
                        {statusOpt.map(i => <option value={i} key={i}>{i}</option>)}
                    </select>
                </div>
                <div className='from-group mb-3'>
                    <div className='form-label'>Type</div>
                    <select className='form-select' type='text' name="type" required >
                        {typeOpt.map(i => <option value={i} key={i}>{i}</option>)}
                    </select>
                </div>
                <div>
                    <button className='btn btn-dark'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddJob