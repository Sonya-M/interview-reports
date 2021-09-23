import React, { useEffect, useReducer, useState } from "react";
import { formatDateForHtmlInput } from "../../utilities/helpers";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import styles from "./WizReportForm.module.css";

const inputReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val !== "" };
  }
  // if (action.type === "INPUT_BLUR") {
  // not used here, but included for possible extension
  // `state`: latest state snapshot, guaranteed to be up to date
  // return { value: state.value, isValid: state.value !== "" };
  // }
  // default:
  return { value: "", isValid: false };
};

export default function WizReportForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [markInvalid, setMarkInvalid] = useState(false); // mark invalid input
  //  only after first attempt to submit
  const [dateState, dispatchDate] = useReducer(inputReducer, {
    value: "",
    isValid: null, // !!! with null as init val, not treated as invalid
  });
  const [phaseState, dispatchPhase] = useReducer(inputReducer, {
    value: "",
    isValid: null,
  });
  const [statusState, dispatchStatus] = useReducer(inputReducer, {
    value: "",
    isValid: null,
  });
  const [noteState, dispatchNote] = useReducer(inputReducer, {
    value: "",
    isValid: null,
  });

  const handleDateChange = (e) => {
    dispatchDate({ type: "USER_INPUT", val: e.target.value });
  };
  const handlePhaseChange = (e) => {
    dispatchPhase({ type: "USER_INPUT", val: e.target.value });
  };
  const handleStatusChange = (e) => {
    dispatchStatus({ type: "USER_INPUT", val: e.target.value });
  };
  const handleNoteChange = (e) => {
    dispatchNote({ type: "USER_INPUT", val: e.target.value });
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      setFormIsValid(
        dateState.isValid &&
          phaseState.isValid &&
          statusState.isValid &&
          noteState.isValid
      );
    }, 100);

    return () => {
      clearTimeout(timerID);
    };
  }, [
    dateState.isValid,
    phaseState.isValid,
    statusState.isValid,
    noteState.isValid,
  ]); // within useEffect, can set state based on other states because those other
  // states in the dependency array are guaranteed to be up to date

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      setMarkInvalid(true);
      return;
    }
    props.onSubmit({
      interviewDate: dateState.value,
      phase: phaseState.value,
      status: statusState.value,
      note: noteState.value,
    });
  };

  const maxDate = formatDateForHtmlInput(new Date());
  // console.log("Returned date format: ", maxDate);

  return (
    <FormGroup className="m-3">
      <Row className="g-3">
        <Col lg>
          <Form.Control
            className={markInvalid && !dateState.isValid ? styles.invalid : " "}
            name="interviewDate"
            type="date"
            max={maxDate}
            value={dateState.value}
            onChange={handleDateChange}
            // style={markInvalid && !dateState.isValid ? invalidStyle : null}
          />
        </Col>
        <Col md>
          <Form.Select
            className={
              markInvalid && !phaseState.isValid ? styles.invalid : " "
            }
            name="phase"
            value={phaseState.value}
            onChange={handlePhaseChange}
          >
            <option value="">Select phase</option>
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Tech">Tech</option>
            <option value="Final">Final</option>
          </Form.Select>
        </Col>
        <Col md>
          <Form.Select
            className={
              markInvalid && !statusState.isValid ? styles.invalid : " "
            }
            name="status"
            value={statusState.value}
            onChange={handleStatusChange}
          >
            <option value="">Select status</option>
            <option value="Passed">Passed</option>
            <option value="Declined">Declined</option>
          </Form.Select>
        </Col>

        <Col sm={12}>
          <Form.Control
            as="textarea"
            className={markInvalid && !noteState.isValid ? styles.invalid : " "}
            placeholder="Notes"
            name="note"
            value={noteState.value}
            onChange={handleNoteChange}
            style={{ height: "150px" }}
          />
        </Col>
        <Col sm={12}>
          {markInvalid && !formIsValid ? (
            <p className={styles.invalidMsg}>Please fill out all form fields</p>
          ) : (
            <p> &nbsp; </p>
          )}
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <Button variant="dark" className="m-3" onClick={props.onBackBtnClick}>
          Back
        </Button>
        <Button
          variant="dark"
          className="m-3"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </FormGroup>
  );
}
