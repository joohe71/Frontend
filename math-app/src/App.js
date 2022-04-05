import MathProblem from './math/MathProblem'
import Header from './Header';
import styled from 'styled-components';

function App() {
  return (
    <Main>
      <Header />
      <Container>
        <MathProblem />
      </Container>
    </Main>
  );
}

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  max-width: 500px;
  width: 500px;

  max-height: 300px;
  height: 300px;
  border: 2px solid #ced4da;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;
