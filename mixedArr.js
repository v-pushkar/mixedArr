const randomNumer = (min, max) => min + Math.floor(max * Math.random());

const generateNumbers = (arr, max, min = 0) => {
    let num = randomNumer(min, max);
    if (!arr[num]) {
        return num
    } else {
        do {
            num = randomNumer(min, max);
        } while (arr[num] !== null);
    }
    return num;
};

const mixedArr = (arr) => {
    const max = arr.length

    let mixArr = []
    for (let i = 0; i < max; i++) {
        mixArr.push(null)
    }
    for (let i = 0; i < arr.length; i++) {
        let idx = generateNumbers(mixArr, max, 0)
        mixArr[idx] = arr[i]
    }
    return mixArr
}

export {
    mixedArr,
    randomNumer
}
