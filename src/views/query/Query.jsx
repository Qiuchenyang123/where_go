import React, {useEffect} from 'react';
import Header from "./components/Header";
import Nav from "./Nav";
import List from "./List";
import Bottom from "./Bottom";
import URI from 'urijs'

function Query(props) {
    console.log(8, props);
    const {
        from,
        to
    } = props;
    useEffect(() => {
        const params = URI.parseQuery(window.localtion.search);
        console.log(params);
    }, []);
    const handleBack = function () {
        window.history.go(-1)
    };
    return (
        <div className={`queryCtn`}>
            <div className="header_wrap">
                <Header title={from + '→' + to} onBack={handleBack}/>
            </div>
            <Nav/>
            <List/>
            <Bottom/>
        </div>
    );
}

export default Query;