import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteJob } from '../redux/jobAction';
import TrashIcon from '../components/TrashIcon'
import { formatDate } from '../constants';

const Card = ({ job }) => {
    const dispatch = useDispatch();

    const color = {
        Interviews: 'info',
        'Open for Applications': 'success',
        'Application Closed': 'danger',
    };

    const handleDelete = () => {
        dispatch(deleteJob(job.id))
            .then(() => {
                toast.success('Job deleted successfully!');
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
            });
    };

    return (
        <div className='card bg-light border-0 mb-3'>
            <div className='card-body'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-11'>
                        <div className='d-flex align-items-start'>
                            <div className={`badge me-2 bg-${color[job.status]}`}>
                                {job.company[0].toUpperCase()}
                            </div>
                            <div>
                                <p className='mb-0 fw-bold'>{job.position}</p>
                                <p className='mb-0 text-secondary'>
                                    {job.company} | {job.location}
                                </p>
                                <p className='mb-0'>{job.type}</p>
                                <div className={`text-${color[job.status]}`}>{job.status}</div>
                                <div>{formatDate(job.date)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1 d-flex align-items-end justify-content-end'>
                        <button
                            onClick={handleDelete}
                            className={`btn btn-sm btn-light`}
                        >
                            <TrashIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
