import React from 'react'
import './style.scss'
import QuoteImg from './../../assets/images/quote.jpg'

function AskQuote() {
    return (<div className='AskQuote container' style={
        {
            backgroundImage: `url(${QuoteImg})`
        }
    }

    > <div className="overlay"></div> <h1>We Are Pacific A Travel Agency</h1> <p>We can manage your dream building A small river named Duden flows by their place</p> <button>Ask for a quote</button> </div>)
}

export default AskQuote