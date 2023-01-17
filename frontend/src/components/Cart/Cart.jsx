import * as React from "react"

const Cart = (props) => {
  return (
    <div className="card w-50 m-4 pb-4">
      <h1 className="card-header">Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products
            .filter((product) => props.inCartProducts[product.id])
            .map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{props.inCartProducts[product.id]}</td>
                <td>{product.price}$</td>
                <button
                  className="btn btn-primary mt-1 mr-2 border-0"
                  onClick={() => props.onRemoveFromCart(product.id)}
                >
                  -
                </button>
                <button
                  className="btn btn-primary mt-1 bg-danger border-0"
                  onClick={() => props.onRemoveFromCart(product.id, props.inCartProducts[product.id])}
                >
                  x
                </button>
              </tr>
            ))}
        </tbody>
      </table>
      <span className="mx-auto">
        Total: {props.products.reduce((acc, curr) => acc + props.inCartProducts[curr.id] * curr.price, 0)}$
      </span>
    </div>
  )
}

export { Cart }
