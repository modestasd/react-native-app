import {userConstants} from '../../constants';
import {updateProfileRequest, updateProfileSuccess, updateProfileFailure } from '../';
///////////fix test after updating action creator

describe('updateProfileRequest', () => {
    it('has corect type', () => {
        const action = updateProfileRequest();
    
        expect(action.type).toEqual(userConstants.UPDATE_PROFILE_REQUEST);
    });
});

describe('updateProfileSuccess', () => {
    it('has corect type', () => {
        const action = updateProfileSuccess();

        expect(action.type).toEqual(userConstants.UPDATE_PROFILE_SUCCESS);
    });

    it('has corect payload', () => {
        const updatedUser = {fullName: 'Opa', id: '123'}
        const action = updateProfileSuccess(updatedUser);

        expect(action.payload).toEqual(updatedUser);
    });
});

describe('updateProfileFailure', () => {
    it('has corect type', () => {
        const action = updateProfileFailure();

        expect(action.type).toEqual(userConstants.UPDATE_PROFILE_FAILURE);
    });
});