import React from "react";
export function SignUp() {
  return (
    <React.Fragment>
      <section id="register" class="auth">
        <form action="">
          <h2>Sign up to see an event or contestand</h2>

          <fieldset>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </fieldset>

          <fieldset>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </fieldset>

          <fieldset>
            <label for="pass1">Password</label>
            <input type="password" name="pass1" id="pass1" />
          </fieldset>

          <fieldset>
            <label for="pass2">Repeat password</label>
            <input type="password" name="pass2" id="pass2" />
          </fieldset>

          <button>Next</button>

          <p>
            Have an account?
            <a href="http://localhost:3000//login.html">Log in</a>
          </p>
        </form>
      </section>
    </React.Fragment>
  );
}
