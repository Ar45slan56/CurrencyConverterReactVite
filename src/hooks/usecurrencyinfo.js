import { useState, useEffect } from "react";

// function hello() {
//     return console.log("Hello");
// }


function useCurrencyinfo(currency){
   const [data, setdata] = useState({})
    useEffect(()=>{
    //    fetch api call api
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        console.log(data);
    },[currency])
    // return [data, setdata]
    console.log("data is:",data);
    return data;
}

export default useCurrencyinfo;
