import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import { createEvent } from "../http/eventService";
import { EVENT_VALIDATIONS } from "../shared/validations";
// import CKEditor from "../../node_modules/ckeditor4-react";

export function NewEvent() {
  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();
  const [hide, setHide] = useState(true);
  const handleCreateEvent = formData => {
    // formData.description = description;
    return createEvent(formData)
      .then(setHide(!hide))
      .then(setTimeout(a => history.push("/events"), 2000))
      .catch(error => {
        if (error.response.status === 409) {
          setError();
        }
      });
  };
  return (
    <section id="create-event" className="auth">
      <div className={` ${hide ? "hidden" : "alert"}`}>
        Event created
        <button id="close" onClick={e => setHide(!hide)}>
          {" "}
          X{" "}
        </button>
      </div>
      <form className="col-4" onSubmit={handleSubmit(handleCreateEvent)}>
        <h1>Add a Hackathon</h1>
        <fieldset>
          <i className="fa fa-upload fa-fw "></i>
          <input type="file" name="image" id="image" className="inputfile" />
          <label htmlFor="image">
            Choose a image <small>(300x300px)</small>
          </label>{" "}
          <i className="fa fa-upload fa-fw"></i>
          <input type="file" name="banner" id="banner" className="inputfile" />
          <label htmlFor="banner">
            Choose a banner <small>(1920x600px)</small>
          </label>
        </fieldset>

        <fieldset className="name-event">
          <label htmlFor="title"> Hackathone title * :</label>
          <input
            ref={register(EVENT_VALIDATIONS.title)}
            type="text"
            name="title"
            id="title"
            placeholder="Enter your title"
          />

          <span className="errorMessage">
            {errors.title && errors.title.message}
          </span>
        </fieldset>

        <fieldset>
          <label htmlFor="start_date">Start date * :</label>
          <input
            ref={register(EVENT_VALIDATIONS.start_date)}
            type="date"
            name="start_date"
            id="start_date"
          />
          <span className="errorMessage">
            {errors.start_date && errors.start_date.message}
          </span>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email * :</label>
          <input
            ref={register(EVENT_VALIDATIONS.email)}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <span className="errorMessage">
            {errors.email && errors.email.message}
          </span>
        </fieldset>
        <fieldset>
          <label htmlFor="web">Website:</label>
          <input
            ref={register}
            type="text"
            name="web"
            id="web"
            placeholder="Enter your website"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="address">Address:</label>
          <input
            ref={register}
            type="text"
            name="address"
            id="address"
            placeholder="Enter the address"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="city">City:</label>
          <input
            ref={register}
            type="city"
            name="city"
            id="city"
            placeholder="Enter the city"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="country">Country:</label>
          <input
            ref={register}
            type="country"
            name="country"
            id="country"
            placeholder="Enter the country"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="prize">Prize:</label>
          <input
            ref={register}
            type="text"
            name="prize"
            id="prize"
            placeholder="Enter the prize"
          />
        </fieldset>
        <fieldset className="description">
          <label htmlFor="description">Description</label>
          <input
            ref={register}
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter the description"
          ></input>
          {/* <CKEditor style={{ marginTop: "1rem" }} /> */}
        </fieldset>
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="button-blue"
        >
          Create
        </button>
      </form>
    </section>
  );
}
