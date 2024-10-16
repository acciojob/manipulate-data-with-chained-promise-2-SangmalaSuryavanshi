//your JS code here. If required.
function manipulateArray(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    })
    .then(arr => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arr.filter(num => num % 2 === 0));
            }, 1000);
        });
    })
    .then(arr => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arr.map(num => num * 2));
            }, 2000);
        });
    })
    .then(arr => {
        document.getElementById('output').textContent = arr.join(', ');
    });
}

manipulateArray([1, 2, 3, 4]);