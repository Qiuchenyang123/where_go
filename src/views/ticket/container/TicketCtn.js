import {connect} from 'react-redux';
import Ticket from "../Ticket";

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
};
const TicketCtn = connect(mapStateToProps, mapDispatchToProps)(Ticket);
export default TicketCtn