import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Card from '../components/Card'
import Filter from '../components/Filter'
import { getJobs } from '../redux/jobAction'

const Joblist = () => {
    const dispatch = useDispatch()
    const state = useSelector((store) => store.jobs)

    useEffect(() => {
        dispatch(getJobs())
    }, [])

    return (
        <div className='container'>
            <Filter />
            {state.isLoading ? <Loading /> : state.isError ?
                <div className='alert alert-dark d-flex align-items-center justify-content-center'>
                    <button onClick={() => dispatch(getJobs())} className='btn btn-sm btn-dark'>Try Again</button>
                </div> :
                <div className='row'>{state.jobs.map((job) =>
                    <div className='col-lg-4 col-md-6' key={job.id}>
                        <Card job={job} key={job.id} />
                    </div>
                )}
                </div>
            }
        </div>
    )
}

export default Joblist