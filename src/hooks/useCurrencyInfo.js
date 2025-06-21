import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    
    const [currencyData, setCurrencyData] = useState({})

    useEffect(() => {

        // let url = `https://currency-rate-exchange-api.onrender.com/${currency}`
        let url = `https://open.er-api.com/v6/latest/${currency}`

        fetch(url)
        .then(response => response.json())
        // .then(result => setCurrencyData(result['rates'][currency]))
        .then(result => setCurrencyData(result['rates']))

    }, [currency])

    return currencyData
}

export default useCurrencyInfo