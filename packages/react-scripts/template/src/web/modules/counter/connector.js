import { connect } from '@utilitywarehouse/william-redux';
import { KEY } from './reducers';

const mapStateToProps = state => ({
  // Immutable.js is being used as default
  counter: state.get(KEY),
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'COUNTER_ADD' }),
  sub: () => dispatch({ type: 'COUNTER_SUB' }),
});

export default connect(mapStateToProps, mapDispatchToProps);
