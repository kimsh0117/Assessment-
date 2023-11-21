function filter (callback: (num: number, i: number, arr: number[]) => boolean, inputs: number[] ) {
  for (let i = 0; i < inputs.length; i++) {
    if (callback(inputs[i], i, inputs)) {
      return inputs[i]
    }
  }
  return inputs
}


export {
  filter
}