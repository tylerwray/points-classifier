import * as R from 'ramda'

import { X_MAX, Y_MAX } from './constants'

function guess(weights, point) {
    // const sum = point.x * weights.x + point.y * weights.y
    // let team = sigmoid(sum)

    // if (team > 0 && team <= 0.25) {
    //     team = 0
    // } else if (team > 0.25 && team <= 0.5) {
    //     team = 1
    // } else if (team > 0.5 && team <= 0.75) {
    //     team = 3
    // } else if (team > 0.75 && team <= 1) {
    //     team = 4
    // }

    // return team
    // console.log(team(point))

    // return team(point)
    return team(point)
}

function team(point) {
    const {
        x,
        y
    } = point

    let team

    const zero = X_MAX / 2

    if (x < zero && y > zero) {
        team = 0
    } else if (x > zero && y > zero) {
        team = 1
    } else if (x > zero && y < zero) {
        team = 2
    } else if (x < zero && y < zero) {
        team = 3
    }

    return team
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x))
}

function generatePoints(num) {
    return R.range(0, num).map(_ => ({
        x: rand(0, X_MAX),
        y: rand(0, Y_MAX)
    }))
}

function getRandomWeights() {
    return {
        x: rand(-1, 1),
        y: rand(-1, 1)
    }
}
function rand(high, low) {
    return Math.random() * (high - low) + low
}

export {
    guess,
    generatePoints,
    getRandomWeights
}
