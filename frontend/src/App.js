import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">2 + 2 != 5</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((products) => (
            <div className="product" key={products.slug}>
              <a href={`/product/${products.slug}`}>
                <img src={products.image} alt={products.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${products.slug}`}>
                  <p>{products.name}</p>
                </a>
                <p>{products.price}</p>
                <button> Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
