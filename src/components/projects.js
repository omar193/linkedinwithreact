import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(e) => this.setState({ activeTab: e })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content"></div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
