import React from 'react'
import { useState } from 'react'

function PageE() {
    const [money, setMoney] = useState('')
    const [person, setPerson] = useState('')
    const [moneyShare, setMoneyShare] = useState('0.00')

    const handlePersonChange = (e) => {
        setPerson(e.target.value)
    }

    const submitCalc = () => {
        //alert('test connect func')
        //Validate
        if (money == '' || person == '') {
            alert('Check input Money or Person')
            return; //end
        }

        if (person <= 0) {
            alert('Person is not 0')
            return;
        }

        // let result = perseFloat(money) / perseFloat(Person)
        // setMoneyShare(result.toFixed(2))

        let result = parseFloat(money) / parseFloat(person)
        setMoneyShare(result.toLocaleString('th-TH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }))
    }

    const resetForm = () => {
        setMoney('');
        setPerson('');
        setMoneyShare('0.00');
    }

    return (
        <>
            <div className="w-8/12 mx-auto border rounded border-blue-400 p-5 mt-20
    shadow-xl flex flex-col">

                <h1 className='mx-auto text-2xl font-bold mb-5 text-blue-500'>Money Share!!</h1>

                <label htmlFor="" className='mt-5'>Input money</label>
                <input type="number" name="" id="" value={money} onChange={(e) => { setMoney(e.target.value) }} className="border rounded p-2" />

                <label htmlFor="" className='mt-5'>Input Peple</label>
                <input type="number" name="" id="" value={person} onChange={handlePersonChange} className="border rounded p-2" />

                <button className='p-2 bg-green-400 mt-3 rounded' onClick={submitCalc}>Calculator</button>
                <button className='p-2 bg-red-400 mt-3 rounded' onClick={resetForm}>Reset</button>

                <h1 className='mx-auto text-5xl font-bold mt-5 text-blue-400'>{moneyShare}</h1>
            </div>
        </>
    )
}

export default PageE