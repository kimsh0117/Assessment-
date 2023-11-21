function findMissingNumber(num: number, index: number, arr: number[]) {
  if (isNaN(num)) {
    throw new Error('input number should not have NaN')
  }

  if (!isFinite(num)) {
    throw new Error('Number is Infinity!')
  }

  if (num + 2 === arr[index + 1]) {
    return true
  }

  return undefined
}

export {
  findMissingNumber
}