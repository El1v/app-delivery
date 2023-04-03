import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';

function CheckoutTable() {
  const [cart, setCart] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartFromLocalStorage);
  }, []);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index) => {
              const { name, productId, quantity, unitPrice, subTotal } = product;

              // test ids
              const TEST_PREFIX = 'customer_checkout__element-order-table-';

              return (
                <tr key={ productId }>
                  <td>
                    <span
                      data-testid={ `${TEST_PREFIX}item-number-${index}` }
                    >
                      { index + 1}
                    </span>
                  </td>
                  <td>
                    <span
                      data-testid={ `${TEST_PREFIX}name-${index}` }
                    >
                      {name}
                    </span>
                  </td>
                  <td>
                    <span
                      data-testid={ `${TEST_PREFIX}quantity-${index}` }
                    >
                      {quantity}
                    </span>
                  </td>
                  <td>
                    <span
                      data-testid={ `${TEST_PREFIX}unit-price-${index}` }
                    >
                      {Number(unitPrice).toFixed(2).replace('.', ',')}
                    </span>
                  </td>
                  <td>
                    <span
                      data-testid={ `${TEST_PREFIX}sub-total-${index}` }
                    >
                      {Number(subTotal).toFixed(2).replace('.', ',')}
                    </span>
                  </td>
                  <td>
                    <button
                      data-testid={ `${TEST_PREFIX}remove-${index}` }
                      type="button"
                    >
                      Remover

                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div>
        <span>Total: R$ </span>
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {Number(context.totalPrice).toFixed(2).replace('.', ',')}
        </span>
      </div>
    </section>
  );
}

export default CheckoutTable;
