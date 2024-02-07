export const roundNumber = (value,round) => {
    return Math.floor((value)*10**round)/(10**round)
}