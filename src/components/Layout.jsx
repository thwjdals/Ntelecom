import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Nav from './Nav';

function Layout() {
  return (
    <div>
      <Container maxWidth="lg">
        <Nav />

        <Box sx={{ my: 4 }}>
          <main>
            <Outlet />
          </main>
          <footer>푸터</footer>
        </Box>
      </Container>
    </div>
  );
}

export default Layout;
