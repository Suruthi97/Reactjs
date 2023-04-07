import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useNavigate, useLocation} from 'react-router-dom';
import serviceCall from '../../store/serviceCall';

class SimpleContainer2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem('caveat-data')),
      caveatPreviewUrl: ""
    };
  }

  componentDidMount() { 
    var caveatData = localStorage.getItem("caveat-data");
      
      var xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.REACT_APP_CAVEAT_PREVIEW_URL, true);
        xhr.responseType = 'arraybuffer';
        xhr.setRequestHeader("Content-Type",'application/json');
        xhr.setRequestHeader("Authorization",`Bearer ${localStorage.getItem('token')}`);
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key",'22ae1c5c4f1448d2b1fd14eb62981cc6');

        xhr.onload = function(e) {
          if (xhr.status === 200) {
              var blob = new Blob([xhr.response], {type:"application/pdf"});
              
              this.setState({
                caveatPreviewUrl: window.URL.createObjectURL(blob)
              });
          }
        }.bind(this);
      xhr.send(caveatData);
  }

  render() {
    const { navigation } = this.props;
    
    
    const rows = [{
      name: (this.state.userData.caveatApplicableType === 'person' 
        ? this.state.userData.caveatApplicablePerson.firstName + ' ' +  this.state.userData.caveatApplicablePerson.lastName
        : this.state.userData.caveatApplicableCompany.name),
      courtName: this.state.userData.courtName,
      fee: '£46'
    }]

    const submitClick = () => {
      var data = this.state.userData;
      if (data.courtname != "Court of Session") {
        data.courtName = data.courtName.replace(" Sheriff Court", "");
      }

      serviceCall.postApi(process.env.REACT_APP_CAVEAT_POST_URL, data)
        .then(result => {
          if (result && result.status === 200) {
            localStorage.setItem('caveat-data', JSON.stringify(result.data));
          } else {
            console.log('error');
          }
        }).catch(e => {
          console.log(e);
        });
      navigation('/success');
    }
    
    return (
      <React.Fragment>
      <CssBaseline />
      <Box className='container'>
            <Card>
                <CardContent className='cardContainer'>
                    <Box className='formContainer'
                        component="div"
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                              m: 1,
                            },
                          }}
                        >
                        <Typography  variant="h4" component="div">
                            Confirm caveat submission
                        </Typography>
                    </Box>     
                    <Box className='formContainer'
                        component="div"
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                              m: 1,
                            },
                          }}
                        >
                        <Typography variant="p" component="div">
                          There is a fee for uploading this caveat
                        </Typography>     
                    </Box>    
                    <Box className='formContainer'
                        component="div"
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                              m: 1,
                            },
                          }}
                        >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>To be lodged at</TableCell>
                                    <TableCell>Party name</TableCell>
                                    <TableCell align="right">Fee</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell component="th" scope="row">{row.courtName}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align="right">{row.fee}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box className='formContainer'
                        component="div"
                        sx={{
                          display: 'flex',
                          '& > :not(style)': {
                            m: 1,
                          },
                        }}
                        >
                      
                      <Box row>
                        <Typography variant="p" component="div">
                          We will charge your credit account for lodging this caveat
                        </Typography>
                      </Box>
                    </Box>
                    { this.state.caveatPreviewUrl !== "" &&
                      <Box className='pdfContainer'>
                        <iframe className='pdf' title='Caveat' src={this.state.caveatPreviewUrl+"#view=fit"}></iframe>
                      </Box>
                    }
                    <Box className='formContainer'
                        component="div"
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                              m: 1,
                            },
                          }}
                        >
                        <button className="ds_button ds_button--fixed" onClick={submitClick}>
                          Confirm
                        </button>
                    </Box> 
                </CardContent>
            </Card>
        </Box>
    </React.Fragment>
    )
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const location = useLocation();
  const navigation = useNavigate();
  return <SimpleContainer2 {...props} navigation={navigation}  location={location} />;
}
