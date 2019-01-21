import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';
import { ItemBox } from '../../styles/components';
import { scroller } from 'react-scroll';

class Items extends Component {
  constructor(handleTabChange) {
    super(handleTabChange);
    this.state = {
      bgColor: '',
      tabSelected: null,
    };
  }

  componentDidMount() {
    this.props.getList();
  }

  handleClick = (i, item) => {
    this.setState({
      bgColor: 'blue',
      tabSelected: i,
    });

    scroller.scrollTo(item, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        {items.map((item, i) => {
          return (
            <ItemBox
              key={i}
              onClick={() => this.handleClick(i, item)}
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
