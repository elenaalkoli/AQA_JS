console.log(getCharCount('stringg, aqa'));

function getCharCount(string) {
    if (!string || typeof string !== "string") {
        throw new Error("Please provide a valid string")
    }
    else {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let stringToArray = string.toLowerCase().split(''); //к нижнему регистру и в массив для дальнейшего перебора .map
        const result = stringToArray.map((symbol) => {
            if (alphabet.includes(symbol)) {
                const count = stringToArray.filter((el) => el === symbol).length;
                return count;
            } else {
                return symbol;
            }
        });
        return result;
    }