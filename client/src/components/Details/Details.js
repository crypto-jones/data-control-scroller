import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getDescription } from '../../actions';
import { DetailBox } from '../../styles/components';

class Details extends Component {
  componentDidMount() {
    this.props.getDescription();
  }

  handleClick = item => {
    const color = 'blue';
    this.props.changeSelectedTabs(color, item);
  };

  render() {
    const { details } = this.props;
    return (
      <Fragment>
        {details.map(detail => {
          return (
            <DetailBox
              key={detail.key}
              className={detail.key}
              onClick={() => this.handleClick(detail.key)}
              style={
                this.props.tabSelected === detail.key
                  ? { background: this.props.bgColor }
                  : { background: this.props.defaultBgcolor }
              }
            >
              {detail.key} {detail.timelabel} {detail.startTime}{' '}
              {detail.endTime} {detail.destination} {detail.runInstanceLabel}{' '}
              {detail.status} {detail.dataStats.dataSize}{' '}
              {detail.dataStats.numRows}
            </DetailBox>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.itemsDescription,
  };
};

export default connect(
  mapStateToProps,
  { getDescription }
)(Details);
