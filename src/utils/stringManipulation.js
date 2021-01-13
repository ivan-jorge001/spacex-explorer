function truncate(stringToTruncate, numberOfChar, endingChar = '...') {

    if (stringToTruncate && stringToTruncate.length > numberOfChar) {
        const regex = `^.{${numberOfChar}}.*?\\b`
        const regexp = new RegExp(regex);
        return stringToTruncate.match(regexp) + endingChar
    }
    
    return stringToTruncate;
}

export default { truncate }