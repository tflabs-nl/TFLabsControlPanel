import {Box, Typography, CircularProgress, useTheme} from '@mui/material';

const HalfCircleProgress = ({ value, size = 60, thickness = 3 }) => {

    const theme = useTheme();
    const center = size / 2;
    const radius = (size - thickness) / 2;
    const circumference = radius * Math.PI;
    const valueInCircumference = (value / 100) * circumference;

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: size,
                height: size / 2
            }}
        >
            <svg
                width={size}
                height={size / 2}
                viewBox={`0 0 ${size} ${size / 2}`}
            >
                {/* Background Path */}
                <path
                    d={`M ${thickness/2} ${size/2} A ${radius} ${radius} 0 0 1 ${size - thickness/2} ${size/2}`}
                    fill="none"
                    stroke={theme.palette.grey[200]}
                    strokeWidth={thickness}
                    strokeLinecap="round"
                />

                {/* Progress Path */}
                <path
                    d={`M ${thickness/2}, ${size/2} A ${radius} ${radius} 0 0 1 ${size - thickness/2} ${size/2}`}
                    fill="none"
                    strokeWidth={thickness}
                    strokeLinecap="inherit"
                    stroke={value >= 90 ? '#af0303' : (value >= 70 ? '#dc7b1e' : '#1A9957')}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={circumference - (value / 100 * circumference)}
                    // transformOrigin="center"
                    // transform={`rotate(-180 ${size - thickness/2/2} ${size/2/2}`}
                />
            </svg>

            {/* Percentage Text */}
            <Typography
                variant="caption"
                component="div"
                sx={{
                    position: 'absolute',
                    top: '65%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: `${size / 4}px`,
                    fontWeight: 'bold'
                }}
            >
                {`${Math.round(value)}%`}
            </Typography>
        </Box>
    );
};

export default HalfCircleProgress;