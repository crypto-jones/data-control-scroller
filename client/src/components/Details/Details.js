import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getDescription } from '../../actions';
import {
  DetailBox,
  DetailLabel,
  LabelWrapper,
  Content,
} from '../../styles/components';

class Details extends Component {
  componentDidMount() {
    this.props.getDescription();
  }

  handleClick = item => {
    const color = '#FFE793';
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
              <LabelWrapper>
                <DetailLabel>Key</DetailLabel>
                <Content>{detail.key}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Time Label</DetailLabel>
                <Content>{detail.timelabel} </Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Start Time</DetailLabel>
                <Content>{detail.startTime}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>End Time</DetailLabel>
                <Content>{detail.endTime}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Destination</DetailLabel>
                <Content>{detail.destination}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Run Instance Label</DetailLabel>
                <Content>{detail.runInstanceLabel}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Status</DetailLabel>
                <Content> {detail.status}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Data Size</DetailLabel>
                <Content>{detail.dataStats.dataSize}</Content>
              </LabelWrapper>
              <LabelWrapper>
                <DetailLabel>Rows</DetailLabel>
                <Content>{detail.dataStats.numRows}</Content>
              </LabelWrapper>
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
