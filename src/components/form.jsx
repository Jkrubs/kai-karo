import React from 'react'
import './form.css'

export const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <h4>Name</h4>
            <p>Simply write vehicle name and press the search button (i.e Demio or vitz)</p>
            <input type="text" placeholder='Vehicle's name/>
            <div className="make">
                <select name="" id="">
                    <option value="">Make</option>
                    <option value="">Alfa Romeo</option>
                    <option value="">Aston Martin</option>
                    <option value="">Audi</option>
                    <option value="">Bentley</option>
                    <option value="">BMW</option>
                    <option value="">Mercedes benz</option>
                </select>
                <select name="" id="">
                    <option value="">Model</option>
                </select>
            </div>
            <h4>Year Of Manufacture</h4>
            <div className="make">
                <input type="text" placeholder='Min YOM' />
                <input type="text" placeholder='Max YOM' />
            </div>
            <h4>Price</h4>
            <p>Simply filter by inputting your budget and pressing search</p>
            <div className="make">
                <input type="number" placeholder='0' />
                <input type="number" placeholder='Max Price' />
            </div>
            <h4>Currency</h4>
            <select name="" id="">
                <option value="">All Currencies</option>
                <option value="">KSH</option>
                <option value="">USD</option>
                <option value="">JPY</option>
                <option value="">GBP</option>
            </select>
            <button>Search</button>
        </form>
    </div>
  )
}
