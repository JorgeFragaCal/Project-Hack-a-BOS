import React, { useState } from "react";
import useForm from "react-hook-form";
import { createEvent } from "../http/eventService";

export function NewEvent() {
  const [valueInput, setValueInput] = useState("");

  const valueIOne = e => {
    setValueInput(e.target.value);
  };

  const publish = async ({
    title,
    start_date,
    address,
    city,
    country,
    description,
    image,
    email,
    prize,
    web
  }) => {
    try {
      await createEvent({
        title,
        start_date,
        address,
        city,
        country,
        description,
        image,
        email,
        prize,
        web
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur"
  });

  const handlePublicChallenges = formData => {
    return publish(formData)
      .catch(error => {
        if (error.response.status === 409) {
          setError(
            "title",
            "conflict",
            "The title already exists. Please try again"
          );
        }
      })
      .then(window.alert("Challenge created"))
      .then(window.location.reload());
  };
  return (
    <section id="create-event" class="auth">
      <form className="col-4" onSubmit={handleSubmit(handlePublicChallenges)}>
        <h1>Add a Hackathon</h1>
        <fieldset>
          <i className="fa fa-upload fa-fw"></i>
          <input type="file" name="image" id="image" class="inputfile" />
          <label for="image">Choose a image</label>
        </fieldset>
        <fieldset class="name-event">
          <label for="title">Hackathon name:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="text"
            name="title"
            id="title"
            placeholder="Enter your title"
          />
        </fieldset>

        <fieldset>
          <label for="start_date">Start date:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="date"
            name="start-date"
            id="start_date"
            placeholder="Enter your title"
          />
        </fieldset>

        <fieldset>
          <label for="address">Address:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="text"
            name="address"
            id="address"
            placeholder="Enter your title"
          />
        </fieldset>

        <fieldset>
          <label for="city">City:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="city"
            name="city"
            id="city"
            placeholder="Enter your title"
          />
        </fieldset>
        <fieldset>
          <label for="country">Country:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="country"
            name="country"
            id="country"
            placeholder="Enter your title"
          />
        </fieldset>
        <fieldset>
          <label for="ewb">Website:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="text"
            name="web"
            id="web"
            placeholder="Enter your title"
          />
        </fieldset>

        <fieldset>
          <label for="email">Email</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your title"
          />
        </fieldset>
        <fieldset class="description">
          <label for="description">Description</label>
          <textarea name="description" id="description" rows="10"></textarea>
        </fieldset>
        <fieldset>
          <label for="prize">Prize:</label>
          <input
            ref={register({
              required: "The title is required"
            })}
            type="text"
            name="prize"
            id="prize"
            placeholder="Enter your title"
          />
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
