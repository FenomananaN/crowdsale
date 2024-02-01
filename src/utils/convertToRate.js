export const convertToRate = (value,round) => {
    return Math.floor((1/value)*10**round)/(10**round)
}