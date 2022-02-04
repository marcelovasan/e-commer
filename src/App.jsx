import { useEffect, useState } from 'react'
import SearchBox from './components/search/SearchBox'
import Footer from './components/footer/Footer';

function App() {
  const [data, setData] = useState(localStorage.getItem('data'))
  const [byCategory, setByCategory] = useState(localStorage.getItem('temp') ? JSON.parse(localStorage.getItem('temp')) : [])
  // shopping cart
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  const [subTotal, setSubTotal] = useState(localStorage.getItem('subtotal') ? JSON.parse(localStorage.getItem('subtotal')) : 0)

  useEffect(async () => {
    if (byCategory.length === 0) {
      const deta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a", {
        method: "GET",
        crossDomain: "true",
        Headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "http://www.thecocktaildb.com"
        }

      }).then(res => res.json())
        .then(ress => { return ress })
        .catch(err => {
          console.log(err)
        })
      // agrega al objeto drinks un campo precio con precios random
      deta.drinks.forEach(e => {
        e.price = Math.floor(Math.random() * (100 - 1) + 1)
      })
      // datos en bruto
      setData(deta)
      localStorage.setItem("data", JSON.stringify(deta))
      // hace un filtro para sacar las categorias del objeto drinks
      const categories = Array.from(new Set(deta.drinks.map(e => e.strCategory)))
      // a si mismo dentro de cada cate goria biene con su dato especifico perteneciente a la categoria
      let temp = {}
      categories.forEach(cat => {
        temp[cat] = deta.drinks.filter(e => e.strCategory === cat)
      })
      // datos filtrados por categoria
      setByCategory(temp)
      localStorage.setItem("temp", JSON.stringify(temp))
    }

  }, []);

  // funcion para agregar al carrito
  const addToCart = (e) => {
    let temp = cart
    let subtotal = subTotal
    temp.push(e)
    setCart(temp)
    localStorage.setItem('cart', JSON.stringify(temp))

    subtotal += e.price
    setSubTotal(subtotal)
    localStorage.setItem('subtotal', JSON.stringify(subtotal))
  };

  // funcion para eliminar del carrito
  const removeFromCart = (e) => {
    let temp = cart
    let subtotal = subTotal
    temp.splice(temp.indexOf(e), 1)
    setCart(temp)
    localStorage.setItem('cart', JSON.stringify(temp))
    subtotal -= e.price
    setSubTotal(subtotal)
    localStorage.setItem('subtotal', JSON.stringify(subtotal))
  };

  return (
    <div className="App">
      <header className="App-header"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>COCKTAIL APP</h1>
        <SearchBox placeholder="Enter a drink" />
        <div className='card'>
          <span className='item'>

            {
              /* {cart.map(e =>
                <div>{e.strDrink}</div>
              )} */
            }
            {cart.length}
            Items
          </span>
          <p>Total({subTotal})</p>
        </div>
      </header>
      <div className="container">
        {Object.entries(byCategory).map(([key, value]) =>
          <div className="category" key={key}>
            <h2>{key}s</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {value.map(e =>
                <div className="card-text">
                  <div key={e.idDrink} />
                  {/* <img src={e.strDrinkThumb} alt={e.strDrink} /> */}
                  <img src={e.strDrinkThumb} alt={e.strDrinkThumb} className="img-thumbnail" />
                  <p className='fw-bold fs-2'>{e.strDrink}</p>
                  <p className='fw-bolder'>Precio S/. {e.price}</p>
                  {cart.find(i => i.idDrink === e.idDrink) ?
                    <button id='remove' className="btn btn-danger" onClick={() => removeFromCart(e)}>remove</button> :
                    <button id='add' className="btn btn-success" onClick={() => addToCart(e)}>Add to cart</button>
                  }
                </div>
              )}
            </div>
          </div>
        )
        }
      </div >
      <div>
        <Footer />
      </div>
    </div >

  );
}

export default App
