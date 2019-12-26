import { Component } from "react";
import Button from "@material-ui/core/Button";
import React from "react";
import gridViewController from "controller/gridViewController";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { gridViewDto, valueExample } from "./gridViewDto";
import {
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Avatar,
  CardHeader,
  Card,
  CardMedia
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";

class GridViewTsx extends Component<{}, gridViewDto> {
  controller: gridViewController;
  constructor(props: any) {
    super(props);
    this.controller = new gridViewController();
    this.state = {
      countries: [],
      provinces: [],
      types: []
    };
  }
  async componentDidMount() {
    let filterdata = await this.getFilterTagData();

    this.setState({
      countries: filterdata.countries,
      provinces: filterdata.provinces,
      types: filterdata.types
    });
  }
  render() {
    return (
      <div>
        <div className="filterMenu">
          <div className="filterTag">
            <InputLabel id="label">País</InputLabel>
            <Select
              labelId="label"
              id="select"
              value={this.state.countries}
              onChange={(event: any) => this.handleChangeCountry(event)}
            >
              {this.state.countries.map((value, index) => {
                return <MenuItem value={index}>{value}</MenuItem>;
              })}
            </Select>
          </div>

          <div className="filterTag">
            <InputLabel id="label">Provincias</InputLabel>
            <Select
              labelId="label"
              id="select"
              value={this.state.countries}
              onChange={(event: any) => this.handleChangeCountry(event)}
            >
              {this.state.provinces.map((value, index) => {
                return <MenuItem value={index}>{value}</MenuItem>;
              })}
            </Select>
          </div>

          <div className="filterTag">
            <InputLabel id="label">Tipo</InputLabel>
            <Select
              labelId="label"
              id="select"
              value={this.state.countries}
              onChange={(event: any) => this.handleChangeCountry(event)}
            >
              {this.state.countries.map((value, index) => {
                return <MenuItem value={index}>{value}</MenuItem>;
              })}
            </Select>
          </div>
        </div>
        <div>
          <Card className={""}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia image="" title="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="show more"></IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
  //set DropDowns
  async getFilterTagData(): Promise<gridViewDto> {
    console.log("data");
    return await this.controller.getFilterTagData();
  }
  //dropdowns onchange
  handleChangeProvinces(event: any) {
    console.log("inside the chnage");
    this.setState({ provinces: event.target.value });
  }
  handleChangeCountry(event: any) {
    console.log("inside the chnage");
    this.setState({ countries: event.target.value });
  }
  handleChangeTypes(event: any) {
    console.log("inside the chnage");
    this.setState({ types: event.target.value });
  }
}
export default GridViewTsx;
