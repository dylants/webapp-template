import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadSprockets, selectors } from './redux/sprockets';
import Sprockets from './Sprockets';

const { isLoading, sprockets } = selectors;

const mapStateToProps = createStructuredSelector({
  isLoading,
  sprockets,
});

const mapDispatchToProps = { loadSprockets };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sprockets);
