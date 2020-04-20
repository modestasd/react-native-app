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
    servicesCollection.get()
    .then(snapshot => {
        snapshot.forEach(doc=>{
            services.push({id: doc.id, ...doc.data()});
        });
        dispatch(getServicesSuccess(services));
    })
    .catch(err=> {
      console.log(err)
      dispatch(getServicesFailure());
    })
}
 

const createServiceRequest = () => {
    return {
      type: servicesConstants.CREATE_SERVICE_REQUEST
    };
};
  
const createServiceSuccess = () => {
    return {
      type: servicesConstants.CREATE_SERVICE_SUCCESS,
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
      .then(() => {
        dispatch(createServiceSuccess());
      })
      .catch(err => {
          console.log(err);
          dispatch(createServicesFailure());
      });
};

const updateServiceRequest = () => {
    return {
      type: servicesConstants.UPDATE_SERVICE_REQUEST
    };
};
  
const updateServiceSuccess = () => {
    return {
      type: servicesConstants.UPDATE_SERVICE_SUCCESS,
    };
};
  
const updateServiceFailure = () => {
    return {
      type: servicesConstants.UPDATE_SERVICE_FAILURE
    };
};

export const updateService = (serviceId, updatedService) => dispatch => {
    dispatch(updateServiceRequest());   
    servicesCollection.doc(serviceId).update({...updatedService})
    .then(() => {
      dispatch(updateServiceSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(updateServiceFailure());
    });
};



const deleteServiceRequest = () => {
    return {
      type: servicesConstants.DELETE_SERVICE_REQUEST
    };
};
  
const deleteServiceSuccess = () => {
    return {
      type: servicesConstants.DELETE_SERVICE_SUCCESS,
    };
};
  
const deleteServiceFailure = () => {
    return {
      type: servicesConstants.DELETE_SERVICE_FAILURE
    };
};

export const deleteService = (serviceId) => dispatch => {
    dispatch(deleteServiceRequest());
    servicesCollection.doc(serviceId).delete()
    .then(() => {
      dispatch(deleteServiceSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(deleteServiceFailure());
    });
};


