import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Button,
  TextField,
} from '@mui/material';
import Header from '~/components/header';
import Footer from '~/components/footer';

// Define the interface for your form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact Form Data Submitted:", data);
    alert(`Thank you for your message, ${data.name}! We will get back to you soon.`);
    // In a real application, you'd send this data to a backend API
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        backgroundColor: 'white',
        overflowX: 'hidden',
        fontFamily: '"Noto Serif", "Noto Sans", sans-serif', // Keeping original font family
      }}
    >
      <Box sx={{ display: 'flex', height: '100%', flexGrow: 1, flexDirection: 'column' }}>
        <Header />
        <Box sx={{ px: { xs: 2, md: 5, lg: 10, xl: 20 }, py: 5, display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 960, flexGrow: 1 }}>
            {/* Contact Section Header */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1.5, p: 2 }}>
              <Box sx={{ display: 'flex', minWidth: 288, flexDirection: 'column', gap: 1.5 }}>
                <Typography variant="h4" component="p" sx={{ color: '#171412', fontWeight: 'bold', lineHeight: 'tight', letterSpacing: '-0.015em' }}>
                  Contact Us
                </Typography>
                <Typography variant="body2" sx={{ color: '#837167', fontWeight: 'normal', lineHeight: 'normal' }}>
                  We're here to help. Reach out to us with any questions or inquiries.
                </Typography>
              </Box>
            </Box>

            {/* Form Section */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', maxWidth: 480, mx: 'auto', width: '100%', p: 2, gap: 2 }}>
              <TextField
                label="Name"
                placeholder="Your Name"
                variant="outlined"
                fullWidth
                // sx={{
                //   '& .MuiOutlinedInput-root': {
                //     borderRadius: '12px', // rounded-xl
                //     height: 56, // h-14
                //     backgroundColor: 'white',
                //     '& fieldset': { borderColor: '#e4dfdd' }, // border-[#e4dfdd]
                //     '&:hover fieldset': { borderColor: '#e4dfdd' },
                //     '&.Mui-focused fieldset': { borderColor: '#e4dfdd' },
                //   },
                //   '& .MuiInputBase-input': {
                //     p: '15px', // p-[15px]
                //     color: '#171412',
                //     fontWeight: 'normal',
                //     lineHeight: 'normal',
                //     '&::placeholder': { color: '#837167', opacity: 1 }, // placeholder:text-[#837167]
                //   },
                //   '& .MuiInputLabel-root': {
                //     color: '#171412',
                //     fontWeight: 'medium',
                //     fontSize: '1rem',
                //     transform: 'translate(14px, 16px) scale(1)', // Adjust label position
                //     '&.Mui-focused': { color: '#171412' },
                //     '&.MuiFormLabel-filled': { transform: 'translate(14px, -9px) scale(0.75)' }, // Adjust filled label
                //   },
                // }}
                {...register("name", { required: true })}
                error={!!errors.name}
                helperText={errors.name ? "Name is required" : ''}
              />
              <TextField
                label="Email"
                type="email"
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                // sx={{
                //   '& .MuiOutlinedInput-root': {
                //     borderRadius: '12px',
                //     height: 56,
                //     backgroundColor: 'white',
                //     '& fieldset': { borderColor: '#e4dfdd' },
                //     '&:hover fieldset': { borderColor: '#e4dfdd' },
                //     '&.Mui-focused fieldset': { borderColor: '#e4dfdd' },
                //   },
                //   '& .MuiInputBase-input': {
                //     p: '15px',
                //     color: '#171412',
                //     fontWeight: 'normal',
                //     lineHeight: 'normal',
                //     '&::placeholder': { color: '#837167', opacity: 1 },
                //   },
                //   '& .MuiInputLabel-root': {
                //     color: '#171412',
                //     fontWeight: 'medium',
                //     fontSize: '1rem',
                //     transform: 'translate(14px, 16px) scale(1)',
                //     '&.Mui-focused': { color: '#171412' },
                //     '&.MuiFormLabel-filled': { transform: 'translate(14px, -9px) scale(0.75)' },
                //   },
                // }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                error={!!errors.email}
                helperText={errors.email ? (errors.email.message || "Email is required") : ''}
              />
              <TextField
                label="Message"
                placeholder="Your Message"
                variant="outlined"
                multiline
                rows={4} // min-h-36 roughly translates to 4-5 rows depending on line-height
                fullWidth
                // sx={{
                //   '& .MuiOutlinedInput-root': {
                //     borderRadius: '12px',
                //     backgroundColor: 'white',
                //     '& fieldset': { borderColor: '#e4dfdd' },
                //     '&:hover fieldset': { borderColor: '#e4dfdd' },
                //     '&.Mui-focused fieldset': { borderColor: '#e4dfdd' },
                //   },
                //   '& .MuiInputBase-input': {
                //     p: '15px',
                //     color: '#171412',
                //     fontWeight: 'normal',
                //     lineHeight: 'normal',
                //     '&::placeholder': { color: '#837167', opacity: 1 },
                //   },
                //   '& .MuiInputLabel-root': {
                //     color: '#171412',
                //     fontWeight: 'medium',
                //     fontSize: '1rem',
                //     transform: 'translate(14px, 16px) scale(1)',
                //     '&.Mui-focused': { color: '#171412' },
                //     '&.MuiFormLabel-filled': { transform: 'translate(14px, -9px) scale(0.75)' },
                //   },
                // }}
                {...register("message", { required: true })}
                error={!!errors.message}
                helperText={errors.message ? "Message is required" : ''}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  minWidth: 84,
                  maxWidth: 480,
                  height: 40,
                  px: 2,
                  borderRadius: 9999, // full rounded
                  backgroundColor: '#eac2ad',
                  color: '#171412',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#d4a88c',
                    boxShadow: 'none',
                  },
                  alignSelf: 'flex-start', // justify-start
                }}
              >
                Submit
              </Button>
            </Box>

            {/* Contact Information Section */}
            <Typography variant="h6" sx={{ color: '#171412', fontWeight: 'bold', letterSpacing: '-0.015em', px: 2, pb: 1, pt: 2 }}>Our Contact Information</Typography>
            <Typography variant="body1" sx={{ color: '#171412', fontWeight: 'normal', lineHeight: 'normal', pb: 1.5, pt: 0.5, px: 2 }}>Phone: +1 (555) 123-4567</Typography>
            <Typography variant="body1" sx={{ color: '#171412', fontWeight: 'normal', lineHeight: 'normal', pb: 1.5, pt: 0.5, px: 2 }}>Address: 123 Main Street, Anytown, USA</Typography>
          </Box>
        </Box>
       <Footer />
      </Box>
    </Box>
  );
}
