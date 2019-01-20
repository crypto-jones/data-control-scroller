import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getDescription } from '../../actions';
import { DetailBox } from '../../styles/components';

class Details extends Component {
  componentDidMount() {
    this.props.getDescription();
  }
  render() {
    const { details } = this.props;
    return (
      <Fragment>
        {details.map(detail => {
          return (
            <DetailBox key={detail.key}>
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
