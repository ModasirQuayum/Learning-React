import React, { useId } from "react";

function InputBox({
    label,
    amount,
    changeAmount,
    currency,
    changeCurrency,
    currencyList = [],
    amountDisable = false,
    currencyDisable = false,
}
){
    const amountId = useId()
    return (
        <div className="bg-white p-3 rounded-lg text-sm mb-2">
            <div className="input-amount">
                <label htmlFor={amountId} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            </div>
            <div className="currency-list flex items-center">
                <input 
                        id={amountId}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-1"
                        type="number"
                        min="0"
                        value={amount}
                        disabled={amountDisable}
                        onChange={(e)=> changeAmount && changeAmount(Number(e.target.value)) }
                />
                <select
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border rounded-r-lg border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 scroll-smooth scroll-mx-2.5" 
                    value={currency}
                    disabled={currencyDisable}
                    onChange={(e)=> changeCurrency && changeCurrency(e.target.value)}    
                >
                    {currencyList.map((currency)=>(
                        <option key={currency} value={currency}
                        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 "
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )

}
export default InputBox;