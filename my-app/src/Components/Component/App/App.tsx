import React, { Component } from 'react';
import 'Assets/CSS/App.css';
import Nav from 'Components/nav_component/nav-component';
import GridViewTsx from '../gridView/gridView';

class App extends Component{
constructor(props : any){
  super(props);
}
render(){
  return(
<div>
  <Nav />
  <GridViewTsx />
</div>
  );
}
}

export default App;
