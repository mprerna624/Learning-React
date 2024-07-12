import { useState } from 'react'
import WhiteContainer from './Components/WhiteContainer';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  let BackgroundImage = "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [fromCurrencyType, setFromCurrencyType] = useState("usd");
  const [toCurrencyType, setToCurrencyType] = useState("inr");
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);

  const currencyData = useCurrencyInfo(fromCurrencyType);

  const currencyOptions = Object.keys(currencyData);

  const convertCurrency = () => {
    setToCurrencyAmount(fromCurrencyAmount * currencyData[toCurrencyType]);
  }

  const swap = () =>{ 
    setFromCurrencyType(toCurrencyType);
    setToCurrencyType(fromCurrencyType);
  }


  return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BackgroundImage})`}} >

            <div className="w-full">

                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

                    <h1 className='mb-6 text-center text-blue-950 text-4xl font-semibold'>CURRENCY CONVERTER</h1>

                    <form onSubmit={(e) => {
                            e.preventDefault();
                            convertCurrency();
                        }}
                    >
                        <div className="w-full mb-1">
                            <WhiteContainer
                                label="From"
                                currencyType={fromCurrencyType}
                                currencyAmount={fromCurrencyAmount}
                                onAmountChange={(amt) => setFromCurrencyAmount(amt)}
                                onTypeChange={(type) => setFromCurrencyType(type)}
                                currencyOptions={currencyOptions}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 outline-none"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <WhiteContainer
                                label="To"
                                currencyType={toCurrencyType}
                                currencyAmount={toCurrencyAmount}
                                onAmountChange={(amt) => setToCurrencyAmount(amt)}
                                onTypeChange={(type) => setToCurrencyType(type)}
                                currencyOptions={currencyOptions}
                                currencyDisable={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg ouline-none">
                            Convert {fromCurrencyType.toUpperCase()} to {toCurrencyType.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
