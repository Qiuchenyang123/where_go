import {connect} from 'react-redux';
import IndexPage from "../../IndexPage";
const mapStateToProps = function (state) {
    return state
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatch
    }
};

const IndexCtn = connect(mapStateToProps, mapDispatchToProps)(IndexPage);
export default IndexCtn;