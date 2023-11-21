function map(callback: (num: number, i: number, arr: number[]) => number, inputs: number[]) {
  const result: number[] = []

  for (let i = 0; i < inputs.length; i++) {
    result.push(callback(inputs[i], i, inputs))
  }

  return result
}

export {
  map
}