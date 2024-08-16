
import { useState,useEffect } from "react";
import quotes from "./quotes.json"

const RandomQuote = () =>{

    // const [quotes,setQuotes]=useState([]);
    const [quote,setQuote]=useState({
        text:"yo",
        author:"roland"
    })
    const [loading,setLoading]=useState(false);
    const [fadeIn,setFadeIn]=useState(true);

    useEffect(()=>{
        async function fetchQuotes(){
            setQuote(quotes[Math.floor(Math.random()*quotes.length)])
        }
        fetchQuotes();
    },[])

    const random = () =>{
        setLoading(true);
        setFadeIn(false);
        setTimeout(()=>{
            const select = quotes[Math.floor(Math.random()*quotes.length)]
            setQuote(select)
            setLoading(false);
            setFadeIn(true);
        },500)
    }

    const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${quote.text} - ${quote.author}`);
      alert("Quote copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

    return(
        <>
          <div className="container">
                <div className="inner_container">
                    
                    <div className="row">
                        <div className={`col quotes ${fadeIn ? "fade-in" : ""}`}>
                            <p>{quote.text}</p>
                        </div>
                        <hr/>
                        <div className={`col author ${fadeIn ? "fade-in" : ""}`}>
                            <p>{quote.author}</p>
                        </div>
                        <div className="col">
                          <button
                          className={`icon-btn ${loading ? "loading" : ""}`}
                          onClick={random}
                          >
                          <i className='bx bx-repeat bx-border-circle' ></i>
                          </button>
                          <button onClick={copyToClipboard}>
                          <i className='bx bx-copy bx-border-circle'></i>
                        </button>
                        </div>
                    </div>
                </div>
          </div>
        </>
    )

}

export default RandomQuote;