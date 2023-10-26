import styled from 'styled-components';

import { Form, ImageList, Message } from './components';
import { useImages } from './hooks/useImages';

const AppWrapper = styled.div`
  max-width: 86rem;
  margin-inline: auto;
  padding: 2rem;
`;

function App() {
  const { status, error } = useImages();

  return (
    <AppWrapper>
      <header>
        <Form />
      </header>
      <main>
        <section>
          {status === 'loading' && <Message>Загрузка...</Message>}
          {status === 'ready' && <ImageList />}
          {error && <Message>{error}</Message>}
        </section>
      </main>
    </AppWrapper>
  );
}

export default App;
