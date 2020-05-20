import React, {memo} from 'react';
import './asset/css/index/Submit.scss'

const Submit = memo(function (props) {
    const {handleSubmit} = props;
    return (
        <div>
            <button onClick={handleSubmit} className={`submitBtn`}>确定</button>
        </div>
    );
});

export default Submit;