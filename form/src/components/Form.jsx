import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-2 mb-2">LOGIN</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="e-mail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="e-mail"
              className="form-control"
              onChange={this.props.emailValid}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={this.props.passwordValid}
              id="exampleInputPassword1"
            ></input>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" id="exampleCheck1"></input>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.props.submittedForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
