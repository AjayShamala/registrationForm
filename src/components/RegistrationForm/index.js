import {Component} from 'react'
import './index.css'
class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    secondNameError: false,
    isFormSubmitted: false,
  }
  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }
  validateSecondName = () => {
    const {secondName} = this.state
    return secondName !== ''
  }
  onBlurLastName = () => {
    const validateLasttInputName = this.validateSecondName()
    this.setState({secondNameError: !validateLasttInputName})
  }
  onBlurFirstName = () => {
    const validateFirstInputName = this.validateFirstName()
    this.setState({firstNameError: !validateFirstInputName})
  }
  onChangeFirstInput = event => {
    const {target} = event
    const {value} = target
    this.setState({firstName: value})
  }
  onChangeLastInput = event => {
    const {target} = event
    const {value} = target
    this.setState({secondName: value})
  }
  renderFirstName = () => {
    const {firstName, firstNameError} = this.state
    const registrationForm = firstNameError ? 'name-input error' : 'name-input'
    return (
      <div className="container">
        <label htmlFor="firstId" className="label-container">
          FIRST NAME
        </label>
        <input
          type="text"
          placeholder="First name"
          id="firstId"
          onChange={this.onChangeFirstInput}
          onBlur={this.onBlurFirstName}
          value={firstName}
          className={registrationForm}
        />
      </div>
    )
  }
  renderLastName = () => {
    const {secondName, secondNameError} = this.state
    const registrationForm = secondNameError ? 'name-input error' : 'name-input'
    return (
      <div className="container">
        <label htmlFor="lastId" className="label-container">
          LAST NAME
        </label>
        <input
          type="text"
          placeholder="Last name"
          id="lastId"
          onChange={this.onChangeLastInput}
          onBlur={this.onBlurLastName}
          value={secondName}
          className={registrationForm}
        />
      </div>
    )
  }
  onSubmitRegistration = event => {
    event.preventDefault()
    const validateFirstNames = this.validateFirstName()
    const validateSecondNames = this.validateSecondName()
    if (validateFirstNames && validateSecondNames) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !validateFirstNames,
        secondNameError: !validateSecondNames,
        isFormSubmitted: false,
      })
    }
  }
  renderRegistrationFormInput = () => {
    const {firstNameError, secondNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitRegistration}>
        {this.renderFirstName()}
        {firstNameError && <p className="error-message">Required</p>}
        {this.renderLastName()}
        {secondNameError && <p className="error-message">Required</p>}
        <button type="Submit" className="buttons-containerss">Submit</button>
      </form>
    )
  }
  onClickAnotherResponse = () => {
    this.setState(previous => ({
      isFormSubmitted: !previous.isFormSubmitted,
      firstName: '',
      secondName: '',
    }))
  }
  onRenderClick = () => (
    <div className="containerssss">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image-1"
      />
      <p className="par">Submitted Successfully</p>
      <button className="button" onClick={this.onClickAnotherResponse}>
        Submit Another Response
      </button>
    </div>
  )
  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        {isFormSubmitted
          ? this.onRenderClick()
          : this.renderRegistrationFormInput()}
      </div>
    )
  }
}
export default RegistrationForm
