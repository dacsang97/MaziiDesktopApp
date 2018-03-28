import * as React from 'react';
import styled from 'styled-components';
import { CircularProgress } from 'material-ui/Progress';

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loading;
