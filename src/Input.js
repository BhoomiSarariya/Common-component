import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        ...this.props.form
      },
      error: {
        ...this.props.error,
      }


    }
  }
  validateField = (name, value) => {
    switch (name) {
      case "email":
        console.log("hello")
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}$/g;
        const result = pattern.test(value);
        if (result === false) { this.setState({ error: { ...this.state.error, [name]: true } }) }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
        break;
      case "firstName": {
        const pattern = /^[a-zA-Z]{1,10}$/;
        const result = pattern.test(value);
        if (result === false) { this.setState({ error: { ...this.state.error, [name]: true } }); }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
      }
        break;
      case "lastName": {
        const pattern = /^[a-zA-Z]{1,10}$/;
        const result = pattern.test(value);
        if (result === false) { this.setState({ error: { ...this.state.error, [name]: true } }); }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
      }
        break;
      case "mobileNo": {
        const pattern = /^[0-9]{10}$/;
        const result = pattern.test(value);
        if (result === false) { this.setState({ error: { ...this.state.error, [name]: true } }); }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
      }
        break;
      case "password": {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        const result = pattern.test(value);
        if (result === false) { this.setState({ error: { ...this.state.error, [name]: true } }); }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
      }
        break;
      case "formRadios":
        if (this.state.form.formRadios === '') {
          this.setState({ error: { ...this.state.error, [name]: true } })
        }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
        break;
      case "formCheck":
        if (this.state.form.formCheck === '') {
          this.setState({ error: { ...this.state.error, [name]: true } });
        }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } });
        }
        break;
      case "formCheckHobby":
        const f = this.state.form.formCheckHobby;
        if (f.length !== 0) {
          this.setState({ error: { ...this.state.error, [name]: false } });
        }
        else {
          this.setState({ error: { ...this.state.error, [name]: true } });
        }
        break;
      case "dropDown":
        if (this.state.form.dropDown === '') {
          this.setState({ error: { ...this.state.error, [name]: true } });
        }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } });
        }
        break;
      default:
        console.log("default");
    }
  }
  render() {
    const { type, value, name, placeholder, title, label, id, onChange, isRequied } = this.props;
    const { error } = this.props
    if (type === 'radio') {
      Element = <>
        <Form.Check type={type}
          name={name}
          label={label}
          value={value}
          id={id}
          onChange={this.handleChange} /></>
    }
    else if (type === 'checkbox') {
      Element = <>
        <Form.Check type={type}
          name={name}
          label={label}
          value={value}
          id={id}
          onChange={this.handleChange} /></>
    }
    else if (type === 'dropDown') {
      Element = <>
        <Form.Control as="select" name="dropDown" onChange={this.handleChange}>
          <option name="dropDown" value="" label="select city" />
          <option name="dropDown" value="Rajkot" label="Rajkot" />
          <option name="dropDown" value="Ahemdabad" label="Ahemdabad" />
          <option name="dropDown" value="Surat" label="Surat" />
          <option name="dropDown" value="Vadodara" label="Vadodara" />
        </Form.Control>
      </>
    }
    else {
      Element = <>
        <Form.Control
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          onBlur={this.handleChange} /></>
    }
    return (
      <Form.Group >
        {title && <Form.Label> {title} {isRequied}</Form.Label>}
        {Element}
        {error[name] ? `${title} is requied.` : ''}
      </Form.Group>
    )
  }
}
Input.defaultProps = {
  type: 'text',
  label: '',
  title: '',
  isRequied: ''
};
Input.prototypes = {
  type: PropTypes.number,
  value: PropTypes.string
}
export default Input;