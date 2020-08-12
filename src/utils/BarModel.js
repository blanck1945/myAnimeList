export const barModel = {
    total: 0,
    watchPer: 0,
    completePer: 0,
    onHoldPer: 0,
    dropPer: 0,
    planToPer: 0,
    totalEpisodes: 0
}

export const setBarStyle = (variable, color) => {
    const divStyle = {
        width: variable + "%",
        background: color,
        borderRadius: 0
    }
    return divStyle
}