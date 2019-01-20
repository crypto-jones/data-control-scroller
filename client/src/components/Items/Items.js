import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';
import { ItemBox } from '../../styles/components';

class Items extends Component {
  state = {
    bgColor: '',
    tabSelected: null,
  };

  handleClick = i => {
    this.setState({
      bgColor: 'blue',
      tabSelected: i,
    });
  };

  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { items } = this.props;
    return (
      <Fragment>
        {items.map((item, i) => {
          return (
            <ItemBox
              key={i}
              onClick={() => this.handleClick(i)}
              bgColor={'#fff'}
              style={
                this.state.tabSelected === i
                  ? { background: this.state.bgColor }
                  : { background: this.props.bgColor }
              }
            >
              {item}
            </ItemBox>
          );
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
