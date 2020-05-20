import React, {useCallback, useMemo} from 'react';
import {bindActionCreators} from 'redux'
import './asset/css/index/IndexPage.scss'
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import DepartDate from './DepartDate';
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";

import {
    showCitySelector,
    exchangeFromTo,
    hideCitySelector,
    fetchCityList,
    setSelectedCity,
    showDateSelector,
    hideDateSelector,
    setDepartDate
} from "./actions/indexActions";

function IndexPage(props) {
    const {
        from,
        to,
        cityData,
        isCitySelectorVisible,
        departDate,
        isDateSelectorVisible,
        dispatch
    } = props;

    const onBack = useCallback(() => {
        return window.history.go(-1)
    }, []);
/*    const doShowCitySelector = useCallback((m) => {
        dispatch(showCitySelector(m))
    }, []);
    const doExchangeFromTo = useCallback(() => {
        dispatch(exchangeFromTo())
    }, []);*/

    const cbs = useMemo(() => {
        return bindActionCreators({
            showCitySelector,
            exchangeFromTo
        }, dispatch)
    }, []);

    const citySelectorCbs = useMemo(() => {
        return bindActionCreators({
            hideCitySelector,
            fetchCityList,
            onSelect: setSelectedCity
        }, dispatch)
    }, []);

    const departDateCbs = useMemo(() => {
        return bindActionCreators({
            showDateSelector,
            hideDateSelector,
            setDepartDate
        }, dispatch)
    }, []);

    return (
        <div className={`indexCtn`}>
            <div className="header_wrap">
                <Header onBack={onBack} title={`火车票`}/>
            </div>
            <form action={`/query.html`} className="form">
                <Journey
                    from={from}
                    to={to}
                    {...cbs}/>
                {/*            showCitySelector={doShowCitySelector}
            exchangeFromTo={doExchangeFromTo}*/}
                <DepartDate
                    departDate={departDate}
                    isDateSelectorVisible={isDateSelectorVisible}
                    {...departDateCbs}/>
                <HighSpeed/>
                <Submit />
                <input type="hidden" name="from" value={encodeURI(from)}/>
                <input type="hidden" name="to" value={encodeURI(to)}/>
                <input type="hidden" name="departDate" value={departDate}/>
            </form>
            <div className="citySelector_wrap">
                <CitySelector
                    show={isCitySelectorVisible}
                    cityData={cityData}
                    {...citySelectorCbs}/>
            </div>
        </div>
    )
}

export default IndexPage;