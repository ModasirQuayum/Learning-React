import React, { useState } from "react";
import { InputBox } from "./components";
import currencyInfo from "./hooks/currencyInfo";

function App(){
    const [from, setFrom] = useState("usd")
    const [to,setTo] = useState("bdt")
    const [amount,setAmount] = useState()
    const [convertAmount,setConvertAmount] = useState()
    
    const currencyInfoList = currencyInfo(from)
    let currencies = Object.keys(currencyInfoList)
    let element = currencies.findIndex(l => l === from);

    let toCurrency = [...currencies];
    toCurrency.splice(element,1)

    const convert= ()=>{
        setConvertAmount( amount * currencyInfoList[to].toFixed(3) )
    }

    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form 
                    onSubmit={(e)=>{
                        e.preventDefault()
                        convert()
                    }}
                >
                    <InputBox
                        label="From"
                        amount={amount}
                        changeAmount = {(amount)=> setAmount(amount)}
                        currency = {from}
                        changeCurrency = {(currency)=> setFrom(currency)}
                        currencyList = {currencies}
                    />
                    <InputBox
                        label="To"
                        amount={convertAmount}
                        changeAmount = {(amount)=> setConvertAmount(amount)}
                        currency = {to}
                        changeCurrency = {(currency)=> setTo(currency)}
                        currencyList = {toCurrency}
                        amountDisable
                    />
                    <button type="submit" className="mt-3 px-4 py-2 backdrop-blur-sm bg-slate-700/70 text-white">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                </form>
            </div>
        </div>
    )

}
export default App