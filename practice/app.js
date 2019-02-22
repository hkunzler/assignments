function firstDuplicate(a) {
    let same = {}
    let single = {}

    for (let i = 0; i < a.length; i++) {
        item = a[i]
        if (single[item]) {
            same[item] = 1
            delete single[item]
        } else {
            single[item] = a[i]
        }
    }
    console.log(single)
    if (single[item]) {
        return single[Object.keys(single)[0]]
    } else {
        return -1
    }
}
console.log(firstDuplicate([1, 2, 2, 1, 7, 3, 5]))