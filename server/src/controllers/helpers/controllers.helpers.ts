type ReactSelectType = {
  value: number,
  label: string
}

export const brandIdToId = (obj: ReactSelectType) => {
  const { value } = obj
  return value
}

export const categoriesToId = (arr: ReactSelectType[]) => {
  return arr.map(e => {
    return {
      id: e.value
    }
  })
}

module.exports = {
  brandIdToId,
  categoriesToId
}
