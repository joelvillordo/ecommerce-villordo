import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Item({ data }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      minHeight: 400,
      marginTop: 10,
    },
  });

  const classes = useStyles();

  return (
    <div className="Item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            alt={data.title}
            width="50%"
            image={data.pictureUrl}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" height="50%">
              {data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            ${data.price.toLocaleString("es")}
          </Button>
          <Button size="small" color="primary">
            Ver Más
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Item;
