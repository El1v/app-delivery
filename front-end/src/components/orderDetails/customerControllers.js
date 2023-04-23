import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { OrderContext } from '../../context/Context';

function CustomerControllers() {
  const { id: ID_FROM_URL } = useParams();
  const { updateOrderStatus, orderStatus } = useContext(OrderContext);

  return (
    <button
      type="button"
      data-testid="customer_order_details__button-delivery-check"
      disabled={ orderStatus !== 'Em Trânsito' }
      onClick={ () => updateOrderStatus('Entregue', ID_FROM_URL) }
    >
      MARCAR COMO ENTREGUE

    </button>
  );
}

export default CustomerControllers;
