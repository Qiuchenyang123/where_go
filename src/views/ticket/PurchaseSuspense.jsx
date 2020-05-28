import React, {useState} from 'react';
import './asset/css/ticket/PurchaseSuspense.scss'

function ChannelItem(props) {
    const {channelInfo} = props;
    const handlePurchase = function (e) {
        e.stopPropagation();
        window.open('/order.html', '_self');
    };
    return (
        <li className="channelCtn">
            <p className="title">{channelInfo.name}</p>
            <p className="desc">{channelInfo.desc}</p>
            <button onClick={handlePurchase} className="ticketBuyBtn">购买</button>
        </li>
    )
}
function CandidatesItem(props) {
    const {candidate} = props;
    const [show, setShow] = useState(false);
    const toggleChannelStatus = function () {
        setShow(!show)
    };
    return(
        <li onClick={toggleChannelStatus} className="ticketTypeItemCtn">
            <div className="ticketCandidateInfo">
                <span className="ticketType">{candidate.type}</span>
                <span className="ticketPrice">{candidate.priceMsg}</span>
                <button className="ticketBuyBtn fr">选择</button>
                <span className="ticketStatus fr">{candidate.ticketsLeft}</span>
            </div>
            <ul className={`candidateList ${show ? '' : 'hidden'}`}>
                {candidate.channels.map((channel, index) =>
                    <ChannelItem channelInfo={channel} key={index}/>
                )}
            </ul>
        </li>
    )
}
function PurchaseSuspense(props) {
    const {purchaseCandidates} = props;
    return (
        <div className="purchaseSuspenseCtn">
            <ul className="ticketTypeList">
                {purchaseCandidates.map((item, index) =>
                    <CandidatesItem candidate={item} key={index}/>
                )}
            </ul>
        </div>
    )
}
export default PurchaseSuspense;