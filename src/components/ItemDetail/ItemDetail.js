import React from "react";
import ItemCount from "../ItemCount/ItemCount";
//Card de Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 10,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function ItemDetail({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={data.title} />
      <CardMedia
        className={classes.media}
        image={data.pictureUrl}
        title={data.title}
      />
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          {data.description}
        </Typography>
        <h3>{data.price}</h3>
      </CardContent>
      <ItemCount data={data} />
    </Card>
  );
}
