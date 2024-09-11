import React, { useState, useEffect } from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import { backend } from 'declarations/backend';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
});

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const result = await backend.getMessage();
        setMessage(result);
      } catch (error) {
        console.error('Error fetching message:', error);
        setMessage('Error loading message');
      }
    };

    fetchMessage();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            padding: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              color: 'secondary.light',
            },
          }}
        >
          {message}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;