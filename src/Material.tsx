import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Material() {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#fff',
        '& > .MuiBox-root > .MuiBox-root': {
          p: 1,
          borderRadius: 2,
          fontWeight: '700',
          fontSize: {
            xs: '0.75rem', // Extra-small devices
            sm: '0.875rem', // Small devices
            md: '1rem',     // Medium devices
            lg: '1.125rem', // Large devices
            xl: '1.25rem',  // Extra-large devices
          },
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '80%' },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',          // Single column on extra-small devices
            sm: 'repeat(2, 1fr)',  // Two columns on small devices
            md: 'repeat(3, 1fr)',  // Three columns on medium and up
          },
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: {
            xs: `
              "header"
              "pots"
              "budgets"
              "transactions"
              "recurring"
            `, // Single-column layout for phones
            // Two-column layout for small screens
            md: `
              "header header header"
              "pots pots budgets"
              "transactions transactions budgets"
              "transactions transactions recurring"
            `, // Original multi-column layout for medium screens and up
          },
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <Box sx={{ gridArea: 'header', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <Box
            sx={{
              textAlign: 'left',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',          // Single column on extra-small devices
                sm: 'repeat(3, 1fr)',  // Three columns on small devices
                md: 'repeat(3, 1fr)',  // Three columns on medium and up
              },
              gap: 2,
            }}
          >
            <Box sx={{ bgcolor: 'black', color: 'white', borderRadius: '10px', padding: '20px', boxShadow: 9 }}>
              <Typography variant="body1" sx={{ paddingBottom: '10px' }}>Current Balance</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>$4,836.00</Typography>
            </Box>
            <Box sx={{ bgcolor: '#fff', color: 'black', borderRadius: '10px', padding: '20px', boxShadow: 9 }}>
              <Typography variant="body1" sx={{ paddingBottom: '10px' }}>Income</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>$3,814.25</Typography>
            </Box>
            <Box sx={{ bgcolor: '#fff', color: 'black', borderRadius: '10px', padding: '20px', boxShadow: 9 }}>
              <Typography variant="body1" sx={{ paddingBottom: '10px' }}>Expenses</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>$1,700.50</Typography>
            </Box>
          </Box>
        </Box>

        {/* Pots Section */}
        <Box sx={{ gridArea: 'pots', bgcolor: 'white', color: 'black', borderRadius: 2, boxShadow: 9 }}>
          <Box sx={{ padding: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 3 }}>
              <Typography color="black">Pots</Typography>
              <Typography color="black">See Details <ArrowRightIcon /></Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Box sx={{ display: 'flex', bgcolor: '#f8f5f0', color: 'black', margin: 'auto', gap: 3, p: 3, borderRadius: 5 }}>
                <LocalAtmIcon sx={{ margin: 'auto', fontSize: 45, color: 'green' }} />
                <Box>
                  <Typography>Total saved</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>$850</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                <Box sx={{ borderLeft: '5px solid #367570', paddingLeft: 2 }}>
                  <Typography>Savings</Typography>
                  <Typography>$159</Typography>
                </Box>
                <Box sx={{ borderLeft: '5px solid #94d0db', paddingLeft: 2 }}>
                  <Typography>Gift</Typography>
                  <Typography>$40</Typography>
                </Box>
                <Box sx={{ borderLeft: '5px solid #615f6b', paddingLeft: 2 }}>
                  <Typography>Concert Ticket</Typography>
                  <Typography>$110</Typography>
                </Box>
                <Box sx={{ borderLeft: '5px solid #f2d4db', paddingLeft: 2 }}>
                  <Typography>New Laptop</Typography>
                  <Typography>$10</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Budgets Section */}
        <Box sx={{ gridArea: 'budgets', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: 9 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
            <Typography color="black">Budgets</Typography>
            <Typography color="black">See Details <ArrowRightIcon /></Typography>
          </Box>
          <img src="/assets/Budget.png" alt="Budget" />
        </Box>

        {/* Transactions Section */}
        <Box sx={{ gridArea: 'transactions', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: 9 }}>
          <Box sx={{ padding: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 3 }}>
              <Typography color="black">Transaction</Typography>
              <Typography color="black">View All <ArrowRightIcon /></Typography>
            </Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Sandra Adams
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>

              {/* Recurring Bills Section */}
              <Box sx={{ gridArea: 'recurring', bgcolor: 'white', p: 2, borderRadius: 2, color: 'black', boxShadow: 9 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
            <Typography color="black">Recurring Bills</Typography>
            <Typography color="black">See Details <ArrowRightIcon /></Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ bgcolor: '#f8f5f0', borderLeft: '5px solid #367570', borderRadius: 2, p: 2 }}>
              <Typography>Paid Bill</Typography>
              <Typography>$190.00</Typography>
            </Box>
            <Box sx={{ bgcolor: '#f8f5f0', borderLeft: '5px solid #615f6b', borderRadius: 2, p: 2 }}>
              <Typography>Total Upcoming</Typography>
              <Typography>$194.98</Typography>
            </Box>
            <Box sx={{ bgcolor: '#f8f5f0', borderLeft: '5px solid #f2d4db', borderRadius: 2, p: 2 }}>
              <Typography>Due Soon</Typography>
              <Typography>$59.98</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

