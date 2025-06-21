export default function InputBox({
    label, 
    currencyOptions = [],
    amount,
    onChangeAmount,
    onCurrencyChange,
    selectedCurrency
}) {

    return(
        <div className='flex justify-between bg-white px-5 py-5 rounded'>
            <div>
                <label>{label}</label>
                <input 
                    type="number" 
                    min={0} 
                    value={amount}
                    onChange = {(e) => onChangeAmount && onChangeAmount(Number(e.target.value))} 
                    className='w-full h-8 bg-white outline-none mt-2' 
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select 
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    value={selectedCurrency}
                    className='w-full max-w-sm h-8 bg-white outline-none mt-2'
                >
                {    
                    currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }
                </select>
            </div>
        </div>
    )
}