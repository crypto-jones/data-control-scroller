import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getDescription } from '../../actions';
import { DetailBox } from '../../styles/components';
import { Element } from 'react-scroll';

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
            <Element name={detail.key}>
              <DetailBox key={detail.key}>
                {detail.key} {detail.timelabel} {detail.startTime}{' '}
                {detail.endTime} {detail.destination} {detail.runInstanceLabel}{' '}
                {detail.status} {detail.dataStats.dataSize}{' '}
                {detail.dataStats.numRows}
              </DetailBox>
            </Element>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.itemsDescription,
    scroll: state.scrollTo,
  };
};

export default connect(
  mapStateToProps,
  { getDescription }
)(Details);
