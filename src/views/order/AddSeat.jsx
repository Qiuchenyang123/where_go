import React, {useState} from 'react';
import './asset/css/order/AddSeat.scss'

function AdultItem(props) {
    const {index} = props;
    return (
        <li className="adultItemCtn">
            <p className="title">成年人</p>
            <div className="infoCtn">
                <label className="infoLabel" htmlFor={`adultName${index}`}>姓名：</label>
                <input className="input" id={`adultName${index}`} type="text"/>
            </div>
            <div className="infoCtn">
                <label className="infoLabel" htmlFor={`IDCode${index}`}>身份证：</label>
                <input className="input" id={`IDCode${index}`} type="text"/>
            </div>
        </li>
    )
}
function ChildItem(props) {
    const {index} = props;
    return (
        <li className="childItemCtn">
            <p className="title">儿童</p>
            <div className="infoCtn">
                <label className="infoLabel" htmlFor={`adultName${index}`}>姓名：</label>
                <input className="input" id={`adultName${index}`} type="text"/>
            </div>
            <div className="infoCtn">
                <label className="infoLabel" htmlFor={`idCode${index}`}>年龄：</label>
                <input className="input" id={`childAge${index}`} type="text"/>
            </div>
            <p className="title">监护人</p>
            <div className="infoCtn">
                <label className="infoLabel" htmlFor={`adultName${index}`}>监护人姓名：</label>
                <input className="input" id={`guardianName${index}`} type="text"/>
            </div>
            <div className="infoCtn">
                <label className="infoLabel" htmlFor={`idCode${index}`}>监护人身份证：</label>
                <input className="input" id={`guardianIDCode${index}`} type="text"/>
            </div>
        </li>
    )
}
function PassengerList(props) {
    const {passengerList} = props;
    console.log(46, passengerList);
    return (
        <ul className="passengersCtn">
            {passengerList.map((passenger, index) => {
                if (passenger.type === 'adult') return <AdultItem index={index} key={index}/>
                if (passenger.type === 'child') return <ChildItem index={index} key={index}/>
            })}
        </ul>
    )
}

function AddSeat(props) {
    const {} = props;
    const [passengerList, setPassengerList] = useState([]);
    const addAdult = () => {
        const arr = passengerList.slice(0);
        arr.push({
            name: '',
            IDCode: '',
            type: 'adult',
            guardianName: '',
            guardianIDCode: ''
        })
        console.log(62, arr);
        setPassengerList(arr)
    };
    const addChild = () => {
        const arr = passengerList.slice(0);
        arr.push({
            name: '',
            IDCode: '',
            type: 'child',
            guardianName: '',
            guardianIDCode: ''
        });
        setPassengerList(arr)
    }
    return (
        <div className="addSeatCtn">
            <div className="btnGroup">
                <button onClick={addAdult} className="addSeatBtn">添加成人</button>
                <button onClick={addChild} className="addSeatBtn">添加儿童</button>
            </div>
            <PassengerList passengerList={passengerList}/>
        </div>
    )
}



export default AddSeat;