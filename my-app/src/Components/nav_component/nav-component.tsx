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