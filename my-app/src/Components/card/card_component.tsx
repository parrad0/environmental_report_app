import {
  CardHeader,
  IconButton,
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  CardMedia,
  Box
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import gridViewController from "controller/gridViewController";
import { cardDtoArgs, cardDtoProps } from "./card_dto";
import sliceTextWithDots from "Components/format/text-helper";
import { borders } from "@material-ui/system";
import React, { Component } from "react";

class CardComponent extends Component<cardDtoProps, cardDtoArgs> {
  _controller: gridViewController;
  constructor(props: any) {
    super(props);
    this.state = {
      color: "default",
      cod: this.props.cod,
      title: this.props.title,
      text: this.props.text,
      img: this.props.img,
      avatar: this.props.avatar,
      date: this.props.date
    };
    this._controller = new gridViewController();
  }
  render() {
    return (
      <Box borderRadius="5%" className="filterCard">
        <CardMedia
          onClick={() => this.props.onClick(this.state)}
          className="media"
          image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Bonfire_in_Kladow_17.04.2011_20-41-54.JPG"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {sliceTextWithDots(this.state.text, 25, true)}
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
      </Box>
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
  cardClicked() {}
}
export default CardComponent;
