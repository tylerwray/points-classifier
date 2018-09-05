import React from 'react'

import CoordinatePlane from './CoordinatePlane'

import { generatePoints, getRandomWeights } from '../learn'

function ML() {
    const points = generatePoints(1000)
    const weights = getRandomWeights()
    console.log(points)

    return (
        <div style={{ paddingTop: 20 }}>
            <CoordinatePlane points={points} weights={weights} />
        </div>
    )
}

export default ML
