// Collecting data - currency conversion rates
// E.g. For USD to INR (Here, in the key value pair ("usd" key) , the value object = data)
// "usd" : {
//     ...
//     "inr" : ₹ 82.016,
//     ...
// }

import { useState, useEffect } from "react";

function useCurrencyInfo(fromCurrencyType) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCurrencyType}.json`)
        .then( (res) => res.json() )
        .then( (response) => setData(response[fromCurrencyType]) )
                
    }, [fromCurrencyType]);
    
    return data;
}

export default useCurrencyInfo;