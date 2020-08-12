export const setTotalAmount = (data, filter) => {
    return data.filter(el => el.state === filter)
}

export const setTotalEntries = (data, data2, data3) => {
    return data.length + data2.length + data3.length
}

export const setPercentage = async (data, divisor) => {
    return await data / divisor
}
