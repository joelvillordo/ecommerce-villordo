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


function Item({ id, title, description, price, pictureUrl }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  return (
    <div className="Item">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt= {title}    
            height="140"
            image= {pictureUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {price}
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
