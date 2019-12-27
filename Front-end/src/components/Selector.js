import React from "react";

export function Selector({ onSkillChange, skill }) {
  return (
    <section>
      <section className="radio">
        <label>
          <input
            type="radio"
            value="java"
            checked={skill === "java"}
            onChange={e => onSkillChange(e.target.value)}
          />
          <span>Java</span>
        </label>
      </section>
      <section className="radio">
        <label>
          <input
            type="radio"
            value="php"
            checked={skill === "php"}
            onChange={e => onSkillChange(e.target.value)}
          />
          <span>PHP</span>
        </label>
      </section>
      <section className="radio">
        <label>
          <input
            type="radio"
            value="JavaScript"
            checked={skill === "JavaScript"}
            onChange={e => onSkillChange(e.target.value)}
          />
          <span>JavaScript</span>
        </label>
      </section>
      <section className="radio">
        <label>
          <input
            type="radio"
            value="pyton"
            checked={skill === "pyton"}
            onChange={e => onSkillChange(e.target.value)}
          />
          <span>Pyton</span>
        </label>
      </section>
      <section className="radio">
        <label>
          <input
            type="radio"
            value="c#"
            checked={skill === "c#"}
            onChange={e => onSkillChange(e.target.value)}
          />
          <span>C#</span>
        </label>
      </section>
      <section className="radio">
        <label>
          <input
            type="radio"
            value="c++"
            checked={skill === "c++"}
            onChange={e => onSkillChange(e.target.value)}
          />
          <span>C++</span>
        </label>
      </section>
    </section>
  );
}
