import React from 'react';
import './App.css';
import Input from './Input';
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
        mobileNo: '',
        formRadios: '',
        formCheck: '',
        formCheckHobby: [],
        dropDown: ''
      },
      error: {
        firstName: false,
        middleName:false,
        lastName: false,
        email: false,
        password: false,
        mobileNo: false,
        formRadios: false,
        formCheck: false,
        formCheckHobby: false,
        dropDown: false
      }
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
  

  render() {
    const isRequied = <><span className="error-msg">*</span></>
    return (
      <div className="container card">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Row>
            <Col><Input title='First name' onChange={this.handleChange} name='firstName' isRequied={isRequied} error={this.state.error} form={this.state.form}/></Col>
            {/* <Col><Input title='Middle name' name='middleName' onChange={this.handleChange}/></Col> */}
            <Col><Input title='Last name' name='lastName' isRequied={isRequied}error={this.state.error} form={this.state.form} /></Col>
          </Row>
          <Row>
            <Col><Input title='Email' isRequied={isRequied} error={this.state.error} form={this.state.form}/></Col>
          </Row>
          <Row>
            <Col><Input title='Mobile No.' isRequied={isRequied} error={this.state.error} form={this.state.form} /></Col>
            <Col><Input title='Password' isRequied={isRequied} error={this.state.error} form={this.state.form}/></Col>
          </Row>
          <Row>
            <Col md='6'><Input title='Gender' type='radio' label='Female' value='Female' name="formRadios" id='formFemale' isRequied={isRequied} error={this.state.error} form={this.state.form}/>
              <Input type='radio' label='Male' value='Male' name="formRadios" id='formMale' error={this.state.error} form={this.state.form}/></Col>
            <Col md='6'><Input title='Occupation' type="checkbox" value="Student" id="Student" label="Student" name="formCheck"error={this.state.error} form={this.state.form} />
              <Input title='' type="checkbox" value="Employee" id="Employee" label="Employee" name="formCheck" error={this.state.error} form={this.state.form}/></Col>
          </Row>
          <Row>
            <Col>
              <Input title='Hobby' type="checkbox" value="Singing" id="Singing" label="Singing" name="formCheckHobby" isRequied={isRequied} error={this.state.error} form={this.state.form} />
              <Input type="checkbox" value="Dancing" id="Dancing" label="Dancing" name="formCheck" error={this.state.error} form={this.state.form} />
              <Input type="checkbox" value="Reading" id="Reading" label="Reading" name="formCheck"  error={this.state.error} form={this.state.form}/>
              <Input type="checkbox" value="Travelling" id="Travelling" label="Travelling" name="formCheck" error={this.state.error} form={this.state.form} />
            </Col>
          </Row>
          <Row>
            <Col md='4'><Input title='City' type='dropDown' isRequied={isRequied} error={this.state.error} form={this.state.form} />
            </Col>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    );
  }
}

export default App;
