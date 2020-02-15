import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Box,
  Container,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
  CardActions,
  Button,
  Card,
  CardHeader,
  Avatar,
  Divider
} from "@material-ui/core";
import Nav from "Components/navComponent/nav-component";
import cardViewdto from "./cardViewDtos";
import sliceTextWithDots from "Components/format/text-helper";

class CardView extends Component<RouteComponentProps, cardViewdto> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      cod: this.props.location.state.a.cod,
      title: this.props.location.state.a.title,
      text: this.props.location.state.a.text,
      img: this.props.location.state.a.img,
      avatar: this.props.location.state.a.avatar,
      date: this.props.location.state.a.date
    };
  }
  render() {
    console.log(this.state);

    return (
      <Box>
        <Nav />
        <Card className="cardViewCard">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className="">
                {sliceTextWithDots(this.state.avatar, 1)}
              </Avatar>
            }
            title={sliceTextWithDots(this.state.title, 20, true)}
            subheader={this.state.date}
          />
          <CardMedia
            className="cardViewMedia"
            image={this.state.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.text}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
          <Divider />
          <CardActions></CardActions>
        </Card>
      </Box>
    );
  }
}
export default CardView;
