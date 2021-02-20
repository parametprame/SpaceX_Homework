import React, { lazy, Suspense } from 'react';
import {
    useParams
  } from "react-router-dom";
import { useQuery } from 'react-query'
  
const SectionDetail1 = lazy(() => import('../View/SectionDetail1'))
const SectionDetail2 = lazy(() => import('../View/SectionDetail2'))

const RocketDetailpage = () => {

    const { id } = useParams();

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://api.spacexdata.com/v3/rockets/${id}`).then(res =>
            res.json()
        )
    )
    
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <React.Fragment style={{top: 0}}>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <SectionDetail1 data={data.rocket_name}/>
                <SectionDetail2 data={data}/>
            </Suspense>
        </React.Fragment>
    )
}

export default RocketDetailpage