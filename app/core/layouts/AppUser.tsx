import React from "react"
import { useMutation, Routes, Link } from "blitz"

import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import AccountCircle from "@mui/icons-material/AccountCircle"

import { useCurrentUser } from "../hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

function AppUser() {
  const currentUser = useCurrentUser()

  if (currentUser) {
    return <UserMenu />
  }

  return (
    <>
      <Link href={Routes.LoginPage()}>
        <Button color="inherit">Login</Button>
      </Link>
      <Link href={Routes.SignupPage()}>
        <Button color="inherit">Sign up</Button>
      </Link>
    </>
  )
}

const UserMenu = () => {
  const currentUser = useCurrentUser()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [logoutMutation] = useMutation(logout)

  const handleLogout = async () => {
    handleClose()
    await logoutMutation()
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>{currentUser?.email}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default AppUser
