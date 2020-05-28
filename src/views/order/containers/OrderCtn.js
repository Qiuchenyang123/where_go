import Order from "../Order";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};

const OrderCtn = connect(mapStateToProps, mapDispatchToProps)(Order);
export default OrderCtn