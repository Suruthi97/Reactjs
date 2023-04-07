import React from "react";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import BoxContainer from "../../components/BoxForm";
import FormContainer from "../../components/Form";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PartyDetails = ({
  handleChange,
  state,
  objectType,
  handleSelectAddress,
  handleCaveatPostcodeChange,
}) => {
  return (
    <React.Fragment>
      <BoxContainer>
        <FormContainer>
          <legend>Party details</legend>
          <div className="ds_field-group  ds_field-group--inline">
            <div className="ds_radio ds_radio--small">
              <input
                className="ds_radio__input"
                checked={state.caveatApplicableType === "person"}
                id="caveatApplicableTypePerson"
                name="caveatApplicableType"
                type="radio"
                value="person"
                onChange={(e) => handleChange(e)}
              />
              <label
                className="ds_radio__label"
                htmlFor="caveatApplicableTypePerson"
              >
                Natural person
              </label>
            </div>

            <div className="ds_radio ds_radio--small">
              <input
                className="ds_radio__input"
                id="caveatApplicableTypeCompany"
                checked={state.caveatApplicableType === "company"}
                name="caveatApplicableType"
                type="radio"
                value="company"
                onChange={(e) => handleChange(e)}
              />
              <label
                className="ds_radio__label"
                htmlFor="caveatApplicableTypeCompany"
              >
                Business
              </label>
            </div>
          </div>
        </FormContainer>
      </BoxContainer>
      <BoxContainer>
        <FormContainer>
          <label
            className="ds_label"
            htmlFor={
              state.caveatApplicableType === "person" ? "firstName" : "name"
            }
          >
            {state.caveatApplicableType === "person"
              ? "First name(s)"
              : "Business name(s)"}
          </label>
          <input
            className="ds_input"
            type="text"
            id={state.caveatApplicableType === "person" ? "firstName" : "name"}
            name={
              state.caveatApplicableType === "person" ? "firstName" : "name"
            }
            onChange={(e) => handleChange(e, objectType)}
            value={
              state.caveatApplicableType === "person"
                ? state.caveat.firstName
                : state.caveat.name
            }
          />
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label
            className="ds_label"
            htmlFor={
              state.caveatApplicableType === "person"
                ? "lastName"
                : "companyRegistrationNumber"
            }
          >
            {state.caveatApplicableType === "person"
              ? "Last name"
              : "Company registration number (optional)"}
          </label>
          <input
            className="ds_input"
            type="text"
            id={
              state.caveatApplicableType === "person"
                ? "lastName"
                : "companyRegistrationNumber"
            }
            name={
              state.caveatApplicableType === "person"
                ? "lastName"
                : "companyRegistrationNumber"
            }
            maxLength={
              state.caveatApplicableType === "person"
                ? "50"
                : "10"
            }
            onChange={(e) => handleChange(e, objectType)}
            value={
              state.caveatApplicableType === "person"
                ? state.caveat.lastName
                : state.caveat.companyRegistrationNumber
            }
          />
        </FormContainer>
      </BoxContainer>
      <BoxContainer>
        {state.caveatApplicableType === "person" ? (
          <FormControl>
            <div className="ds_checkbox ds_checkbox--small">
              <input
                className="ds_checkbox__input"
                name="actingUnderLegalCapacityCaveat"
                id="actingUnderLegalCapacityCaveat"
                type="checkbox"
                onChange={(e) => handleChange(e, objectType, true)}
                checked={state.caveat.actingUnderLegalCapacityCaveat}
              />
              <label
                className="ds_checkbox__label"
                htmlFor="actingUnderLegalCapacityCaveat"
              >
                Acting in a representative capacity or trading as
              </label>
            </div>
          </FormControl>
        ) : null}
      </BoxContainer>
      <BoxContainer>
        {state.caveat.actingUnderLegalCapacityCaveat && state.caveatApplicableType === 'person'  ? (
          <FormContainer>
            <textarea
              className="ds_input ds_input_with_helpertext"
              rows="2"
              id="actingUnderLegalCapacityDetail"
              type="actingUnderLegalCapacityDetail"
              name="actingUnderLegalCapacityDetail"
              onChange={(e) => handleChange(e, objectType)}
              value={state.caveat.actingUnderLegalCapacityDetail}
            ></textarea>
            <label htmlFor="actingUnderLegalCapacityDetail">
              <span className="ds_checkbox_sub_label">
                e.g. as an executor or permanent trustee
              </span>
            </label>
          </FormContainer>
        ) : null}
      </BoxContainer>

      <Divider />

      <BoxContainer>
        <FormContainer>
          <legend>Party address</legend>
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="postcode">
            Postcode (Optional)
          </label>
          <input
            className="ds_input"
            type="text"
            id="postcode"
            name="postcode"
            onChange={handleCaveatPostcodeChange}
            value={state.caveat.postcode}
          />
        </FormContainer>
      </BoxContainer>
      {state.addressSearchResults.data.map((address, index) => (
        <MenuItem key={index} onClick={() => handleSelectAddress(address)}>
          {address.AddressLine1}, {address.CityOrTown}, {address.Country}
        </MenuItem>
      ))}

      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="Address">
            Address
          </label>
          <input
            className="ds_input"
            type="text"
            id="addressLineOne"
            name="addressLineOne"
            onChange={(e) => handleChange(e, objectType)}
            value={state.caveat.addressLineOne}
          />
        </FormContainer>
      </BoxContainer>
      <BoxContainer>
        <FormContainer>
          <input
            className="ds_input"
            type="text"
            id="addressLineTwo"
            name="addressLineTwo"
            onChange={(e) => handleChange(e, objectType)}
            value={state.caveat.addressLineTwo}
          />
        </FormContainer>
      </BoxContainer>
      <BoxContainer>
        <FormContainer>
          <input
            className="ds_input"
            type="text"
            id="addressLineThree"
            name="addressLineThree"
            onChange={(e) => handleChange(e, objectType)}
            value={state.caveat.addressLineThree}
          />
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="cityOrTown">
            City or town
          </label>
          <input
            className="ds_input"
            type="text"
            id="cityOrTown"
            name="cityOrTown"
            onChange={(e) => handleChange(e, objectType)}
            value={state.caveat.cityOrTown}
          />
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="country">
            Country
          </label>
          <div className="ds_select-wrapper  ds_input--fluid-one-third">
            <select
              className="ds_select ds_select--large"
              id="country"
              name="country"
              value={state.caveat.country}
              label="country"
              onChange={(e) => handleChange(e, objectType)}
            >
              {state.countriesList.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <span className="ds_select_arrow">                        
              <KeyboardArrowDownIcon sx={{ fontSize: 42, marginLeft: '3px' }}/>
            </span>
          </div>
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormControl>
          <div className="ds_checkbox ds_checkbox--small">
            <input
              className="ds_checkbox__input"
              name="isPartyLodger"
              id="isPartyLodger"
              type="checkbox"
              onChange={(e) => handleChange(e, objectType, true)}
              checked={state.caveat.isPartyLodger}
            />
            <label className="ds_checkbox__label" htmlFor="isPartyLodger">
              This party is the lodger<br></br>
              <span className="ds_checkbox_sub_label">
                Unchecking this box will open a new dialogue
              </span>
            </label>
          </div>
        </FormControl>
      </BoxContainer>
    </React.Fragment>
  );
};

export default PartyDetails;
