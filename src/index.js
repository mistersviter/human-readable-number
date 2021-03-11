module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    // case number < 0
    if (number < 0) {
        return 'NO GOD PLEASE NO';
    }
    // case number is 0
    if (number === 0) {
        return 'zero';
    }
    let parsedNumber = ('0000' + number).substr(-4).match(/^(\d{1})(\d{1})(\d{2})$/);
    let readableNumber = '';
    if (parsedNumber[1] != 0) {
        readableNumber += ones[Number(parsedNumber[1])] + ' thousand '
    } else {
        readableNumber += '';
    }
    if (parsedNumber[2] != 0) {
        readableNumber += ones[Number(parsedNumber[2])] + ' hundred ';
    } else {
        readableNumber += '';
    }
    if (parsedNumber[3] != 0) {
        readableNumber += (ones[Number(parsedNumber[3])] || tens[parsedNumber[3][0]] + ' ' + ones[parsedNumber[3][1]]);
    } else {
        readableNumber += '';
    }
    return readableNumber.trim();
}
