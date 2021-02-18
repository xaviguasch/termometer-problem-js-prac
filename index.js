'use strict'

/*
///////////////////////////////////////

PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcTempAmplitude = (temps) => {
  let max = temps[0]
  let min = temps[0]

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i]

    if (typeof currTemp !== 'number') continue
    if (currTemp > max) max = currTemp
    if (currTemp < min) min = currTemp
  }

  return max - min
}

const amplitude = calcTempAmplitude(temperatures)

console.log(amplitude)
