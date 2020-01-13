import React from "react";

export function Selector({ onSkillChange, skill }) {
  return (
    <section id="section-radio">
      <section className="radio">
        <input
          id="1"
          type="radio"
          value="java"
          name="filter"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="1">
          <i class="fab fa-java php"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="2"
          name="filter"
          type="radio"
          value="php"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="2">
          <i class="fab fa-php"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="3"
          name="filter"
          type="radio"
          value="JavaScript"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="3">
          <i class="fab fa-js"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="4"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="4">
          <i class="fab fa-python"></i>
        </label>
      </section>

      <section className="radio">
        <input
          id="5"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="5">
          <i class="fab fa-cuttlefish"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="6"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="6">
          <i class="fab fa-node"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="7"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="7">
          <i class="fab fa-react"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="8"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="8">
          <i class="fab fa-angular"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="8"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="8">
          <i class="fab fa-html5"></i>
        </label>
      </section>
      <section className="radio">
        <input
          id="8"
          name="filter"
          type="radio"
          value="pyton"
          onChange={e => onSkillChange(e.target.value)}
        />
        <label htmlFor="8">
          <i class="fab fa-css3-alt"></i>
        </label>
      </section>
    </section>
  );
}
