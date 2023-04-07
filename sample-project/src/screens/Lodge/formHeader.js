import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Constants from '../../store/CONSTANTS/constant.english.json';
const FormHeader = () => {
    return <React.Fragment>
        <Box className='formContainer'
            component="div"
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    m: 1,
                },
            }}
        >
            <Typography variant="h4" component="div">
                {Constants.lodge_title}
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
                {Constants.lodge_description_1}
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
                {Constants.lodge_description_2}
            </Typography>
        </Box>
    </React.Fragment>
}

export default FormHeader