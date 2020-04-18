import {authConstants, userConstants} from '../../constants';
import auth from '../auth_reducer';

describe('auth_reducer', () => {

    const initialState = {
        user: {},
        isLoggingIn: false,
        isLoggedIn: false,
        isError: false
    };

    it('handles actions of type LOGIN_REQUEST', () => {
        const action = {
            type: authConstants.LOGIN_REQUEST
        };
        
        const newState = auth(initialState, action);
        const expectedState = {
            user: {},
            isLoggedIn: false,
            isError: false,
            isLoggingIn: true
        };

        expect(newState).toEqual(expectedState);
    });

    it('handles actions of type LOGIN_SUCCESS', () => {
        const action = {
            type: authConstants.LOGIN_SUCCESS,
            payload: {fullName: 'Opa', id: '123'}
        };
        
        const newState = auth(initialState, action);
        const expectedState = {
            user: action.payload,
            isLoggedIn: true,
            isLoggingIn: false,
            isError: false,
        };

        expect(newState).toEqual(expectedState);
    });
    
    
    it('handles actions of type LOGIN_FAILURE', () => {
        const action = {
            type: authConstants.LOGIN_FAILURE
        };
        
        const newState = auth(initialState, action);
        const expectedState = {
            ...initialState,
            isError: true,
            isLoggingIn: false,
        };

        expect(newState).toEqual(expectedState);
    });
    
    it('handles actions of type LOGOUT_SUCCESS', () => {
        const action = {
            type: authConstants.LOGOUT_SUCCESS
        };
        
        const newState = auth(initialState, action);
        const expectedState = {
            ...initialState,
            user: {},
            isLoggedIn: false,
        };

        expect(newState).toEqual(expectedState);
    });

    it('handles actions of type UPDATE_PROFILE_SUCCESS', () => {
        const action = {
            type: userConstants.UPDATE_PROFILE_SUCCESS,
            payload: {fullName: 'Opa', id: '123'}
        };
        
        const newState = auth(initialState, action);
        const expectedState = {
            ...initialState,
            user: action.payload,
        };

        expect(newState).toEqual(expectedState);
    });

    it('handles actions of unknown type', () => {
        const newState = auth(initialState, {type: 'some not existing type'});

        expect(newState).toEqual(initialState);
    });
});