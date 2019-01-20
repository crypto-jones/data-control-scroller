import React, { Component } from 'react';
import '../styles/App.css';
import Items from './Items/Items';
import { getList } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { items } = this.props;
    return (
      <div className="App">
        <Items items={items} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsList,
  };
};

export default connect(
  mapStateToProps,
  { getList }
)(App);
