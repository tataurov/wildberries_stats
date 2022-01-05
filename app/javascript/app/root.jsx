import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Routes from 'routes/routes';
import React from "react";

class RootContainer extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    applicationState: state.applicationState
  };
};

export default connect(mapStateToProps, null, null, {pure: false})(RootContainer);
