import { Component } from "react";
import Button from '@material-ui/core/Button';
import React from "react";
import gridViewController from "controller/gridViewController";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {gridViewDto, valueExample} from "./gridViewDto";

class GridViewTsx extends Component<{},gridViewDto>{
    controller : gridViewController;
    constructor(props : any){     
        super(props);
        this.controller=new gridViewController;
   this.state={
       countries:1,
       provinces:1,
       types:1,
   }
    }
render(){
    let countries = this.getCountriesFilterTag();
    console.log(countries);
    let provinces = this.getProvinceFilterTag();
    let type = this.getTypeFilterTag();

    return(
        <div className="filterMenu">
            <div className="filterTag">
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value={this.state.countries} onChange={(event)=>this.handleChangeCountry(event)}>
{provinces.map((value, index) => {
        return <MenuItem value={index}>{value}</MenuItem>
      })}
</Select>
</div>

<div className="filterTag">
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value={this.state.provinces} onChange={(event)=>this.handleChangeProvinces(event)}>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
</div>

<div className="filterTag">
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value={this.state.types} onChange={(event)=>this.handleChangeTypes(event)}>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
</div>
        </div>
        
    );
}
//set DropDowns
 async getCountriesFilterTag() : Promise<valueExample>{
    console.log("data");
    return await this.controller.getCountriesFilterTagData();
}
getProvinceFilterTag(){
    return ['','',''];
}
getTypeFilterTag(){
    return [];
}
//dropdowns onchange
handleChangeProvinces  (event: any)  {
    console.log("inside the chnage");
    this.setState({provinces: event.target.value});
  }
  handleChangeCountry  (event: any)  {
    console.log("inside the chnage");
    this.setState({countries: event.target.value});
  }
  handleChangeTypes  (event: any)  {
    console.log("inside the chnage");
    this.setState({types: event.target.value});
  }
}
export default GridViewTsx;