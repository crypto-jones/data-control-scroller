import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';

class Items extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { items } = this.props;
    return (
      <Fragment>
        {items.map(item => {
          return <ul key={item}>{item}</ul>;
        })}
      </Fragment>
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
)(Items);
