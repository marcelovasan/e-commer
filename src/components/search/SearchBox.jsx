import React, { useState } from 'react';
import './SearchBox.css'

const SearchBox = ({ placeholder }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const onChangeSearch = async (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        if (e.target.value.length > 0) {
            const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`, {
                method: "GET",
                crossDomain: "true",
                Headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "http://www.thecocktaildb.com"
                }

            }).then(res => res.json())
                // .then(ress => { return ress })
                .catch(err => {
                    console.log(err)
                })
            setData(res.drinks)
        } else {
            setSearch("")
            setData([])
        }
    }
    return <>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={onChangeSearch} />
                <div className="searchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" /></svg>
                </div>
            </div>
            {search.length > 0 &&
                <div className="dataResult">
                    {data?.map((e, i) =>
                        <a href={`/search?s=${e.idDrink}`} className="dataItem" key={i}>
                            <div>
                                <div className="resultImg">
                                    <img src={e.strDrinkThumb} alt="drink" />
                                </div>
                                <div className="resultName">
                                    <p>{e.strDrink}</p>
                                </div>
                            </div>
                        </a>
                    )}
                </div>
            }
        </div>
    </>;
};

export default SearchBox;
