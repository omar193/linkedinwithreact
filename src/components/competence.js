import React, { Component } from 'react';

import Skills from "./skills";



class Competence extends Component {
    constructor(props) {
        super();
        this.state = {
          status4: 0,
         
          progress4: 10,
         
        };
      }
    OnMake() {
        this.setState({
          status4: this.state.status4 + 1,
    
          progress4: this.state.progress4 + 10
        });
        
      }
  render() {
    return(
     
          
        <table  width="100%"  >
        <thead />
        <tbody>
           <tr>
           
                  <td>
                    {" "}
                    <Skills
                      skill={this.props.item}
                     
                      progress={this.state.progress4}
                    />
                  </td>
                  <td>
                    <div className="haha">
                      <button
                        type="button"
                        onClick={() => this.OnMake()}
                        className="btn btn-primary"
                      >
                        likes <span className="badge">{this.state.status4}</span>
                      </button>
                    </div>
                  </td>
                </tr>
                
                     </tbody>
                </table>
       
    )
  }
}

export default Competence