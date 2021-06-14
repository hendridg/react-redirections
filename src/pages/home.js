import React from "react"
import Header from "../containers/header"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import PricingCard from "../containers/card"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  heroContent: {
    padding: theme.spacing(2, 0, 2),
  },
  control: {
    padding: theme.spacing(2),
  },
}))

function Planes() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </Typography>
      </Container>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <PricingCard title="Plan Basico" price={12.99} />
            </Grid>
            <Grid item>
              <PricingCard title="Plan Intermedio" price={15.99} />
            </Grid>
            <Grid item>
              <PricingCard title="Plan Ultra" price={18.99} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default function Home({ user }) {
  return (
    <div>
      <Header user={user} />
      <Planes />
    </div>
  )
}
