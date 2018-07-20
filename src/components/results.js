import React, { Component } from "react";
import Competence from "./competence";




class Results extends Component {
    constructor(props) {
        super();
        this.state={
          works:[]
          
        };
        
      }
    
      onClickShow(){
        var tit=this.refs.tit.value;
        alert(tit);
     
        if(localStorage.getItem('works')==null){
          var works=[];
          works.push(tit);
          localStorage.setItem('works',JSON.stringify(works));

        }else{
          let works=JSON.parse(localStorage.getItem('works'));
          works.push(tit);
          localStorage.setItem('works',JSON.stringify(works));

        }
        this.setState({
         works: JSON.parse(localStorage.getItem('works'))
        });
          console.log(JSON.parse(localStorage.getItem('works')));
      }
    

  render() {
    return (
      <div id="results" className="search-results">
      <br/> <br/>
         <input type="text"  width=" 500%" className="form-control" ref="tit" placeholder="Put your extra skills here !" />
         <button className="btn btn-primary" type="submit"  onClick={this.onClickShow.bind(this)} >Confirm</button>
         <br/><br/>
        
          {this.state.works.map(function(work,index){
            return( <Competence key={index} item={work}/>
            );
            }, this)}
         
         
      </div>
    );
  }
}


export default Results;
