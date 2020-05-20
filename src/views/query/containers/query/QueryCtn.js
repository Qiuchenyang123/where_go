import Query from "../../Query";
import {connect} from "react-redux";

const mapStateToProps = function (state) {
    return state
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch
    }
};

const QueryCtn = connect(mapStateToProps, mapDispatchToProps)(Query);

export default QueryCtn