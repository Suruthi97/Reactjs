import React from "react";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import BoxContainer from "../../components/BoxForm";
import FormContainer from "../../components/Form";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PartyCaveator = ({
  state,
  objectType,
  handleChange,
  handleSelectAddress,
  handleCaveatorPostcodeChange,
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
                checked={state.caveatorApplicableType === "person"}
                id="caveatorApplicableTypePerson"
                name="caveatorApplicableType"
                type="radio"
                value="person"
                onChange={(e) => handleChange(e)}
              />
              <label
                className="ds_radio__label"
                htmlFor="caveatorApplicableTypePerson"
              >
                Natural person
              </label>
            </div>

            <div className="ds_radio ds_radio--small">
              <input
                className="ds_radio__input"
                id="caveatorApplicableTypeCompany"
                checked={state.caveatorApplicableType === "company"}
                name="caveatorApplicableType"
                type="radio"
                value="company"
                onChange={(e) => handleChange(e)}
              />
              <label
                className="ds_radio__label"
                htmlFor="caveatorApplicableTypeCompany"
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
              state.caveatorApplicableType === "person" ? "firstName" : "name"
            }
          >
            {state.caveatorApplicableType === "person"
              ? "First name(s)"
              : "Business name(s)"}
          </label>
          <input
            className="ds_input"
            type="text"
            id={
              state.caveatorApplicableType === "person" ? "firstName" : "name"
            }
            name={
              state.caveatorApplicableType === "person" ? "firstName" : "name"
            }
            onChange={(e) => handleChange(e, objectType)}
            value={
              state.caveatorApplicableType === "person"
                ? state.caveator.firstName
                : state.caveator.name
            }
          />
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label
            className="ds_label"
            htmlFor={
              state.caveatorApplicableType === "person"
                ? "lastName"
                : "companyRegistrationNumber"
            }
          >
            {state.caveatorApplicableType === "person"
              ? "Last name"
              : "Company registration number (optional)"}
          </label>
          <input
            className="ds_input"
            type="text"
            id={
              state.caveatorApplicableType === "person"
                ? "lastName"
                : "companyRegistrationNumber"
            }
            name={
              state.caveatorApplicableType === "person"
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
              state.caveatorApplicableType === "person"
                ? state.caveator.lastName
                : state.caveator.companyRegistrationNumber
            }
          />
        </FormContainer>
      </BoxContainer>
      <BoxContainer>
        {state.caveatorApplicableType === "person" ? (
          <FormControl>
            <div className="ds_checkbox ds_checkbox--small">
              <input
                className="ds_checkbox__input"
                name="actingUnderLegalCapacityCaveator"
                id="actingUnderLegalCapacityCaveator"
                type="checkbox"
                onChange={(e) => handleChange(e, objectType, true)}
                checked={state.caveator.actingUnderLegalCapacityCaveator}
              />
              <label
                className="ds_checkbox__label"
                htmlFor="actingUnderLegalCapacityCaveator"
              >
                Acting in a representative capacity or trading as
              </label>
            </div>
          </FormControl>
        ) : null}
      </BoxContainer>
      <BoxContainer>
        {state.caveator.actingUnderLegalCapacityCaveator && state.caveatorApplicableType === 'person' ? (
          <FormContainer>
            <textarea
              className="ds_input ds_input_with_helpertext"
              rows="2"
              id="actingUnderLegalCapacityDetail"
              type="actingUnderLegalCapacityDetail"
              name="actingUnderLegalCapacityDetail"
              onChange={(e) => handleChange(e, objectType)}
              value={state.caveator.actingUnderLegalCapacityDetail}
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
            onChange={handleCaveatorPostcodeChange}
            value={state.caveator.postcode}
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
            value={state.caveator.addressLineOne}
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
            value={state.caveator.addressLineTwo}
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
            value={state.caveator.addressLineThree}
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
            value={state.caveator.cityOrTown}
          />
        </FormContainer>
      </BoxContainer>

      <BoxContainer>
        <FormContainer>
          <label className="ds_label" htmlFor="target-court">
            Country
          </label>
          <div className="ds_select-wrapper  ds_input--fluid-one-third">
            <select
              className="ds_select ds_select--large"
              id="target-court"
              name="country"
              value={state.caveator.country}
              label="target-court"
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
    </React.Fragment>
  );
};

export default PartyCaveator;
