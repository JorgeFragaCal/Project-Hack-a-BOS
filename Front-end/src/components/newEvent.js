import React from "react";
export function Privacy() {
  return (
    <React.Fragment>
      <section id="create-event" class="auth">
        <form action="">
          <h2>Add a Hackathon</h2>
          <fieldset>
            <label for="logo-event">Select Image</label>
            <input type="file" name="logo-event" id="" />
          </fieldset>
          <fieldset class="name-event">
            <label for="name">Hackathon name:</label>
            <input type="text" name="name" id="name" />
          </fieldset>

          <fieldset>
            <label for="start">Start date:</label>
            <input type="date" name="start-event" id="start" />
          </fieldset>

          <fieldset>
            <label for="end">End date:</label>
            <input type="date" name="end-event" id="end" />
          </fieldset>

          <fieldset class="location-event">
            <label for="name">Location:</label>
            <input type="text" name="city" id="city" />
          </fieldset>

          <fieldset>
            <label for="name">Website:</label>
            <input type="text" name="city" id="city" />
          </fieldset>

          <fieldset>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </fieldset>
          <fieldset class="description">
            <label for="description">Description</label>
            <textarea name="description" id="" rows="10"></textarea>
          </fieldset>
          <button>Create</button>
        </form>
      </section>
    </React.Fragment>
  );
}
