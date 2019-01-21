import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';
import { ItemBox } from '../../styles/components';

class Items extends Component {
  componentDidMount() {
    this.props.getList();
  }

  handleClick = item => {
    const color = '#FFE793';
    this.props.changeSelectedTabs(color, item);

    // Scrolls to detail on item click
    const topPos = document.getElementsByClassName(item)[0].offsetTop;
    document.getElementsByClassName('details-container')[0].scrollTop =
      topPos - 270;
  };

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        {items.map((item, i) => {
          return (
            <ItemBox
              key={i}
              onClick={() => this.handleClick(item)}
              defaultBgColor={'#E2EFFF'}
              style={
                this.props.tabSelected === item
                  ? { background: this.props.bgColor }
                  : { background: this.props.defaultBgcolor }
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
