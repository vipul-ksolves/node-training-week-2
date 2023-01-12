import React from 'react'

const CURRENCT_FORMATTER = new Intl.NumberFormat(undefined, { currency: "USD", style: "currency" })

const formateCurrency = (number: number) => {
    return CURRENCT_FORMATTER.format(number)
}

export default formateCurrency
