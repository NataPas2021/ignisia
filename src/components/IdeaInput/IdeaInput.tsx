import  { useState } from "react";
import styles from "./IdeaInput.module.css"; 

const IdeaInput = ({ onAddIdea }: { onAddIdea: (idea: string) => void }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = () => {
    if (idea.trim()) {
      onAddIdea(idea);
      setIdea("");
    }
  };

  return (
    <div className={styles.ideaInputContainer}> 
      <textarea
        className={styles.textarea} 
        placeholder="Enter your idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className={styles.button} 
      >
        Add Idea
      </button>
    </div>
  );
};

export default IdeaInput;
