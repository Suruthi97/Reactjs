import React from "react";
import FormControl from "@mui/material/FormControl";

import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

import BoxContainer from "../../components/BoxForm";
import FormContainer from "../../components/Form";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CaveatDetails = ({ state, handleChange, copyToOutOfHours }) => {

  return (
    <React.Fragment>
      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="solicitorReferenceNumber">
            Solicitor's reference
          </label>
          <input
            className="ds_input"
            type="text"
            maxlength="15"
            id="solicitorReferenceNumber"
            name="solicitorReferenceNumber"
            onChange={(e) => handleChange(e)}
            value={state.solicitorReferenceNumber}
          />
        </FormContainer>
      </BoxContainer>
      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="contactDetails">
            Primary contact
          </label>
          <label htmlFor="subContactDetails">
            <span className="ds_contactDetails_sub_label">
              Please include name and contact number
            </span>
          </label>
          <input
            className="ds_input ds_input_with_helpertext"
            type="text"
            id="contactDetails"
            name="contactDetails"
            onChange={(e) => handleChange(e)}
            value={state.contactDetails}
          />
          
        </FormContainer>

        <ButtonUnstyled
          className="formButtonItemLeft"
          onClick={() => copyToOutOfHours()}
        >
          Copy to out-of-hours
        </ButtonUnstyled>
      </BoxContainer>
      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="alternativeContactDetails">
            Out-of-hours / alternative contact(s)
          </label>
          <label htmlFor="alternativeContactDetails">
            <span className="ds_checkbox_sub_label">
              Please include name(s) and contact number(s)
            </span>
          </label>
          <input
            className="ds_input ds_input_with_helpertext"
            type="text"
            id="alternativeContactDetails"
            name="alternativeContactDetails"
            onChange={(e) => handleChange(e)}
            value={state.alternativeContactDetails}
          />
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="submissionCourtName">
            Submission Court
          </label>
          <div className="ds_select-wrapper  ds_input--fluid-one-third">
            <select
              className="ds_select ds_select--large"
              id="submissionCourtName"
              name="submissionCourtName"
              value={state.submissionCourtName}
              label="submissionCourtName"
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Select Court</option>
              {state.submissionCourtList.map((court, index) => (
                <option key={index} value={court.name}>
                  {court.name}
                </option>
              ))}
            </select>
            {/* <span className="ds_select_arrow" aria-hidden="true"></span> */}
            <span className="ds_select_arrow">                        
              <KeyboardArrowDownIcon sx={{ fontSize: 42, marginLeft: '3px' }}/>
            </span>
          </div>
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        {state.submissionCourtName === "Court of Session" ? (
          <FormContainer>
            <h4 id="party-type" class="MultiFormLabel-root" style={{fontSize:"16px"}}>
              Covered action types 
            <div style={{display:"inline", fontWeight:"400"}}> (Court of Session)</div>
            </h4>
            <FormControl>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="interimInterdict"
                  id="interimInterdict"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesCos", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={state.coveredActionTypesCos.interimInterdict}
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="interimInterdict"
                >
                  Interim interdict
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="interimOrders"
                  id="interimOrders"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesCos", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={state.coveredActionTypesCos.interimOrders}
                />
                <label className="ds_checkbox__label" htmlFor="interimOrders">
                  Interim orders
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="interimOrdersOthers"
                  id="interimOrdersOthers"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesCos", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={state.coveredActionTypesCos.interimOrdersOthers}
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="interimOrdersOthers"
                >
                  Interim orders (other than section 1)
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="windingUpOfCompanies"
                  id="windingUpOfCompanies"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesCos", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={state.coveredActionTypesCos.windingUpOfCompanies}
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="windingUpOfCompanies"
                >
                  Winding up of companies
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="groupProceeding"
                  id="groupProceeding"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesCos", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={state.coveredActionTypesCos.groupProceeding}
                />
                <label className="ds_checkbox__label" htmlFor="groupProceeding">
                  Group proceeding
                </label>
              </div>
            </FormControl>
          </FormContainer>
        ) : null}
        {state.submissionCourtName !== "" &&
        state.submissionCourtName !== "Court of Session" ? (
          <FormContainer>
            <h4 id="party-type" class="MultiFormLabel-root" style={{fontSize:"16px"}}>
              Covered action types 
            <div style={{display:"inline", fontWeight:"400"}}> (Sheriff Court)</div>
            </h4>
            <FormControl>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="interimInterdictInAnOrdinaryCause"
                  id="interimInterdictInAnOrdinaryCause"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesSheriff", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={
                    state.coveredActionTypesSheriff
                      .interimInterdictInAnOrdinaryCause
                  }
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="interimInterdictInAnOrdinaryCause"
                >
                  Interim interdict in an Ordinary Cause
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="interimOrdersInAnOrdinaryCause"
                  id="interimOrdersInAnOrdinaryCause"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesSheriff", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={
                    state.coveredActionTypesSheriff
                      .interimOrdersInAnOrdinaryCause
                  }
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="interimOrdersInAnOrdinaryCause"
                >
                  Interim orders in an Ordinary Cause
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="interimOrdersInASummaryApplication"
                  id="interimOrdersInASummaryApplication"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesSheriff", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={
                    state.coveredActionTypesSheriff
                      .interimOrdersInASummaryApplication
                  }
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="interimOrdersInASummaryApplication"
                >
                  Interim orders in a Summary Application
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="orderForIntimationOfPetitionToWindup"
                  id="orderForIntimationOfPetitionToWindup"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesSheriff", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={
                    state.coveredActionTypesSheriff
                      .orderForIntimationOfPetitionToWindup
                  }
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="orderForIntimationOfPetitionToWindup"
                >
                  Order for intimation of petition to wind up
                </label>
              </div>
              <div className="ds_checkbox ds_checkbox--small">
                <input
                  className="ds_checkbox__input"
                  name="orderForAppointmentOfAnAdministrator"
                  id="orderForAppointmentOfAnAdministrator"
                  type="checkbox"
                  onChange={(e) =>
                    handleChange(e, "coveredActionTypesSheriff", true)
                  }
                  inputprops={{ "aria-label": "controlled" }}
                  checked={
                    state.coveredActionTypesSheriff
                      .orderForAppointmentOfAnAdministrator
                  }
                />
                <label
                  className="ds_checkbox__label"
                  htmlFor="orderForAppointmentOfAnAdministrator"
                >
                  Order for appointment of an administrator
                </label>
              </div>
            </FormControl>
          </FormContainer>
        ) : null}
      </BoxContainer>

      <Divider />
      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="creditAccountNumber">
            Credit account to charge
          </label>
          <div className="ds_select-wrapper  ds_input--fluid-one-third">
            <select
              className="ds_select ds_select--large"
              id="creditAccountNumber"
              name="creditAccountNumber"
              value={state.creditAccountNumber}
              label="creditAccountNumber"
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Select Credit Account</option>
              {state.creditAccountList.map((acc, index) => (
                <option key={index} value={acc.CreditAccountNumber}>
                  {acc.Name} - {acc.CreditAccountNumber}
                </option>
              ))}

            </select>
            <span className="ds_select_arrow">                        
              <KeyboardArrowDownIcon sx={{ fontSize: 42, marginLeft: '3px' }}/>
            </span>
          </div>
        </FormContainer>
      </BoxContainer>
    </React.Fragment>
  );
};

export default CaveatDetails;
