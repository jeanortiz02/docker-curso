
let times = 0;
const syncDb = () => {
    times++;
    console.log('Tick cada 5 segundos', times);

    return times;s
}

module.exports = {
    syncDb
}