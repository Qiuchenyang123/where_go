export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = 'SET_CURRENT_SELECTING_LEFT_CITY';
export const ACTION_SET_CITY_DATA = 'SET_CITY_DATA';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA';
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'SET_IS_DATE_SELECTOR_VISIBLE';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function setIsLoadingCityData(isLoadingCityData) {
    return {
        type: ACTION_SET_IS_LOADING_CITY_DATA,
        payload: isLoadingCityData
    }
}

export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}

export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const { highSpeed } = getState();
        dispatch({
            type: ACTION_SET_HIGH_SPEED,
            payload: !highSpeed
        })
    }
}

export function showCitySelector(currentSelectingLeftCity) {
    return (dispatch) => {
        dispatch({
            type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
            payload: true
        });
        dispatch({
            type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
            payload: currentSelectingLeftCity
        })
    }
}

export function hideCitySelector() {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: false
    }
}

export function setDepartDate(departDate) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate
    }
}

export function setSelectedCity(city) {
    return (dispatch, getState) => {
        const { currentSelectingLeftCity } = getState();
        if (currentSelectingLeftCity) {
            dispatch(setFrom(city))
        } else {
            dispatch(setTo(city))
        }
        dispatch(hideCitySelector())
    }
}

export function showDateSelector() {
    return {
        type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        payload: true
    }
}

export function hideDateSelector() {
    return {
        type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        payload: false
    }
}

export function exchangeFromTo() {
    return (dispatch, getState) => {
        const { from, to } = getState();
        dispatch(setFrom(to));
        dispatch(setTo(from))
    }
}

export function fetchCityList(pinyin = '', city = '') {
    return (dispatch, getState) => {
        const { isLoadingCityData } = getState();
        const cityCache = JSON.parse(localStorage.getItem('city_list_cache')) || [];
        if (cityCache.expire && cityCache.expire > Date.now()) {
            return dispatch(setCityData(cityCache.data));
        }
        if (isLoadingCityData) {
            return
        }
        dispatch(setIsLoadingCityData(true));
        fetch('http://localhost:23333/cityList?time='
            + new Date().getTime() + '&pinyin=' + pinyin + '&city=' + city)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('city_list_cache', JSON.stringify({
                    data: data.data,
                    expire: Date.now() + 5 * 60 * 1000
                }));
                dispatch(setCityData(data.data));
                dispatch(setIsLoadingCityData(false))
            })
            .catch(err => {
                console.log(err);
                dispatch(setIsLoadingCityData(false))
            })
    }
}