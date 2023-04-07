import * as React from "react";
import "./lodge.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import moment from "moment";

import serviceCall from "../../store/serviceCall";
import CaveatDetails from "./caveatDetails";
import FormHeader from "./formHeader";
import PartyCaveator from "./partyCaveator";
import PartyCaveatorIsLodger from "./partyCaveatorIsLodger";
import PartyDetails from "./partyDetails";
import { useNavigate, useLocation } from "react-router-dom";
import { formInitialState } from "./initialState";
import Constants from "../../store/CONSTANTS/constant.english.json";
import BoxContainer from "../../components/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { InvalidTokenError } from "jwt-decode";

class SimpleContainer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = formInitialState;
  }
  expiryOffsetHours = parseInt(process.env.REACT_APP_EXPIRY_DATE_OFFSET_HOURS);
  tokenData = JSON.parse(localStorage.getItem("token-data"));
  formValue = {
    caveatApplicableType: "person",
    caveatorApplicableType: "person",
    referenceNumber: null,
    renewalId: null,
    creditAccountNumber: null,
    creditAccountObject: {},
    solicitorReferenceNumber: null,
    contactDetails: null,
    alternativeContactDetails: null,
    courtName: null,
    dateReceived: "",
    expiryDate: "",
    isApplicableToLodgingParty: false,
    isSealed: false,
    remarks: null,
    username: null,
    userId: null,
    caveatApplicableCompany: {},
    caveatApplicablePerson: {},
    caveatorCompany: {},
    caveatorPerson: {},
    coveredActionTypesCos: {},
    coveredActionTypesSheriff: {},
  };

  componentDidMount() {
    let location = this.props.location;
    serviceCall
      .getApi(process.env.REACT_APP_CAVEAT_SOLICITOR_CREDIT_ACCOUNT_API_URL)
      .then((result) => {
        if (result && result.status === 200) {
          if (result.data !== undefined) {
            this.setState({
              creditAccountList: result.data,
            });
          }
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });

    serviceCall
      .getApi(process.env.REACT_APP_COURTS_LIST_URL)
      .then((result) => {
        if (result && result.status === 200) {
          this.setState({
            submissionCourtList: result.data,
          });
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });

    serviceCall
      .getApi(process.env.REACT_APP_COUNTRIES_LIST_URL)
      .then((result) => {
        if (result && result.status === 200) {
          this.setState({
            countriesList: result.data,
          });
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    const updateIspartyLodge = (IsPartyLodger) => {
      this.setState((prevState) => ({
        caveat: {
          ...prevState.caveat,
          isPartyLodger: IsPartyLodger,
        },
      }));
      if (this.state.caveat.actingUnderLegalCapacityDetail !== "") {
        this.setState((prevState) => ({
          caveat: {
            ...prevState.caveat,
            actingUnderLegalCapacity: true,
            actingUnderLegalCapacityCaveat: true,
          },
        }));
      }

      if (
        this.state.caveator.actingUnderLegalCapacityDetail !== "" &&
        IsPartyLodger
      ) {
        this.setState((prevState) => ({
          caveator: {
            ...prevState.caveator,

            actingUnderLegalCapacity: true,

            actingUnderLegalCapacityCaveator: true,
          },
        }));
      }
    };

    if (location.pathname === "/court" || location.pathname === "/caveats/court") {
      this.formValue = JSON.parse(localStorage.getItem("caveat-data"));
      this.formValue.caveatApplicablePerson.actingUnderLegalCapacityCaveat =
        this.formValue.caveatApplicablePerson.actingUnderLegalCapacity;
        this.formValue.caveatorPerson.actingUnderLegalCapacityCaveator = this.formValue.caveatorPerson.actingUnderLegalCapacity;

      this.formValue.caveatorApplicableType = this.formValue
        .isApplicableToLodgingParty
        ? this.formValue.caveatApplicableType
        : this.formValue.caveatorApplicableType;

      var caveat =
        this.formValue.caveatApplicableType === "person"
          ? this.formValue.caveatApplicablePerson
          : this.formValue.caveatApplicableCompany;

      var caveator = this.formValue.isApplicableToLodgingParty
        ? caveat
        : this.formValue.caveatorApplicableType === "person"
        ? this.formValue.caveatorPerson
        : this.formValue.caveatorCompany;

      this.setState(
        {
          panel1state: false,
          panel2state: false,
          panel3state: true,
          formSubmitted: false,
          caveatApplicableType: this.formValue.caveatApplicableType,
          caveatorApplicableType: this.formValue.caveatorApplicableType,
          caveat: caveat,
          caveator: caveator,
          solicitorReferenceNumber: this.formValue.solicitorReferenceNumber,
          contactDetails: this.formValue.contactDetails,
          creditAccountNumber: this.formValue.creditAccountNumber,
          alternativeContactDetails: this.formValue.alternativeContactDetails,
          // courtName: this.formValue.courtName,
          renewalId: this.formValue.renewalId,
        },
        async () => {
          try {
            updateIspartyLodge(this.formValue.isApplicableToLodgingParty);
          } catch (e) {
            // handle error
          }
        }
      );
      if (!this.formValue.isApplicableToLodgingParty) {
        this.setState({
          caveator:
            this.formValue.caveatorApplicableType === "person"
              ? this.formValue.caveatorPerson
              : this.formValue.caveatorCompany,
        });
      }
    } else {
      localStorage.setItem("caveat-data", null);
    }
  }

  render() {
    const handleAccordiansState = () => {
      if (this.state.accordiansState === "Close all") {
        this.setState({
          accordiansState: "Open all",
          panel1state: false,
          panel2state: false,
          panel3state: false,
        });
      } else {
        this.setState({
          accordiansState: "Close all",
          panel1state: true,
          panel2state: true,
          panel3state: true,
        });
      }
    };

    const { navigation } = this.props;

    const validateForm = () => {
      if ( this.state.caveat.isPartyLodger ) {
        this.setState({ caveatorApplicableType: this.state.caveatApplicableType });
      }
      if (
        (this.state.caveatApplicableType === "person" &&
          (this.state.caveat.firstName === "" ||
            this.state.caveat.lastName === "")) ||
        (this.state.caveatApplicableType === "company" &&
          this.state.caveat.name === "") ||
        this.state.solicitorReferenceNumber === "" ||
        this.state.contactDetails === "" ||
        this.state.alternativeContactDetails === "" ||
        this.state.submissionCourtName === "" ||
        this.state.creditAccountNumber === "" ||
        this.state.caveat.addressLineOne === "" ||
        this.state.caveat.cityOrTown === "" ||
        (this.state.submissionCourtName === "Court of Session" &&
          !(
            this.state.coveredActionTypesCos.interimInterdict ||
            this.state.coveredActionTypesCos.interimOrders ||
            this.state.coveredActionTypesCos.interimOrdersOthers ||
            this.state.coveredActionTypesCos.windingUpOfCompanies ||
            this.state.coveredActionTypesCos.groupProceeding
          )) ||
        (this.state.submissionCourtName !== "Court of Session" &&
          this.state.submissionCourtName !== "" &&
          !(
            this.state.coveredActionTypesSheriff
              .interimInterdictInAnOrdinaryCause ||
            this.state.coveredActionTypesSheriff
              .interimOrdersInAnOrdinaryCause ||
            this.state.coveredActionTypesSheriff
              .interimOrdersInASummaryApplication ||
            this.state.coveredActionTypesSheriff
              .orderForIntimationOfPetitionToWindup ||
            this.state.coveredActionTypesSheriff
              .orderForAppointmentOfAnAdministrator
          ))
      ) {
        this.setState({ formInvalid: true });
        // return;
      } else if (
        !this.state.caveat.isPartyLodger &&
        ((this.state.caveatorApplicableType === "person" &&
          (this.state.caveator.firstName === "" ||
            this.state.caveator.lastName === "")) ||
          (this.state.caveatorApplicableType === "company" &&
            this.state.caveator.name === "") ||
          this.state.caveator.addressLineOne === "" ||
          this.state.caveator.cityOrTown === "")
      ) {
        this.setState({ formInvalid: true });
        // return;
      } else {
        this.setState({ formInvalid: false });
      }
      if (
        this.state.panel1state &&
        this.state.panel2state &&
        this.state.panel3state
      ) {
        this.setState({ accordiansState: "Close all" });
      } else {
        this.setState({ accordiansState: "Open all" });
      }
    };
    const submitClick = () => {
      this.setState({ formSubmitted: true });
      this.formValue.isApplicableToLodgingParty =
        this.state.caveat.isPartyLodger;
      this.formValue.caveatApplicableType = this.state.caveatApplicableType;
      this.formValue.caveatorApplicableType = this.state.caveatorApplicableType;

      if (this.state.submissionCourtName === "Court of Session") {
        this.formValue.coveredActionTypesCos = this.state.coveredActionTypesCos;
      } else {
        this.formValue.coveredActionTypesSheriff =
          this.state.coveredActionTypesSheriff;
      }
      if (this.state.caveatApplicableType === "person") {
        this.formValue.caveatApplicablePerson = this.state.caveat;
        this.formValue.caveatApplicableCompany = {};
        this.formValue.caveatApplicablePerson.actingUnderLegalCapacity =
          this.formValue.caveatApplicablePerson.actingUnderLegalCapacityCaveat;
      } else {
        this.formValue.caveatApplicableCompany = this.state.caveat;
        this.formValue.caveatApplicablePerson = {};
        this.formValue.caveatApplicableCompany.actingUnderLegalCapacity =
          this.formValue.caveatApplicableCompany.actingUnderLegalCapacityCaveat;
      }
      if (!this.state.caveat.isPartyLodger) {
        if (this.state.caveatorApplicableType === "person") {
          this.formValue.caveatorPerson = this.state.caveator;
          this.formValue.caveatorCompany = {};
          this.formValue.caveatorPerson.actingUnderLegalCapacity =
            this.formValue.caveatorPerson.actingUnderLegalCapacityCaveator;
        } else {
          this.formValue.caveatorCompany = this.state.caveator;
          this.formValue.caveatorPerson = {};
          this.formValue.caveatorPerson.actingUnderLegalCapacity =
            this.formValue.caveatorPerson.actingUnderLegalCapacityCaveator;
        }
      }
      if (this.state.caveat.isPartyLodger) {
        if (this.state.caveatorApplicableType === "person") {
          this.formValue.caveatorPerson = this.state.caveat;
          this.formValue.caveatorCompany = {};
          this.formValue.caveatorPerson.actingUnderLegalCapacity =
            this.formValue.caveatorPerson.actingUnderLegalCapacityCaveat;
        } else {
          this.formValue.caveatorCompany = this.state.caveat;
          this.formValue.caveatorPerson = {};
          this.formValue.caveatorPerson.actingUnderLegalCapacity =
            this.formValue.caveatorPerson.actingUnderLegalCapacityCaveat;
        }
      }

      this.formValue.solicitorReferenceNumber =
        this.state.solicitorReferenceNumber;
      this.formValue.contactDetails = this.state.contactDetails;
      this.formValue.alternativeContactDetails =
        this.state.alternativeContactDetails;
      this.formValue.courtName = this.state.submissionCourtName;
      this.formValue.renewalId = this.state.creditAccountNumber;
      this.formValue.creditAccountNumber = this.state.creditAccountNumber;
      this.formValue.creditAccountObject = this.state.creditAccountList.filter(
        (x) => x.CreditAccountNumber === +this.state.creditAccountNumber
      )[0];
      this.formValue.isSealed = false;
      let now = new Date();
      this.formValue.dateReceived = now.toISOString();
      let expiryDate = moment(now);
      expiryDate.add(this.expiryOffsetHours, "hours");
      this.formValue.expiryDate = expiryDate.toISOString();
      this.formValue.username = this.tokenData.name;
      this.formValue.userId = this.tokenData.emails[0];
      localStorage.setItem("caveat-data", JSON.stringify(this.formValue));
      navigation("/confirm");
    };

    const updateCreditAccObject = (name) => {
      if (
        name === "creditAccountNumber" &&
        this.state.creditAccountNumber !== ""
      ) {
        console.log(
          this.state.creditAccountNumber,
          "this.state.CreditAccountNumberSelected"
        );
        this.formValue.creditAccountObject =
          this.state.creditAccountList.filter(
            (x) => x.CreditAccountNumber === +this.state.creditAccountNumber
          )[0];
      }

      console.log(this.formValue.creditAccountObject, "creditAccountObject");
    };

    const handleChange = (event, objectType, isBooleanType = false) => {
      const { name, value, checked } = event.target;
      console.log(name, value);
      objectType !== undefined
        ? this.setState(
            (prevState) => ({
              [objectType]: {
                ...prevState[objectType],
                [name]: isBooleanType ? checked : value,
              },
            }),
            async () => {
              try {
                validateForm();
              } catch (e) {
                // handle error
              }
            }
          )
        : this.setState(
            {
              [name]: isBooleanType ? checked : value,
            },
            async () => {
              try {
                validateForm();
                updateCreditAccObject(name);
              } catch (e) {
                // handle error
              }
            }
          );
      if (name === "isPartyLodger") {
        // document.getElementById("panel-2").checked = !checked;
        this.setState({ panel2state: !checked });
      }
      if (
        (name === "actingUnderLegalCapacityCaveat" ||
          name === "actingUnderLegalCapacityCaveator") &&
        !checked
      ) {
        this.setState(
          (prevState) => ({
            [objectType]: {
              ...prevState[objectType],
              actingUnderLegalCapacityDetail: "",
            },
          }),
          async () => {
            try {
              validateForm();
            } catch (e) {
              // handle error
            }
          }
        );
      }
    };

    const copyToOutOfHours = () => {
      this.setState(
        { alternativeContactDetails: this.state.contactDetails },
        async () => {
          try {
            validateForm();
          } catch (e) {
            // handle error
          }
        }
      );
    };

    const handleCaveatPostcodeChange = (event) => {
      this.setState((prevState) => ({
        caveat: {
          // object that we want to update
          ...prevState.caveat, // keep all other key-value pairs
          postcode: event.target.value, // update the value of specific key
        },
      }));
      serviceCall
        .getApi(process.env.REACT_APP_ADDRESS_API_URL + event.target.value)
        .then((result) => {
          if (result && result.status === 200) {
            this.setState((prevState) => ({
              caveat: {
                ...prevState.caveat,
              },
              addressSearchResults: {
                ...prevState.addressSearchResults,
                data: result.data,
              },
            }));
          } else {
            console.log("error");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    const handleSelectAddress = (address) => {
      this.setState((prevState) => ({
        caveat: {
          ...prevState.caveat,
          addressLineOne: address.AddressLine1,
          addressLineTwo: address.AddressLine2,
          addressLineThree: address.AddressLine3,
          cityOrTown: address.CityOrTown,
          country: address.Country,
        },
        addressSearchResults: {
          data: [],
        },
      }));
    };
    const handleCaveatorSelectAddress = (address) => {
      this.setState((prevState) => ({
        caveator: {
          ...prevState.caveat,
          addressLineOne: address.AddressLine1,
          addressLineTwo: address.AddressLine2,
          addressLineThree: address.AddressLine3,
          cityOrTown: address.CityOrTown,
          country: address.Country,
        },
        addressSearchResults: {
          data: [],
        },
      }));
    };
    // panel 2 for Caveator
    const handleCaveatorPostcodeChange = (event) => {
      this.setState((prevState) => ({
        caveator: {
          ...prevState.caveator,
          postcode: event.target.value,
        },
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    return (
      <React.Fragment>
        <CssBaseline />
        <Box className="container" onSubmit={handleSubmit}>
          <Card>
            <CardContent className="cardContainer">
              <FormHeader />
              <Box
                className="formContainer"
                component="div"
                sx={{
                  display: "block",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <div className="ds_accordion" data-module="ds-accordion">
                  <button
                    data-accordion="accordion-open-all"
                    type="button"
                    className="ds_link  ds_accordion__open-all  js-open-all"
                    onClick={handleAccordiansState}
                  >
                    {this.state.accordiansState}
                  </button>

                  <div className="ds_accordion-item">
                    <input
                      type="checkbox"
                      className="visually-hidden  ds_accordion-item__control"
                      id="panel-1"
                      name="panel1state"
                      aria-labelledby="panel-1-heading"
                      onChange={(e) => handleChange(e, undefined, true)}
                      checked={this.state.panel1state}
                    />
                    <div className="ds_accordion-item__header">
                      <h3
                        id="panel-1-heading"
                        className="ds_accordion-item__title"
                      >
                        {Constants.accordian_header_panel_1}
                      </h3>
                      <span class="ds_accordion-item__indicator"></span>
                      <label
                        className="ds_accordion-item__label"
                        htmlFor="panel-1"
                      >
                        <span className="visually-hidden">
                          Show this section
                        </span>
                      </label>
                    </div>
                    <div className="ds_accordion-item__body">
                      <PartyDetails
                        state={this.state}
                        objectType="caveat"
                        handleChange={handleChange}
                        handleSelectAddress={handleSelectAddress}
                        handleCaveatPostcodeChange={handleCaveatPostcodeChange}
                      />
                    </div>
                  </div>
                  <div className="ds_accordion-item">
                    <input
                      type="checkbox"
                      className="visually-hidden  ds_accordion-item__control"
                      id="panel-2"
                      name="panel2state"
                      aria-labelledby="panel-2-heading"
                      onChange={(e) => handleChange(e, undefined, true)}
                      checked={this.state.panel2state}
                    />
                    <div className="ds_accordion-item__header">
                      <h3
                        id="panel-2-heading"
                        className="ds_accordion-item__title"
                      >
                        {Constants.accordian_header_panel_2}
                        <div style={{display: 'inline', fontWeight: 400}}>{Constants.accordian_header_panel_2_additional}</div>
                      </h3>
                      <span class="ds_accordion-item__indicator"></span>
                      <label
                        className="ds_accordion-item__label"
                        htmlFor="panel-2"
                      >
                        <span className="visually-hidden">
                          Show this section
                        </span>
                      </label>
                    </div>
                    <div className="ds_accordion-item__body">
                      {this.state.caveat.isPartyLodger ? (
                        <PartyCaveatorIsLodger
                          state={this.state}
                          objectType="caveat"
                          handleChange={handleChange}
                          handleSelectAddress={handleCaveatorSelectAddress}
                          handleCaveatorPostcodeChange={
                            handleCaveatorPostcodeChange
                          }
                        />
                      ) : (
                        <PartyCaveator
                          state={this.state}
                          objectType="caveator"
                          handleChange={handleChange}
                          handleSelectAddress={handleCaveatorSelectAddress}
                          handleCaveatorPostcodeChange={
                            handleCaveatorPostcodeChange
                          }
                        />
                      )}
                    </div>
                  </div>

                  <div className="ds_accordion-item">
                    <input
                      type="checkbox"
                      className="visually-hidden  ds_accordion-item__control"
                      id="panel-3"
                      name="panel3state"
                      aria-labelledby="panel-3-heading"
                      onChange={(e) => handleChange(e, undefined, true)}
                      checked={this.state.panel3state}
                    />
                    <div className="ds_accordion-item__header">
                      <h3
                        id="panel-3-heading"
                        className="ds_accordion-item__title"
                      >
                        {Constants.accordian_header_panel_3}
                      </h3>
                      <span class="ds_accordion-item__indicator"></span>
                      <label
                        className="ds_accordion-item__label"
                        htmlFor="panel-3"
                      >
                        <span className="visually-hidden">
                          Show this section
                        </span>
                      </label>
                    </div>
                    <div className="ds_accordion-item__body">
                      <CaveatDetails
                        state={this.state}
                        handleChange={handleChange}
                        copyToOutOfHours={copyToOutOfHours}
                      />
                    </div>
                  </div>
                </div>
              </Box>
              <BoxContainer>
                <button
                  disabled={this.state.formInvalid}
                  className="ds_button ds_button--fixed"
                  onClick={submitClick}
                >
                  Submit caveat{" "}
                </button>
                {/* {this.formValue.courtName === this.state.submissionCourtName ? (
                  <Typography
                    variant="p"
                    sx={{
                      padding: "10px",
                      paddingLeft: "10px",
                      paddingTop: "16px",
                      color: "red",
                    }}
                  >
                    Caveat already created for the same court.
                  </Typography>
                ) : null} */}
                <Typography
                  variant="p"
                  sx={{
                    padding: "10px",
                    paddingLeft: "50px",
                    paddingTop: "16px",
                  }}
                >
                  {" "}
                  You will have a chance to confirm your submission.
                </Typography>
              </BoxContainer>
            </CardContent>
          </Card>
        </Box>
      </React.Fragment>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <SimpleContainer1 {...props} navigation={navigation} location={location} />
  );
}
