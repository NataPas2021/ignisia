import { useState } from 'react';
import IdeaInput from './components/IdeaInput/IdeaInput';
import IdeaList from './components/IdeaList/IdeaList';
import Header from './components/Header/Header';

const App = () => {
  const [ideas, setIdeas] = useState<string[]>([]);

  const handleAddIdea = (newIdea: string) => {
    setIdeas([...ideas, newIdea]);
  };

  return (
    <div>
      <Header />
      <IdeaInput onAddIdea={handleAddIdea} />
      <IdeaList ideas={ideas} />
    </div>
  );
};

export default App;

