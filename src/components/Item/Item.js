import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './Item.css';


function Item({ data }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      minHeight: 400,
      maxHeight: 500,
    },
  });


  const classes = useStyles();

  return (
    <div className="Item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt= {data.title}
            height= "250"
            image= {data.pictureUrl}
            title="Contemplative Reptile"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
              {data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {data.price}
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
