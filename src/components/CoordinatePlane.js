import React from 'react'

import { guess } from '../learn'
import { X_MAX, Y_MAX } from '../constants'

const colors = ['blue', 'red', 'green', 'yellow']

function CoordinatePlane(props) {
    const {
        points,
        weights
    } = props

    return (
        <svg width={X_MAX} height={Y_MAX}>
            <line x1="0" y1={Y_MAX / 2} x2={X_MAX} y2={Y_MAX / 2} stroke="purple" strokeWidth="3" />
            <line x1={X_MAX / 2} y1="0" x2={X_MAX / 2} y2={Y_MAX} stroke="purple" strokeWidth="3" />
            {points.map((point, i) =>
                <circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill={colors[guess(weights, point)]}
                />
            )}
        </svg>
    )
}

export default CoordinatePlane
