
import React, { lazy, Suspense } from 'react';
const SectionRocket1 = lazy(() => import('./View/SectionRocket1'))
const SectionRocket2 = lazy(() => import('./View/SectionRocket2'))
const SectionRocket3 = lazy(() => import('./View/SectionRocket3'))

const Rocketpage = () => {
    
    return (
        <React.Fragment style={{top: 0}}>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <SectionRocket1 /> 
                <SectionRocket2 />
                <SectionRocket3 />
            </Suspense>
        </React.Fragment>
    )
}

export default Rocketpage