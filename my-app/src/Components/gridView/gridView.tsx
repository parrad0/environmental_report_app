import gridViewController from "controller/gridViewController";
import { gridViewDto } from "./gridViewDto";
import CardComponent from "../card/card_component";
import { Component } from "react";
import React from "react";
import { MenuItem, InputLabel, Select, Box, Grid } from "@material-ui/core";
import store from "redux/store";
import { changeName } from "redux/actions/actions";
import cardDto from "entities/card";
import { RouteComponentProps, withRouter } from "react-router";

class GridViewTsx extends Component<RouteComponentProps, gridViewDto> {
  controller: gridViewController;
  constructor(props: any) {
    super(props);
    this.controller = new gridViewController();
    this.state = {
      countries: [],
      provinces: [],
      types: [],
      countryPosition: "0",
      provincePosition: "0",
      typePosition: "0",
      cards: []
    };
  }
  async componentDidMount() {
    let filterdata = await this.getFilterTagData();
    this.setState({
      countries: filterdata.countries,
      provinces: filterdata.provinces,
      types: filterdata.types,
      cards: await this.getCardsFilterSearch("", "", "")
    });
  }
  render() {
    let localCards = this.state.cards ?? [];
    return (
      <div>
        <div className="filterMenu">
          <div className="filterTag">
            <InputLabel id="label">País</InputLabel>
            <Select
              labelId="label"
              id="select1"
              value={this.state.countryPosition}
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
              id="select2"
              value={this.state.provincePosition}
              onChange={(event: any) => this.handleChangeProvinces(event)}
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
              id="select3"
              value={this.state.typePosition}
              onChange={(event: any) => this.handleChangeTypes(event)}
            >
              {this.state.types.map((value, index) => {
                return <MenuItem value={index}>{value}</MenuItem>;
              })}
            </Select>
          </div>
        </div>
        <Box className="GridContainer">
          {localCards.map(o => (
            <CardComponent
              onClick={a => this.handleClickCard(a)}
              cod={o.cod}
              text={o.text}
              img={o.img}
              title={o.title}
              avatar={o.avatar}
              date={o.date}
            />
          ))}
        </Box>
      </div>
    );
  }
  //set DropDowns
  async getFilterTagData(): Promise<gridViewDto> {
    console.log("data");
    return await this.controller.getFilterTagData();
  }
  async getCardsFilterSearch(
    country: string,
    province: string,
    type: string
  ): Promise<cardDto[]> {
    console.log("data");
    return await this.controller.loadData(country, province, type);
  }
  //dropdowns onchange
  handleChangeProvinces(event: any) {
    this.setState({ provincePosition: event.target.value });
  }
  handleChangeCountry(event: any) {
    this.setState({ countryPosition: event.target.value });
  }
  handleChangeTypes(event: any) {
    this.setState({ typePosition: event.target.value });
  }
  handleClickRedux() {
    var tech = { text: "iniciado", cod: 33 };
    store.dispatch(changeName(tech.text));
  }
  handleClickCard(a: any) {
    this.props.history.push({
      pathname: "CardView",
      state: {
        a
      }
    });
  }
  getFilterState(): { country: string; province: string; type: string } {
    return { country: "", province: "", type: "" };
  }
}
export default withRouter(GridViewTsx);
