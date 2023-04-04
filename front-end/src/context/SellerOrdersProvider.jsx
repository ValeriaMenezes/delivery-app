import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

const loginContext = createContext();

class SellerOrdersProvider extends Component {
  constructor() {
    super();
    this.state = {
      helloworld: 0,
    };
  }

  render() {
    const { Provider } = loginContext;
    const { children } = this.props;
    return (
      <Provider
        value={ {
          ...this.state,
        } }
      >
        {children}
      </Provider>
    );
  }
}

SellerOrdersProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;

export default SellerOrdersProvider;
