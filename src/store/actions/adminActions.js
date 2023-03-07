import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService,
    getAllUSers, deleteUsersService, editUserService,
    getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService
} from '../../services/userService';
import { toast } from "react-toastify"

//start doing end

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode == 0) {
                dispatch(fetchGenderSuccess(res.data)); //dispatch 1 action
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log(error);
        }
    }
}
// 1 action (ben phia reducer)
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_SUCCESS
})


export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode == 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (error) {
            dispatch(fetchPositionFailed());
            console.log(error);
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode == 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (error) {
            dispatch(fetchRoleFailed());
            console.log(error);
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode == 0) {
                toast.success('Create a new user succeed!')
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('Create a new user error!')
                dispatch(saveUserFailed());
            }
        } catch (error) {
            toast.error('Create a new user error!')
            dispatch(saveUserFailed());
            console.log(error);
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUsersService(userId);
            if (res && res.errCode == 0) {
                toast.success('Delete the user succeed!')
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('Delete the user error!')
                dispatch(deleteUserFailed());
            }
        } catch (error) {
            toast.error('Delete the user error!')
            dispatch(deleteUserFailed());
            console.log(error);
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})


export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode == 0) {
                toast.success('Update user succeed!')
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('Update user error!')
                dispatch(editUserFailed());
            }
        } catch (error) {
            toast.error('Update user error!')
            dispatch(editUserFailed());
            console.log(error);
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})


export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUSers("ALL");
            if (res && res.errCode == 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUsersFailed());
            }
        } catch (error) {
            dispatch(fetchAllUsersFailed());
            console.log(error);
        }
    }
}
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED
})


export const fetchTopDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctor: res.data
                })
            } else {
                dispatch(fetchTopDoctorsFailed())
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchTopDoctorsFailed())
        }
    }
}
// export const fetchTopDoctorsSuccess = (data) => ({
//     type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
//     users: data
// })
export const fetchTopDoctorsFailed = () => ({
    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
})


export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })
        }
    }
}


export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success('Save Infor Detail Doctor Succeed')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error('Save Infor Detail Doctor Failed')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
                })
            }
        } catch (error) {
            console.log(error);
            toast.error('Save Infor Detail Doctor Failed')
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
            })
        }
    }
}


export const getRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START
            })
            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE");
            if (resPrice && resPrice.errCode == 0
                && resPayment && resPayment.errCode == 0
                && resProvince && resProvince.errCode == 0
            ) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data
                }
                dispatch(fetchRequiredDoctorInforSuccess(data)); //dispatch 1 action
            } else {
                dispatch(fetchRequiredDoctorInforFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log(error);
        }
    }
}
// 1 action (ben phia reducer)
export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})
export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED
})