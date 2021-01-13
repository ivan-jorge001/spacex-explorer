import spaceXBaseRequest from './spaceXBaseRequest';

const getLaunches = async () => {
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    return await spaceXBaseRequest('/launches', requestOptions);
}

export default { getLaunches };