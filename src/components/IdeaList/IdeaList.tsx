// import React from "react";
import styles from "./IdeaList.module.css"; 

const IdeaList = ({ ideas }: { ideas: string[] }) => (
  <div className={styles.ideaListContainer}> 
    {ideas.length === 0 ? (
      <p className={styles.noIdeasMessage}>No ideas yet!</p> 
    ) : (
      <ul>
        {ideas.map((idea, index) => (
          <li key={index} className={styles.ideaListItem}> 
            {idea}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default IdeaList;
