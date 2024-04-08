import * as storage from './storage';
import { tokenConstants } from './tokenConstants';

const token = () => {
    const _setToken = (tokenObj) => {
      storage.set(tokenConstants.ACCESS_TOKEN, tokenObj.token);

    };
  
    const _getAccessToken = () => {
      return storage.get(tokenConstants.ACCESS_TOKEN);
    };
  
    const _getTokenExpiryDate = () => {
      return storage.get(tokenConstants.EXPIRY_DATE);
    };
  
    const _clearToken = () => {
      return Object.values(tokenConstants).forEach((key) => storage.remove(key));
    };
  
    return {
      setToken: _setToken,
      getAccessToken: _getAccessToken,
      getTokenExpiryDate: _getTokenExpiryDate,
      clearToken: _clearToken,
    };
  };
  
  export default token();