import {servicesConstants} from '../constants';
import {servicesCollection} from '../../helpers/firebase';

const getServicesRequest = () => {
    return {
      type: servicesConstants.GET_SERVICES_REQUEST
    };
};
  
const getServicesSuccess = (services) => {
    return {
      type: servicesConstants.GET_SERVICES_SUCCESS,
      payload: services
    };
};
  
const getServicesFailure = () => {
    return {
      type: servicesConstants.GET_SERVICES_FAILURE
    };
};

export const getServices = () => dispatch => {
  dispatch(getServicesRequest());
    let services = [];
    try {
        servicesCollection.onSnapshot(snapshot => {
            snapshot.forEach(doc=>{
                services.push(doc.data());
            });
        });

        dispatch(getServicesSuccess(services));
    } catch (error) {
        console.log(error)
        dispatch(getServicesFailure());
    }
}


const createServiceRequest = () => {
    return {
      type: servicesConstants.CREATE_SERVICE_REQUEST
    };
};
  
const createServiceSuccess = (services) => {
    return {
      type: servicesConstants.CREATE_SERVICE_SUCCESS,
      payload: services
    };
};
  
const createServicesFailure = () => {
    return {
      type: servicesConstants.CREATE_SERVICE_FAILURE
    };
}; 


export const createService = (serviceDetails) => dispatch => { 
    dispatch(createServiceRequest());
    servicesCollection.add({...serviceDetails, createdAt: new Date()})
        .then( () => {
          dispatch(createServiceSuccess());
        })
        .catch(err => {
            console.log(err);
            dispatch(createServicesFailure());
        });
};
