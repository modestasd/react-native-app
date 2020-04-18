import {authConstants} from '../../constants';
import {loginRequest,loginSuccess,loginFailure,logoutSuccess } from '../';

describe('loginRequest', () => {
    it('has corect type', () => {
        const action = loginRequest();
    
        expect(action.type).toEqual(authConstants.LOGIN_REQUEST);
    });
});

describe('loginSuccess', () => {
    it('has corect type', () => {
        const action = loginSuccess();

        expect(action.type).toEqual(authConstants.LOGIN_SUCCESS);
    });

    it('has corect payload', () => {
        const user = {fullName: 'Opa', id: '123'}
        const action = loginSuccess(user);

        expect(action.payload).toEqual(user);
    });
});

describe('loginFailure', () => {
    it('has corect type', () => {
        const action = loginFailure();

        expect(action.type).toEqual(authConstants.LOGIN_FAILURE);
    });
});

describe('logoutSuccess', () => {
    it('has corect type', () => {
        const action = logoutSuccess();

        expect(action.type).toEqual(authConstants.LOGOUT_SUCCESS);
    });
});