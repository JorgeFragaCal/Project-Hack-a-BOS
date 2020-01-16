import React, { useState, useEffect } from "react";
import { getUserOrganizateEvents, deleteEvent } from "../http/eventService";
import { useAuth } from "../shared/context/auth-context";
// import CKEditor from "../../node_modules/ckeditor4-react";
import { useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import { uploadEvent } from "../http/index";

export function SectionUserEvents() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(true);
  const [openedEventId, setOpenedEventId] = useState(null);
  const { register, errors, handleSubmit, formState } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();

  const updateEvent = formData => {
    const payload = {
      ...formData,
      eventId: openedEventId
    };
    return uploadEvent(payload)
      .then(window.alert("Account upload"))
      .then(history.push("/myprofile"));
  };

  useEffect(() => {
    getUserOrganizateEvents(user.userData.id).then(events => {
      setEvents(events);
    });
  }, [user.userData.id]);

  return (
    <React.Fragment>
      <section id="list-events-profile">
        <h2>Events Created</h2>
        {events
          .map(({ id, title, image }, i) => (
            <section className="event" key={i}>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    image === "null" ? "https://via.placeholder.com/300" : image
                  }`
                }}
              />
              <section id="event-medium-description">
                <h3>{title}</h3>
                <div id="buttons">
                  <button
                    className="button-edit-event"
                    onClick={e => {
                      setOpen(!open);
                      setOpenedEventId(id);
                    }}
                  >
                    <i className="fas fa-edit "></i>
                  </button>
                  <button
                    className="button-delete-event"
                    onClick={() => {
                      deleteEvent(id).then(() => {
                        setEvents(events.filter(e => e.id !== id));
                      });
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </section>
            </section>
          ))
          .slice(0, 4)}
      </section>
      <section id="create-event" class="auth">
        <form
          className={` ${open ? "uploadinfo" : "col-4"}`}
          onSubmit={handleSubmit(updateEvent)}
        >
          <fieldset>
            <i className="fa fa-upload fa-fw"></i>
            <input type="file" name="image" id="image" class="inputfile" />
            <label for="image">Choose a image</label>
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
            Update Event
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}
