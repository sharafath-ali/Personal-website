export const formValidation = (props) => {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.email);

  if (!email) {
    return email;
  }
  return null;
};
