import { Component } from "react";
import Button from '@material-ui/core/Button';
import React from "react";
import gridViewController from "controller/gridViewController";

class GridViewTsx extends Component<{},{grids : any}>{
    controller : gridViewController;
    constructor(props : any){     
        super(props);
        this.controller=new gridViewController;
        this.state={
            grids:["a","b"],
        }
    }
render(){
    let response : any=[];
    let grids=this.state.grids;
    console.log(this.state.grids);
    grids.map((element: React.ReactNode) => {
    response.push(<div>{element}</div>);
     })
    return(
        <div>
        <Button variant="contained" onClick={()=>this.click()}>Filter</Button>
    {response}
        </div>
        
    );
}
click(){
let response=this.controller.loadData();
this.setState({grids: response});
}
}
export default GridViewTsx;