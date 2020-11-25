import React, { useState, useEffect } from 'react'
import './Gifs.css'

const Gifs = () => {

    const [subject, setSubject] = useState("cat")
    const [gif, setGif] = useState(null)

    const changeHandler = (event) => {
        setTimeout(() => {
            setSubject(event.target.value)
        }, 3000);
    }

    const clickHandler = () => {
        getGif()
        console.log("clicked")
    }

    const getGif = () => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=O1JDQLinoSjz90WojiKtYQKaaO39C1C3&tag=${subject}&rating=g`, { mode: 'cors' })
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                setGif(response.data.images.original.url);
            })
            .catch(function (err) {
                setGif(`https://media2.giphy.com/media/ADSFDg7OI0TDhd9ucJ/200w.gif?cid=ecf05e47ee3gb5frr8wehq8tda8bmntt358yn9msgsnjxvou&rid=200w.gif`)
            });
    }

    useEffect(() => {
        getGif()
    }, [subject]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="gifsComponent">
            <input type="text" placeholder="key word here" name="keyWord" onChange={changeHandler} />
            <input type="button" value="new" onClick={clickHandler} /><br />
            <img src={gif} alt="those cats :)" />
        </div>
    )
}

export default Gifs