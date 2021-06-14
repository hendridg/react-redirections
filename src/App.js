import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import { Browse, SignUp, SignIn, Home } from "./pages/"
import useAuthListener from "./hooks/use-auth-listener"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import * as ROUTES from "./constants/routes"

function App() {
  const { user } = useAuthListener()

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#62ddff",
          },
        },
      }),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <SignIn user={user} />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <SignUp user={user} />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse user={user} />
          </ProtectedRoute>
          {/* <Route to={ROUTES.BROWSE}>
            <Browse user={user} />
          </Route> */}
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
          >
            <Home user={user} />
          </IsUserRedirect>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
