import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFilters, filtredBySearch, sortJobs } from '../redux/jobSlice';
import { sortOpt, statusOpt, typeOpt } from '../constants';

const Filter = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        company: '',
        location: '',
        status: '',
        type: '',
        sort: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        if (name === 'sort') {
            dispatch(sortJobs(value));
        } else {
            dispatch(filtredBySearch({ text: value, field: name }));
        }
    };

    return (
        <form className='row d-flex align-items-end mb-3'>
            <div className='col-md-2 col-6 form-group'>
                <label className='form-text'>Company</label>
                <input
                    onChange={handleChange}
                    value={formData.company}
                    name="company"
                    className='form-control'
                    type='text' />
            </div>
            <div className='col-md-2 col-6 form-group'>
                <label className='form-text'>Location</label>
                <input
                    onChange={handleChange}
                    value={formData.location}
                    name="location"
                    className='form-control'
                    type='text' />
            </div>
            <div className='col-md-2 col-4 form-group'>
                <label className='form-text'>Status</label>
                <select
                    onChange={handleChange}
                    value={formData.status}
                    name="status"
                    className='form-select'
                    type='text'>
                    <option hidden>Select</option>
                    {statusOpt.map((i) => (
                        <option value={i} key={i}>
                            {i}
                        </option>
                    ))}
                </select>
            </div>
            <div className='col-md-2 col-4 form-group'>
                <label className='form-text'>Type</label>
                <select
                    onChange={handleChange}
                    value={formData.type}
                    name="type"
                    className='form-select'
                    type='text'>
                    <option hidden>Select</option>
                    {typeOpt.map((i) => (
                        <option value={i} key={i}>
                            {i}
                        </option>
                    ))}
                </select>
            </div>
            <div className='col-md-2 col-4 form-group'>
                <label className='form-text'>Sort</label>
                <select
                    onChange={handleChange}
                    value={formData.sort}
                    name="sort"
                    className='form-select'
                    type='text'>
                    <option hidden>Select</option>
                    {sortOpt.map(i =>
                        <option value={i} key={i}>
                            {i}
                        </option>
                    )}
                </select>
            </div>
            <div className='col-md-2 col-12 mt-2 mt-md-0'>
                <button className='btn btn-dark w-100' onClick={() => dispatch(clearFilters())}>
                    Reset
                </button>
            </div>
        </form>
    );
};

export default Filter;
