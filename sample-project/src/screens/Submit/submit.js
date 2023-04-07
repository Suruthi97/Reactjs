import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import moment from 'moment';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {useNavigate, useLocation} from 'react-router-dom';
// import serviceCall from '../../store/serviceCall';

class SimpleContainer3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("caveat-data")),
      caveatReceiptPreviewUrl: ""
    };
  }

  componentDidMount() {
    var caveatData = localStorage.getItem("caveat-data");
      
      var xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.REACT_APP_CAVEAT_RECEIPT_URL, true);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader("Content-Type",'application/json');
        xhr.setRequestHeader("Authorization",`Bearer ${localStorage.getItem('token')}`);
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key",'22ae1c5c4f1448d2b1fd14eb62981cc6');
        
        xhr.onload = function(e) {
          if (xhr.status === 200) {
              var blob = new Blob([xhr.response], {type:"application/pdf"});
              
              this.setState({
                caveatReceiptPreviewUrl: window.URL.createObjectURL(blob)
              });
          }
        }.bind(this);
      xhr.send(caveatData);
  }

  render() {
    const { navigation } = this.props;

    const handleChangeNewCaveat = () => {      
      localStorage.setItem('caveat-data', null);
      navigation('/');
    }   
    const handleChangeNewCourt = () => {    
      navigation('/court');
    }
  
    const downloadReceipt = () => { 
      var caveatData = localStorage.getItem("caveat-data");
      
      var xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.REACT_APP_CAVEAT_RECEIPT_URL, true);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader("Content-Type",'application/json');
        xhr.setRequestHeader("Authorization",`Bearer ${localStorage.getItem('token')}`);
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key",'22ae1c5c4f1448d2b1fd14eb62981cc6');

        xhr.onload = function(e) {
          if (this.status === 200) {
              var blob = new Blob([this.response], {type:"application/pdf"});
              var link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = "caveat_submission_receipt.pdf";
              link.click();

              window.URL.revokeObjectURL(link.href);
          }
        };
      xhr.send(caveatData);
    }

    const printReceipt = () => {
      var caveatData = localStorage.getItem("caveat-data");
      
      var xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.REACT_APP_CAVEAT_RECEIPT_URL, true);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader("Content-Type",'application/json');
        xhr.setRequestHeader("Authorization",`Bearer ${localStorage.getItem('token')}`);
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key",'22ae1c5c4f1448d2b1fd14eb62981cc6');
        
        xhr.onload = function(e) {
          if (this.status === 200) {
              var blob=new Blob([this.response], {type:"application/pdf"});
              var tempUrl = window.URL.createObjectURL(blob);
              var doc = window.open(tempUrl);
              doc.print();

              window.URL.revokeObjectURL(tempUrl);
          }
        };
      xhr.send(caveatData);
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <Box className="container">
          <Card>
            <CardContent className="cardContainer">
              <Box
                className="formContainer"
                component="div"
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <Typography variant="h4" component="div">
                  Caveat submitted
                </Typography>
              </Box>
              <Box
                className="formContainer"
                component="div"
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <Typography variant="p" component="div">
                  Your caveat has been submitted and will be reviewed by&nbsp;
                  {this.state.userData?.courtName}.&nbsp;
                  <strong>
                     If you have submitted the caveat out of office hours, it will be reviewed the next business day. The caveat becomes active once it has been accepted by the court.
                  </strong>
                </Typography>
              </Box>
              <Box
                className="formContainer"
                component="div"
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <Typography variant="p" component="div">
                If your caveat is accepted, you will receive an email
                confirming that a new caveat has been lodged with the court
                and a pdf copy of the caveat will be attached to the email.
                </Typography>
              </Box>
              <Box
                className="formContainer"
                component="div"
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <Typography variant="p" component="div">
                  If your caveat is rejected, you will receive an email
                  containing the reason(s) why the caveat has not been accepted.
                </Typography>
              </Box>
              <Box
                className="formContainer"
                component="div"
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              ></Box>

              <Box
                className="innerContainer"
                component="div"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <Box row>
                  <Typography variant="h5" component="div">
                    <strong>Submission receipt</strong>
                  </Typography>
                </Box>
                <Box row>
                  <Typography variant="p" component="div">
                    This is to confirm that a caveat has been submitted to&nbsp; 
                    {this.state.userData?.courtName}
                    &nbsp;at {moment(this.state.userData?.dateReceived).format('HH:mm')} on {moment(this.state.userData?.dateReceived).format('D MMMM YYYY')} on behalf of&nbsp;
                      {(this.state.userData?.caveatApplicableType === 'person' 
                      ? this.state.userData?.caveatApplicablePerson.firstName + ' ' +  this.state.userData?.caveatApplicablePerson.lastName
                      : this.state.userData?.caveatApplicableCompany.name)}
                    .
                  </Typography>
                </Box>
              </Box>
              
              {/* { this.state.caveatReceiptPreviewUrl !== "" &&
                <Box className='pdfContainer'>
                    <iframe className='pdf' title='Caveat' src={this.state.caveatReceiptPreviewUrl+"#view=fit"}></iframe>
                </Box>
              } */}
              <Box
                className="innerContainer"
                component="div"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <button className="ds_button ds_button-green ds_button--max" onClick={printReceipt}>
                  Print receipt
                </button>
                <button className="ds_button ds_button-green ds_button--max" onClick={downloadReceipt}>
                  Download receipt
                </button>
              </Box>

              <Box
                className="innerContainer"
                component="div"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <Box row>
                  <Typography variant="h5" component="div">
                    <strong>Next steps</strong>
                  </Typography>
                </Box>
                <Box row>
                  <Typography variant="p" component="div">
                    We have retained the content of your caveat so you can&nbsp;
                    <button
                      type="button"
                      className="ds_link"
                      onClick={handleChangeNewCourt}
                    >
                      submit it to another court
                    </button>
                  </Typography>
                </Box>
                <Box row>
                  <Typography variant="p" component="div">
                    You can also&nbsp;
                    <button
                      type="button"
                      className="ds_link"
                      onClick={handleChangeNewCaveat}
                    >
                      create a new caveat for a different party
                    </button>
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </React.Fragment>
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <SimpleContainer3 {...props} navigation={navigation} location={location} />
  );
}
