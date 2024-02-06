import { useState } from "react"
import InputBox from "./components/InputCom"
import useCurrencyinfo from "./hooks/usecurrencyinfo"
import { VscArrowSwap } from "react-icons/vsc";
function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("pkr")
  const [convertedAmount , setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  // how to swap 3 var
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

// display final result

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (

    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
      <div className="bg-blue-500 rounded-xl h-[8%]  ">
      <h1 className="text-4xl text-black text-bold m-5 bg-white p-3 rounded-xl">Currency Converter By AS Digital Developer</h1>
      </div>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-5 py-2 "
                            onClick={swap}
                        >
                            <div className="flex flex-left">Swap &nbsp;

                            <VscArrowSwap className="m-1"/></div>
                            
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
