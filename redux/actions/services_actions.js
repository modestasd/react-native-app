import {servicesConstants} from '../constants';
import {servicesCollection} from '../../helpers/firebase';
import {actionCreator} from '../../helpers/redux';

export const getServices = () => dispatch => {
    dispatch(actionCreator(servicesConstants.GET_SERVICES_REQUEST));
    let services = [];
    servicesCollection.get()
    .then(snapshot => {
        snapshot.forEach(doc=>{
            services.push({id: doc.id, ...doc.data()});
        });
        dispatch(actionCreator(servicesConstants.GET_SERVICES_SUCCESS, services));
    })
    .catch(err=> {
      console.log(err);
      dispatch(actionCreator(servicesConstants.GET_SERVICES_FAILURE));
    })
}

export const createService = (serviceDetails) => dispatch => { 
    dispatch(actionCreator(servicesConstants.CREATE_SERVICE_REQUEST));
    servicesCollection.add({...serviceDetails, createdAt: new Date()})
      .then(() => {
        dispatch(actionCreator(servicesConstants.CREATE_SERVICE_SUCCESS));
      })
      .catch(err => {
          console.log(err);
          dispatch(actionCreator(servicesConstants.CREATE_SERVICE_FAILURE));
      });
};


export const updateService = (serviceId, updatedService) => dispatch => {
    dispatch(actionCreator(servicesConstants.UPDATE_SERVICE_REQUEST));  
    servicesCollection.doc(serviceId).update({...updatedService})
    .then(() => {
      dispatch(actionCreator(servicesConstants.UPDATE_SERVICE_SUCCESS));  
    })
    .catch(err => {
      console.log(err);
      dispatch(actionCreator(servicesConstants.UPDATE_SERVICE_FAILURE));  
    });
};


export const deleteService = (serviceId) => dispatch => {
    dispatch(actionCreator(servicesConstants.DELETE_SERVICE_REQUEST));  
    servicesCollection.doc(serviceId).delete()
    .then(() => {
      dispatch(actionCreator(servicesConstants.DELETE_SERVICE_SUCCESS));  
    })
    .catch(err => {
      console.log(err);
      dispatch(actionCreator(servicesConstants.DELETE_SERVICE_FAILURE));  
    });
};

