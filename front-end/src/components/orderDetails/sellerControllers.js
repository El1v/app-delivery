import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../context/Context';

function SellerControllers() {
  const { id: ID_FROM_URL } = useParams();
  const { updateOrderStatus, orderStatus } = useContext(OrderContext);

  return (
    <div>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ orderStatus !== 'Pendente' }
        onClick={ () => updateOrderStatus('Preparando', ID_FROM_URL) }
      >
        PREPARAR PEDIDOS

      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ orderStatus !== 'Preparando' }
        onClick={ () => updateOrderStatus('Em Trânsito', ID_FROM_URL) }
      >
        SAIU PARA ENTREGA

      </button>
    </div>
  );
}

export default SellerControllers;
