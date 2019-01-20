import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';
import { ItemBox } from '../../styles/components';

class Items extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { items } = this.props;
    return (
      <Fragment>
        {items.map(item => {
          return <ItemBox key={item}>{item}</ItemBox>;
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
