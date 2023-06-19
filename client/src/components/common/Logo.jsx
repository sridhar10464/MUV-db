import { Typography, useTheme } from '@mui/material';
import React from 'react';

const Logo = () => {
    const theme = useTheme();

    return (
        <Typography fontWeight="700" fontSize="1.7rem" >
            MUV<span style={{ color: theme.palette.primary.main }}>db</span>
        </Typography>
    );
};

export default Logo;