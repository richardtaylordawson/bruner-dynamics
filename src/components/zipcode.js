import React, { Component } from "react"
import styled from "@emotion/styled"

const ZipcodeInputGroup = styled.div`
  display: flex;
  width: 405px;
  margin: 0 auto 30px auto;
  font-size: 16px;
  height: 45px;

  input {
    flex: 1 1 auto;
  }

  #zip-input {
    border: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    color: black;
    font-size: 16px;
    width: 30%;
    padding: 10px 25px;

    &:focus {
      outline: none;
    }
  }

  #submit-zip {
    cursor: pointer;
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #009FE3;
    color: white;
    font-size: 16px;
    padding: 10px 25px;
  }
`

class Zipcode extends Component {
  componentDidMount() {
    document.getElementById("zip-input").addEventListener("keydown", e => {
      if((e.target.value.length >= 5 && (e.keyCode >= 48 && e.keyCode <= 57)) || e.keyCode === 110) {
        e.preventDefault()
      }
    })

    document.getElementById("zip-finder").addEventListener("submit", e => {
      e.preventDefault()

      this.validateZipInput(document.getElementById("zip-input").value)
        ? alert("Sorry, no internet for you.")
        : alert("Must fill out a valid zipcode.")
    })
  }

  validateZipInput(zipValue) { return zipValue.length === 5 }

  render () {
    return (
      <ZipcodeInputGroup>
        <form name="zip-finder" id="zip-finder">
          <input type="number" id="zip-input" placeholder="Enter Zip"/>
          <input type="submit" id="submit-zip" value={this.props.btnText}/>
        </form>
      </ZipcodeInputGroup>
    )
  }
}

export default Zipcode
