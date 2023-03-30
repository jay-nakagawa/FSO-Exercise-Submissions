import Proptypes from "prop-types";

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <input value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
  handleUsernameChange: Proptypes.func.isRequired,
  handlePasswordChange: Proptypes.func.isRequired,
  username: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
};

export default LoginForm;
