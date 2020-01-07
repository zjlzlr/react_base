import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
export interface Props {
    dispatch?: any;
  }
class Page1 extends React.Component<Props> {
    componentDidMount() {
        console.log(1111,this.props.dispatch)
    }
    render() {
        return (
        <React.Fragment>
            menu
            <Link to="/page1">topage1</Link>
            <Link to="/page2">topage2</Link>
            
        </React.Fragment>
        );
    }
}

export default connect()(Page1);
