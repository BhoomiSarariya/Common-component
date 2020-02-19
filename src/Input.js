import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function Input(props) {
  const { title, isRequied, name, type, value, onChange,onBlur, error,confirmPasswordError } = props;

  if(name==='middleName'){
    return (<Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      <Form.Control
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error[name] ? <span className="error-msg">{`${title} is not valid.`}</span> : ''}
    </Form.Group> )
  }

  else if(name==='confirmPassword'){
    return (<Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      <Form.Control
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error[name] ? <span className="error-msg">{confirmPasswordError}</span>:''}
    </Form.Group> )
  }

  else {
    return (<Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      <Form.Control
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error[name] ? <span className="error-msg">{`${title} is requied.`}</span> : ''}
    </Form.Group> 
    )
  }
}

export class CheckBox extends React.Component {
  constructor() {
    super()
    this.Checkbox = [
      { value: "Singing", label: "Singing" },
      { value: "Dancing", label: "Dancing" },
      { value: "Travelling", label: "Travelling" },
      { value: "Reading", label: "Reading" },
    ]
  }
  render() {
    let { title, type, name, isRequied, onChange,onBlur, error } = this.props
    return <><Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      {this.Checkbox.map((item, index) => {
        return (<div key={index}>
          <Form.Check type={type}
            name={name}
            value={item.value}
            onChange={onChange}
            onBlur={onBlur}
            label={item.label}
            error={error} /></div >
        );
      })}
      {error[name] ? <span className="error-msg">{`${title} is requied.`}</span> : ''}
    </Form.Group>
    </>
  }
}

export class RadioButton extends React.Component {
  constructor() {
    super()
    this.gender = [
      { value: "female", label: "Female", name: "gender" },
      { value: "male", label: "Male", name: "gender" },
    ]
  }
  render() {
    let { title, type, isRequied,name,error,onChange,onBlur } = this.props
    return <><Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      {this.gender.map((item, index) => {
        return (<div key={index}>
          <Form.Check type={type}
            label={item.label}
            onChange={onChange}
            onBlur={onBlur}
            value={item.value}
            name={item.name} />
        </div>)
      })}
      {error[name] ? <span className="error-msg">{`${title} is requied.`}</span> : ''}
    </Form.Group>
    </>
  }
}

export class SelectOneCheckBox extends React.Component {
  constructor() {
    super()
    this.occupation = [
      { value: "Employee", label: "Employee", id: "formEmployee" },
      { value: "Student", label: "Student", id: "formStudent" },
    ]
  }
  render() {
    let { error, title, type, name, isRequied, onChange, form } = this.props
    return <> <Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      {this.occupation.map((item, index) => {
        return (<div key={index}>
          <Form.Check
            type={type}
            name={name}
            id={item.id}
            value={item.value}
            label={item.label}
            onChange={onChange}
            checked={form.formCheck === item.value}
          />
        </div>
        );
      })}
      {error[name] ? <span className="error-msg">{`${title} is requied.`}</span> : ''}
    </Form.Group>
    </>
  }
}

export class DropDown extends React.Component {
  constructor() {
    super();
    this.option = [
      { value: "Rajkot", label: "Rajkot" },
      { value: "Ahemdabad", label: "Ahemdabad" },
      { value: "Surendranagar", label: "Surendranagar" },
      { value: "Vadodara", label: "Vadodara" },
    ]
  }
  render() {
    let { title, type, name, onChange, isRequied, error } = this.props;
    return (<Form.Group>
      {title && <Form.Label>{title} {isRequied}</Form.Label>}
      <Form.Control as={type}
        name={name}
        onChange={onChange}>
        <option>Select City</option>
        {this.option.map((item, index) => {
          return (
            <option
              label={item.label}
              value={item.value} />
         )
          
        })
        }
      </Form.Control>
      {error[name] ? <span className="error-msg">{`${title} is requied.`}</span> : ''}
    </Form.Group>
    )
  }
}
CheckBox.defaultProps = {
  type: "checkbox"
}

SelectOneCheckBox.defaultProps = {
  type: "checkbox"
}
RadioButton.defaultProps = {
  type: "radio"
}

Input.defaultProps = {
  type: "text",
  style: {
    margin: "10px",
  },
  isRequired: false,
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string
}
// class Input extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {
//         ...this.props.form
//       },
//       error: {
//         ...this.props.error,
//       }
//     }
//   }
//   render() {
//     const { type, value, name, placeholder, title, label, id, onChange, isRequied } = this.props;
//     const { error } = this.props;
//     const Checkbox = [
//       {
//         name: 'Singing',
//         label: 'Singing',
//         value: 'Singing'
//       },
//       {
//         name: 'Dancing',
//         label: 'Dancing',
//         value: 'Dancing'
//       },
//       {
//         name: 'Travelling',
//         label: 'Travelling',
//         value: 'Travelling'
//       },
//       {
//         name: 'Reading',
//         label: 'Reading',
//         value: 'Reading'
//       }
//     ]
//     if (type === 'radio') {
//       Element = <>
//         <Form.Check type={type}
//           name={name}
//           label={label}
//           value={value}
//           id={id}
//           onChange={onChange} /></>
//     }
//     else if (type === 'checkbox') {
//       Element = <>
//         {Checkbox.map((item, index) => <Form.Check type={type} name={item.name} label={item.label} value={item.value} />)}
//       </>
//     }
//     else if (type === 'dropDown') {
//       Element = <>
//         <Form.Control as="select" value={value} name="dropDown" onChange={onChange}>
//           <option name="dropDown" value="" label="select city" />
//           <option name="dropDown" value="Rajkot" label="Rajkot" />
//           <option name="dropDown" value="Ahemdabad" label="Ahemdabad" />
//           <option name="dropDown" value="Surat" label="Surat" />
//           <option name="dropDown" value="Vadodara" label="Vadodara" />
//         </Form.Control>
//       </>
//     }
//     else {
//       Element = <>
//         <Form.Control
//           type={type}
//           name={name}
//           label={label}
//           placeholder={placeholder}
//           onBlur={onChange} /></>
//     }
//     return (<Form.Group >
//       {title && <Form.Label>{title} {isRequied}</Form.Label>}
//       {Element}
//       {error[name] ? <span className="error-msg">`${title} is requied.`</span> : ''}
//     </Form.Group>
//     )
//   }
// }
// Input.defaultProps = {
//   type: 'text',
//   label: '',
//   title: '',
//   isRequied: ''
// };
// Input.prototypes = {
//   type: PropTypes.number,
//   value: PropTypes.string
// }
// export default Input;