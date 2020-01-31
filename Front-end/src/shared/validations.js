export const LOGIN_VALIDATIONS = {
  email: {
    required: "The email is required",
    pattern: {
      message: "The email is not valid",
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },
  password: {
    required: "The password should be in place",
    minLength: {
      message: "Password length should be greater than 4",
      value: 4
    }
  }
};

export const REGISTER_VALIDATIONS = {
  username: {
    required: "The username is required"
  },
  email: {
    required: "The email is required",
    pattern: {
      message: "The email is not valid",
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },
  password: {
    required: "The password should be in place",
    minLength: {
      message: "Password length should be greater than 4",
      value: 4
    }
  }
};
export const PROFILE_VALIDATIONS = {
  username: {
    required: "The user name is required"
  },
  email: {
    required: "The email is required",
    pattern: {
      message: "The email is not valid",
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  }
};
export const EVENT_VALIDATIONS = {
  title: {
    required: "The title is required"
  },
  start_date: {
    required: "The date is required"
  },
  email: {
    required: "The email is required",
    pattern: {
      message: "The email is not valid",
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  }
};
