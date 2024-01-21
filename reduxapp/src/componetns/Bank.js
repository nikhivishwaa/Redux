import React, { useState } from 'react'

export default function Bank() {

   const [amount, setAmount] = useState(0);
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-center flex-column">
        <input type="number" className='w-50' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <div className="d-flex justify-content-around w-50 my-4">
            <button className='btn btn-primary'>Deposite</button>
            <button className='btn btn-primary'>Withdraw</button>
        </div>
      </div>
    </div>
  )
}
