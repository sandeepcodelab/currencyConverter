import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const[from, setFrom] = useState('USD')
  const[amount, setAmount] = useState(0)
  const[to, setTo] = useState('INR')
  const[convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)
  
  const convert = () => { 
    setConvertedAmount((currencyInfo[to] * amount).toFixed(2))
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)

  }

  return (
    <div>

      <div className='bg-[url(assets/img/currencySign.jpg)] bg-center bg-no-repeat bg-cover w-full h-screen flex justify-center place-items-center'>
        
        <div className='w-full max-w-lg mx-auto bg-white/30 backdrop-blur-md rounded-md px-10 py-10'>
          <h1 className='text-3xl text-center text-[#260A76] font-bold text-shadow-xs text-shadow-white'>Currency Converter</h1>
          
          <div className='my-5'>
            <InputBox 
              label = {'From'}
              currencyOptions = {currencyOptions}
              amount = {amount}
              onChangeAmount = {(amount) => setAmount(amount)}
              onCurrencyChange = {(from) => setFrom(from)}
              selectedCurrency = {from} 
            />
          </div>            

          <div className='w-full relative'>
            <button onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-8 border-1 border-white rounded-full bg-[#4411D1] hover:bg-[#3B189A] px-2 py-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up-icon lucide-arrow-down-up">
                <path d="m3 16 4 4 4-4"/>
                <path d="M7 20V4"/>
                <path d="m21 8-4-4-4 4"/>
                <path d="M17 4v16"/>
              </svg>
            </button>
          </div>
          
          <div>
            <InputBox 
              label = {'To'}
              currencyOptions = {currencyOptions}
              amount = {convertedAmount}
              onCurrencyChange = {(to) => setTo(to)} 
              selectedCurrency = {to}
            />
          </div>

          <div className='mt-6'>
            <button className='w-full h-10 rounded-md bg-[#4411D1] hover:bg-[#3B189A] text-white cursor-pointer' onClick={convert}>Convert {from} to {to}</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App