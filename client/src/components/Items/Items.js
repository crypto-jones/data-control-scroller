import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';

class Items extends Component {
  state = {};

  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div>
        {this.props.items.map(item => {
          return <li>{item}</li>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsLists,
  };
};

export default connect(
  mapStateToProps,
  { getList }
)(Items);
