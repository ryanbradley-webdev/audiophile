export const formatCurrency = (price: number) => {
    const priceDigits = [...price.toString()].reverse()

    let priceString = ''

    priceDigits.forEach(digit => {
        if (priceString.length !== 0 && priceString.replace(/,/g, '').length % 3 === 0) {
            priceString = digit + ',' + priceString
        } else {
            priceString = digit + priceString
        }
    })

    return '$ ' + priceString
}