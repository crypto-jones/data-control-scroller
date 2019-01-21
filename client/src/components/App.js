import React, { Component, Fragment } from 'react';
import ItemsContainer from './Items/ItemsContainer';
import DetailsContainer from './Details/DetailsContainer';

class App extends Component {
  state = {
    bgColor: '',
    tabSelected: null,
  };

  changeSelectedTabs = (color, isSelected) => {
    this.setState({ bgColor: color, tabSelected: isSelected });
  };

  render() {
    const { bgColor, tabSelected } = this.state;
    return (
      <Fragment>
        <ItemsContainer
          bgColor={bgColor}
          tabSelected={tabSelected}
          changeSelectedTabs={this.changeSelectedTabs}
        />
        <DetailsContainer
          bgColor={bgColor}
          tabSelected={tabSelected}
          changeSelectedTabs={this.changeSelectedTabs}
        />
      </Fragment>
    );
  }
}

export default App;
