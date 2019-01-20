import React from 'react';
// import { connect } from 'react-redux';
// import { getList } from '../../actions';

const Items = props => {
  return (
    <ul>
      {props.items.map(item => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

// const mapStateToProps = state => {
//   return {
//     items: state.itemsList,
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getList }
// )(Items);

export default Items;
