import { Component } from "react";
import React from "react";
import {
  CardHeader,
  IconButton,
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  CardMedia,
  Grid
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import gridViewController from "controller/gridViewController";
import { cardDtoArgs } from "./card_dto";
import { RouteComponentProps, withRouter } from "react-router";

class CardComponent extends Component<RouteComponentProps, cardDtoArgs> {
  _controller: gridViewController;
  constructor(props: any) {
    super(props);
    this.state = {
      color: "default",
      cod: 22,
      name: "",
      text: "incidencia"
    };
    this._controller = new gridViewController();
  }
  render() {
    return (
      <Card onClick={() => this.cardClicked()} className="filterCard">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className="orange">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className="media"
          image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Bonfire_in_Kladow_17.04.2011_20-41-54.JPG"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.state.text + this.state.cod}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            color={this.state.color}
            onClick={() => this.likeClick()}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={() => this.shareClick()}>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="show more"></IconButton>
        </CardActions>
      </Card>
    );
  }
  async likeClick() {
    if (this.state.color === "default") {
      await this._controller.likeCardToUser(this.state.cod);
      this.setState({ color: "primary" });
    } else {
      this.setState({ color: "default" });
    }
  }
  shareClick() {
    alert("copy");
  }
  cardClicked() {
    this.props.history.push({
      pathname: "/CardView",
      state: { name: "f" }
    });
  }
}
export default withRouter(CardComponent);
