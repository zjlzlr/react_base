import * as React from 'react';
import { connect } from 'react-redux';

const Header = ({counter}: any) => {
    return (<React.Fragment>
        header
    </React.Fragment>)
}
// state:redux数据
function mapStateToProps(state:any) {
    console.log(state)
    return {}
}
export default connect(mapStateToProps)(Header);
