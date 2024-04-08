import requests from './httpService';

const OrderServices = {
 
  updateOrder(uuid, body) {
    return requests.patch(`/orders/${uuid}`, body);
  },
};

export default OrderServices;
