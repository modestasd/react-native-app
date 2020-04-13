import {servicesConstants} from '../constants';

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
  dispatch(getServicesSuccess(services));
}

let services = [
  {
    name: 'Padangos',
    price: '60-100 euru',
    duration: '1 diena',
    moreInfo: 'lorem ipsum dsssakd lakd;l ksa;ldkas kdas;l kdas;l kdas;lkdas kd;lsak d;laks d;lka;l kd;ldsa ka;ls kd;las kd;la kd;lsa kd;lask d;laks d;laks d;      laksd ;lask d;la',
    isActive: true,

  },
    {
    name: 'Dazymas',
    price: '60-100 euru',
    duration: '1 diena',
    moreInfo: 'lorem ipsum dsssakd lakd;l ksa;ldkas kdas;l kdas;l kdas;lkdas kd;lsak d;laks d;lka;l kd;ldsa ka;ls kd;las kd;la kd;lsa kd;lask d;laks d;laks d;      laksd ;lask d;la',
    isActive: true,

  },
    {
    name: 'Dar vienas',
    price: '60-100 euru',
    duration: '1 diena',
    moreInfo: 'lorem ipsum dsssakd lakd;l ksa;ldkas kdas;l kdas;l kdas;lkdas kd;lsak d;laks d;lka;l kd;ldsa ka;ls kd;las kd;la kd;lsa kd;lask d;laks d;laks d;      laksd ;lask d;la',
    isActive: true,

  },
    {
    name: 'Trecias',
    price: '60-100 euru',
    duration: '1 diena',
    moreInfo: 'lorem ipsum dsssakd lakd;l ksa;ldkas kdas;l kdas;l kdas;lkdas kd;lsak d;laks d;lka;l kd;ldsa ka;ls kd;las kd;la kd;lsa kd;lask d;laks d;laks d;      laksd ;lask d;la',
    isActive: false,
  },
    {
    name: 'Ketvirtas',
    price: '60-100 euru',
    duration: '1 diena',
    moreInfo: 'lorem ipsum dsssakd lakd;l ksa;ldkas kdas;l kdas;l kdas;lkdas kd;lsak d;laks d;lka;l kd;ldsa ka;ls kd;las kd;la kd;lsa kd;lask d;laks d;laks d;      laksd ;lask d;la',
    isActive: true,

  }
]