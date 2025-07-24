import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link as MuiLink // Alias Link to avoid conflict with react-router-dom Link if you use it later
} from '@mui/material';
import axios from 'axios'; // Import axios
import { useForm, type SubmitHandler } from 'react-hook-form';

// Define the shape of your form data
interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  // Make onSubmit an async function
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log("Form Data Submitted:", data);

    try {
      // Make the POST request to your backend
      const result = await axios.post('http://10.128.76.212:3000/api/auth/login', {
        username: data.username,
        password: data.password,
        rememberMe: data.rememberMe,
      });

      console.log("Login Successful:", result.data);
      // You can add further logic here, e.g., save tokens, redirect
    } catch (error: any) {
      console.error("Login Failed:", error.response ? error.response.data : error.message);
      // You can display an error message to the user here
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        py: 5,
        px: { xs: 2, sm: 5, md: 10, lg: 20 },
        bgcolor: 'white',
        fontFamily: '"Noto Serif", "Noto Sans", sans-serif',
        minHeight: '100vh',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 512,
          py: 5,
          flex: '1',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: '#171412',
            letterSpacing: '-0.015em',
            fontWeight: 'bold',
            lineHeight: 'tight',
            px: 2,
            textAlign: 'center',
            pb: 3,
            pt: 5,
          }}
        >
          Welcome Back
        </Typography>

        {/* Username Input */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 2, px: 2, py: 1.5, maxWidth: 480 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 160, flex: 1 }}>
            <Typography variant="body1" sx={{ color: '#171412', fontWeight: 'medium', lineHeight: 'normal', pb: 1 }}>
              Username
            </Typography>
            <TextField
              placeholder="Enter your username"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  height: 56,
                  padding: '15px',
                  color: '#171412',
                  '& fieldset': {
                    borderColor: '#e4dfdd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e4dfdd',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e4dfdd',
                  },
                },
                '& .MuiInputBase-input': {
                  padding: 0,
                  height: '100%',
                  boxSizing: 'border-box',
                  '&::placeholder': {
                    color: '#837167',
                    opacity: 1,
                  },
                },
              }}
              {...register('username', { required: 'Username is required' })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Box>
        </Box>

        {/* Password Input */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 2, px: 2, py: 1.5, maxWidth: 480 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 160, flex: 1 }}>
            <Typography variant="body1" sx={{ color: '#171412', fontWeight: 'medium', lineHeight: 'normal', pb: 1 }}>
              Password
            </Typography>
            <TextField
              placeholder="Enter your password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  height: 56,
                  padding: '15px',
                  color: '#171412',
                  '& fieldset': {
                    borderColor: '#e4dfdd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e4dfdd',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e4dfdd',
                  },
                },
                '& .MuiInputBase-input': {
                  padding: 0,
                  height: '100%',
                  boxSizing: 'border-box',
                  '&::placeholder': {
                    color: '#837167',
                    opacity: 1,
                  },
                },
              }}
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
        </Box>

        {/* Remember Me Checkbox */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            bgcolor: 'white',
            px: 2,
            minHeight: 56,
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1" sx={{ color: '#171412', fontWeight: 'normal', lineHeight: 'normal', flex: 1 }}>
            Remember Me
          </Typography>
          <Box sx={{ flexShrink: 0 }}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register('rememberMe')}
                  sx={{
                    color: '#eac2ad', // Unchecked color
                    '&.Mui-checked': {
                      color: '#eac2ad', // Checked color
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.25rem', // Corresponds to h-5 w-5 (20px)
                      border: '2px solid #e4dfdd', // Border color and width
                      borderRadius: '4px', // Rounded corners
                      backgroundColor: 'transparent',
                    },
                    '&.Mui-checked .MuiSvgIcon-root': {
                        backgroundColor: '#eac2ad',
                        borderColor: '#eac2ad',
                    },
                     '&:hover': {
                        backgroundColor: 'transparent', // Prevent default MUI hover background
                    },
                    '&.Mui-focusVisible': {
                        outline: 'none',
                        boxShadow: 'none',
                    },
                    '& .MuiTouchRipple-root': {
                        display: 'none',
                    },
                  }}
                />
              }
              label=""
              sx={{
                marginRight: 0,
                '& .MuiFormControlLabel-label': { display: 'none' },
              }}
            />
          </Box>
        </Box>

        {/* Login Button */}
        <Box sx={{ display: 'flex', px: 2, py: 1.5 }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              minWidth: 84,
              maxWidth: 480,
              height: 40,
              px: 4,
              borderRadius: 9999,
              flex: 1,
              bgcolor: '#eac2ad',
              color: '#171412',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              lineHeight: 'normal',
              letterSpacing: '0.015em',
              textTransform: 'none', // Prevent uppercase
              boxShadow: 'none', // Remove default MUI shadow
              '&:hover': {
                bgcolor: '#d4a991', // Slightly darker on hover
                boxShadow: 'none',
              },
            }}
          >
            Login
          </Button>
        </Box>

        {/* Forgot Password Link */}
        <Typography
          variant="body2"
          sx={{
            color: '#837167',
            fontWeight: 'normal',
            lineHeight: 'normal',
            pb: 3,
            pt: 1,
            px: 2,
            textAlign: 'center',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => console.log('Forgot Password clicked')}
        >
          Forgot Password?
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;