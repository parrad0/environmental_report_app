import { Component } from "react";
import React from "react";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

 class Nav extends Component{
    constructor(props : any){
        super(props);
            this.state={
                 loged:false,
                  params:["f","d"],
                        };
                        
    }
    render(){
        //TODO logged in 
if(true){return(
<div className="nav">
    <Button variant="contained" color="primary">
      Hola Mundo!
    </Button>
   <InputLabel id="label">Pais</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
</div>
);}else{return(
<div className="nav">
<i className="fas fa-user"></i>

</div>
);
};


    }




}
export default Nav;