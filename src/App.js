import React from 'react';
import './App.css';
import Input, { RadioButton, DropDown, SelectOneCheckBox, CheckBox } from './Input';
import { Row, Col, Button, Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNo: '',
        formRadios: '',
        formCheck: '',
        formCheckHobby: [],
        dropDown: ''
      },
      error: {
        firstName: false,
        middleName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
        mobileNo: false,
        formRadios: false,
        formCheck: false,
        formCheckHobby: false,
        dropDown: false
      },
      confirmPasswordError: 'Password is not valid'
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    }, function () { this.validateField(name, value); }
    )
  }

  validateChecked = (e) => {
    const { formCheckHobby } = this.state.form;
    const { form } = this.state
    const { name, value, checked } = e.target;
    if (checked) {
      formCheckHobby.push(value)
    }
    else {
      let index = formCheckHobby.indexOf(value)
      formCheckHobby.splice(index, 1)
    }
    this.setState({ form: { ...form, formCheckHobby: formCheckHobby } }, function () {
      this.validateField(name, value);
    })
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
      case "middleName": {
        const pattern = /^[a-zA-Z]{1,10}$/;
        const result = pattern.test(value);
        if (result === false) { this.setState({ error: { ...this.state.error, [name]: true } }); }
        else {
          this.setState({ error: { ...this.state.error, [name]: false } })
        }
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
      case "confirmPassword": {
        const { password, confirmPassword } = this.state.form
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        const result = pattern.test(value);
        if (!result) {
          if (password === confirmPassword) {
            console.log("ans-true and result-false");
            this.setState({
              error: { ...this.state.error, [name]: true },
              confirmPasswordError: "Enter password valid"
            });
          }
          else {
            console.log("ans-false and result-false");
            this.setState({
              error: { ...this.state.error, [name]: true },
              confirmPasswordError: "Password and Confirm Password does not match"
            });
          }
        }
        else {
          if (password === confirmPassword) {
            console.log("ans-true and result-true");
            this.setState({
              error: { ...this.state.error, [name]: true },
              confirmPasswordError: ""
            })
          }
          else {
            console.log("ans-false and result-true");
            this.setState({
              error: { ...this.state.error, [name]: false },
              confirmPasswordError: 'Password and Confirm Password does not match'
            })
          }
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
  handleSubmit = (e) => {
    let formError = this.state.error;
    e.preventDefault()
    const { form } = this.state
    Object.keys(form).map(name => {
      if (form[name] === "" ||
        form[name].length === 0) {
        formError[name] = true
      }
      return 0;
    })
    this.setState({ error: formError });
  }

  render() {
    const isRequied = <><span className="error-msg">*</span></>
    return (
      <div className="container card">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Row>
            <Col><Input title='First name' onChange={this.handleChange} onBlur={this.handleChange} name='firstName' isRequied={isRequied} error={this.state.error} form={this.state.form} /></Col>
            <Col><Input title='Middle name' name='middleName' isRequied={isRequied} onChange={this.handleChange} onBlur={this.handleChange} error={this.state.error} form={this.state.form} /></Col>
            <Col><Input title='Last name' name='lastName' isRequied={isRequied} onChange={this.handleChange} onBlur={this.handleChange} error={this.state.error} form={this.state.form} /></Col>
          </Row>
          <Row>
            <Col><Input title='Email' name='email' isRequied={isRequied} error={this.state.error} onBlur={this.handleChange} onChange={this.handleChange} form={this.state.form} /></Col>
          </Row>
          <Row>
            <Col><Input title='Mobile No.' name='mobileNo' isRequied={isRequied} error={this.state.error} onBlur={this.handleChange} onChange={this.handleChange} form={this.state.form} /></Col>

          </Row>
          <Row>
            <Col><Input title='Password' type="password" name='password' isRequied={isRequied} error={this.state.error} onChange={this.handleChange} onBlur={this.handleChange} form={this.state.form} /></Col>
            <Col><Input title='Confirm Password' type="password" name='confirmPassword' isRequied={isRequied} error={this.state.error} onChange={this.handleChange} onBlur={this.handleChange} form={this.state.form} confirmPasswordError={this.state.confirmPasswordError} /></Col>
          </Row>
          <Row>
            <Col >
              <RadioButton title='Gender' type='radio' name='formRadios' onChange={this.handleChange} onBlur={this.handleChange} isRequied={isRequied} error={this.state.error} />
            </Col>
          </Row>
          <Row>
            <Col>
              <SelectOneCheckBox title='Occupation' type='Checkbox' name='formCheck' onChange={this.handleChange} onBlur={this.handleChange} error={this.state.error} form={this.state.form} isRequied={isRequied} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CheckBox title='Hobby' type='Checkbox' name="formCheckHobby" isRequied={isRequied} error={this.state.error} onBlur={this.handleChange} onChange={this.validateChecked} form={this.state.form} />
            </Col>
          </Row>
          <Row>
            <Col md='4'>
              <DropDown title='City' type='select' name='dropDown' isRequied={isRequied} onChange={this.handleChange} onBlur={this.handleChange} error={this.state.error} />
            </Col>
          </Row>
          <Row>

            <Col><Button type="submit">Submit form</Button></Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default App;
