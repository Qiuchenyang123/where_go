import React, {useMemo, useRef} from 'react';
import './asset/css/ticket/HodometerLayer.scss'

function HodometerItem(props) {
     const {hodometerItem} = props;
     return (
         <li className="hodometerItem">
             <span className="stationTxt">{hodometerItem.station}</span>
             <span className="timeTxt">{hodometerItem.departTime}</span>
             <span className="stationTxt">{hodometerItem.stay}</span>
             <span className="timeTxt">{hodometerItem.arriveTime}</span>
         </li>
     )
}

function HodometerLayer(props) {
    const {
        hideTicketSchemaLayer,
        hodometerData,
        ifShow
    } = props;
    const layer = useRef();
    function hideLayer(e) {
        if (e.target === layer.current) {
            hideTicketSchemaLayer()
        }
        e.stopPropagation()
    }
    return (
        <div ref={layer} onClick={hideLayer} className={`hodometerListCtn ${ifShow ? '' : 'hidden'}`}>
            <ul className="hodometerList">
                <li className="hodometerTitle">
                    <span className="stationTxt">站点</span>
                    <span className="timeTxt">到达</span>
                    <span className="stayTxt">休息</span>
                    <span className="timeTxt">出发</span>
                </li>
                {hodometerData.map((item, index) =>
                    <HodometerItem hodometerItem={item} key={index}/>
                )}
            </ul>
        </div>
    )
}

export default HodometerLayer;