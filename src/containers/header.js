import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import { FirebaseContext } from "../context/firebase"

import * as ROUTES from "../constants/routes"
import { Link as RouterLink } from "react-router-dom"
import { Avatar } from "@material-ui/core"
import { handleMenu } from "../redux/menuReducer"
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
    color: "#000000",
  },
}))

export default function Header({
  isLogged = false,
  to = ROUTES.SIGN_IN,
  text = "Login",
  user,
  ...restProps
}) {
  const classes = useStyles()
  const { firebase } = useContext(FirebaseContext)

  const dispatch = useDispatch()

  const handle = () => {
    dispatch(handleMenu())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <RouterLink to={ROUTES.HOME} className={classes.link}>
              Home
            </RouterLink>
          </Typography>

          {isLogged ? (
            <RouterLink to={ROUTES.HOME} className={classes.link}>
              <Avatar
                alt={`${user.displayName.slice(0).toUpperCase()}`}
                // alt="Remy Sharp"
                src={`/images/${user.displayName}.jpg`}
              />
              <Button
                className={classes.link}
                onClick={() => firebase.auth().signOut()}
              >
                Log out
              </Button>
            </RouterLink>
          ) : (
            <RouterLink to={to} className={classes.link}>
              <Button className={classes.link}>{text}</Button>
            </RouterLink>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
