/** @format */

import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { mobile, tablet } from '../responsive'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
    console.log(user)
  }

  return (
    <>
      <Navbar />
      <Container>
        <Image src='assets/background.png' />
        <FormContainer>
          <Title>SIGN IN</Title>
          <Box className='form' component='form'>
            <TextField
              className='input'
              id='username'
              label='Username'
              color='success'
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className='input'
              id='password'
              label='Password'
              type='password'
              color='success'
              onChange={(e) => setPassword(e.target.value)}
            />
            {user.error && <Error>Invalid username or password</Error>}
            <Button
              variant='contained'
              size='large'
              color='success'
              onClick={handleClick}
              disabled={user.isFetching}
            >
              LOGIN
            </Button>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Box>
        </FormContainer>
      </Container>
    </>
  )
}

export default Login

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '50%' })};
  ${tablet({ height: '80%' })};
`

const FormContainer = styled.div`
  position: absolute;
  min-width: 300px;
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })};
  ${tablet({ textAlign: 'center' })};
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Error = styled.span`
  color: red;
`
