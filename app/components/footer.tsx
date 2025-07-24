import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer(){
    return(
         <Box component="footer" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', maxWidth: 960, flexGrow: 1, flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, px: 2, py: 5, textAlign: 'center' }}>            
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                <Link href="#" sx={{ color: '#887063' }}>
                  <InstagramIcon sx={{ fontSize: '24px' }} />
                </Link>
                <Link href="#" sx={{ color: '#887063' }}>
                  <FacebookIcon sx={{ fontSize: '24px' }} />
                </Link>
                <Link href="#" sx={{ color: '#887063' }}>
                  <TwitterIcon sx={{ fontSize: '24px' }} />
                </Link>
              </Box>
              <Typography variant="body1" sx={{ color: '#837167', fontWeight: 'normal', lineHeight: 'normal' }}>© 2023 Classic Rides. All rights reserved.</Typography>
            </Box>
          </Box>
        </Box>
    )
}
export default Footer;