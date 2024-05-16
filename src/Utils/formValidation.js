export const formValidation = (props) => {
  const namePattern = /^[a-zA-Z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectPattern = /^[a-zA-Z0-9\s]+$/;

  const formValidationErrors = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  if (!emailPattern.test(props.email)) {
    formValidationErrors.email = "Invalid email address";
  }
  if (!namePattern.test(props.lastName)) {
    formValidationErrors.lastName = "Invalid last name";
  }
  if (!namePattern.test(props.firstName)) {
    formValidationErrors.firstName = "Invalid last name";
  }
  if (!subjectPattern.test(props.subject)) {
    formValidationErrors.subject = "Invalid subject";
  }
  if (props.message.trim() === "") {
    formValidationErrors.message = "Message cannot be empty";
  }

  const areAllErrorsEmpty = Object.values(formValidationErrors).every(
    (value) => value === ""
  );
  
  if (areAllErrorsEmpty) {
    return false;
  } else {
    return formValidationErrors;
  }
};
