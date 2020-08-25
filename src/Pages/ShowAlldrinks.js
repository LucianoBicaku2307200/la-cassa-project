import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function ShowAlldrinks() {
    const [drinks, setDrinks] = useState([])
    const [trigger, setTrigger] = useState(true);
    useEffect(() => {
        axios.get(
            "https://icb5fa658g.execute-api.eu-west-2.amazonaws.com/api/products/?time=dinner"
        ).then(
            res => {
                setDrinks(res.data);
                console.log(res.data)
            }

        )
    }, [])

    const delItem = () => {
        axios.delete("https://gofecc8frk.execute-api.eu-west-2.amazonaws.com/prod/drinks/424571");
        console.log('puonon del')
    }

    const addItem = () => {
        axios.post("https://gofecc8frk.execute-api.eu-west-2.amazonaws.com/prod/drinks/424571", {
            "id": "424571",
            "title": "Bacon King Burger",
            "restaurantChain": "Burger King",
            "servingSize": null,
            "readableServingSize": null,
            "image": "https://images.spoonacular.com/file/wximages/424571-312x231.png",
            "imageType": "png"
        });
        console.log('puonon add')
    }

    return (
        <div>
            {/* <button onClick={() => delItem()}>del</button>
            <button onClick={() => addItem()}>add</button> */}
            {drinks.map(el => {
                return (<li key={el.itemID}>{el.title}</li>)

            })}
        </div>
    )
}
