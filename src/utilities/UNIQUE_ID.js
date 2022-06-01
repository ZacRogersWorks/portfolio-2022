const UNIQUE_ID = () => {
    let seed = Math.floor(Math.random() * 10**10)
    seed = seed.toString(16)
    seed = seed.substring(2, seed.length)
    return seed
}

export default UNIQUE_ID