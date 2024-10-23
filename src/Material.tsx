import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  margin: 'auto',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Material() {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'gray',
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '80%' } }}> {/* Responsive width */}
        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ xs: 10, md: 3 }}>
            <Item
              sx={{
                background: { xs: 'black', md: 'black' }, // Change background color based on screen size
              }}
            >
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography sx={{ color: 'white' }}>
                      Current balance
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{
                        color: 'white',
                        fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Responsive font sizes
                      }}
                    >
                      $4,836.0
                    </Typography>
                  </React.Fragment>
                }
              />
            </Item>
          </Grid>
          <Grid size={{ xs: 10, md: 3 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 10, md: 3 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 10, md: 5 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 10, md: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 10, md: 5 }}>
            <Item>
              <List sx={{ width: '100%', maxWidth: '360', bgcolor: 'background.paper' }}>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary="Brunch this weekend?" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary="Summer BBQ" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary="Oui Oui" />
                </ListItem>
              </List>
            </Item>
          </Grid>
          <Grid size={{ xs: 10, md: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
