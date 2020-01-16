import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import { createEvent } from "../http/eventService";
// import CKEditor from "../../node_modules/ckeditor4-react";

export function NewEvent() {
  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();

  const handleCreateEvent = formData => {
    // formData.description = description;
    return createEvent(formData)
      .then(window.alert("Challenge created"))
      .then(history.push("/events"))

      .catch(error => {
        if (error.response.status === 409) {
          setError(
            "title",
            "conflict",
            "The title already exists. Please try again"
          );
        }
      });
  };
  return (
    <section id="create-event" class="auth">
      <form className="col-4" onSubmit={handleSubmit(handleCreateEvent)}>
        <h1>Add a Hackathon</h1>
        <fieldset>
          <i className="fa fa-upload fa-fw"></i>
          <input type="file" name="image" id="image" class="inputfile" />
          <label for="image">Choose a image</label>
        </fieldset>
        <fieldset>
          <i className="fa fa-upload fa-fw"></i>
          <input type="file" name="banner" id="banner" class="inputfile" />
          <label for="banner">Choose a banner (1500+500px recomended)</label>
        </fieldset>
        <fieldset class="name-event">
          <label htmlFor="title"> Hackathone title * :</label>
          <input
            ref={register({
              required: "The title is required"
            })}
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
          <label for="start_date">Start date * :</label>
          <input
            ref={register({
              required: "The Date is required"
            })}
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
            ref={register({
              required: "The email is required"
            })}
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
          <fieldset class="description">
            <label htmlFor="description">Description</label>
            {/* <CKEditor style={{ marginTop: "1rem" }} /> */}
          </fieldset>
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
