function order (callback: (a: number, b: number) => any, inputs: number[] ) {
  if (inputs.length <= 1) {
      throw new Error('The length of the array must be greater than 1')
  }
  return inputs.slice().sort(callback)
}


export {
  order
}