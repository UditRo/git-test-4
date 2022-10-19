import React from 'react';
import { Avatar, TextField, Typography, Button, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box, Container } from '@mui/system';
import { Link } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';

function Signup3() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: lightBlue[300] }}>#</Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                label="이메일"
                autoFocus
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                required
                fullWidth
                label="비밀번호"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                required
                fullWidth
                label="비밀번호 확인"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="nickname" required fullWidth label="닉네임" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export default Signup3;
