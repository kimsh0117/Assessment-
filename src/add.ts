function add(a: number, b: number | number[]) {
  if (Array.isArray(b)) {
    return b
  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error('input number should not have NaN')
  }

  if (!isFinite(a) || !isFinite(b)) {
    throw new Error('Number is Infinity!')
  }
  return a + b
}

export {
  add
}