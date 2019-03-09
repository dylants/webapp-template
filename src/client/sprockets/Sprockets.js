import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledDiv = styled.div({
  '& .sprocket': {
    margin: '4px 12px',
  },
});

export default class Sprockets extends Component {
  componentWillMount() {
    const { loadSprockets } = this.props;
    loadSprockets();
  }

  render() {
    const { isLoading, sprockets } = this.props;
    return (
      <StyledDiv>
        {isLoading && <div data-testid="loader">Loading...</div>}
        {!isLoading && (
          <React.Fragment>
            <h2>Sprockets</h2>
            <div data-testid="sprockets">
              {sprockets.map(sprocket => (
                <div
                  className="sprocket"
                  key={sprocket.name}
                  data-testid="sprocket"
                >
                  {sprocket.name}
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </StyledDiv>
    );
  }
}

Sprockets.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadSprockets: PropTypes.func.isRequired,
  sprockets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
