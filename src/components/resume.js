import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Results from "./results";

class Resume extends Component {
  constructor(props) {
    super();
    this.state = {
      status: 0,
      status2: 0,
      status3: 0,
      progress: 10,
      progress2: 10,
      progress3: 10,
      isform: true,
      isLoggedIn: false
    };
  }
  OnMakeOlder() {
    this.setState({
      status: this.state.status + 1,

      progress2: this.state.progress2 + 10
    });
    console.log(this.state.status);
  }
  OnMakeOlderOne() {
    this.setState({
      status2: this.state.status2 + 1,
      progress3: this.state.progress3 + 10
    });
    console.log(this.state.status2);
  }
  OnMakeOlderTwo() {
    this.setState({
      status3: this.state.status3 + 1,
      progress: this.state.progress + 10
    });
    console.log(this.state.status3);
  }

  getInitialState() {
    return { showResults: false };
  }
  OnClickAdd() {
    this.setState({ showResults: true });
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="cv.png"
                alt="avatar"
                style={{ height: "200px", width: "150px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>omar maalej</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p />
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>sfax</p>
            <h5>Phone</h5>
            <p>(+216) 21299097</p>
            <h5>Email</h5>
            <p>omar.maalej@esprit.tn</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education startYear={2013} endYear={2016} schoolName="Isims" />

            <Education startYear={2016} endYear={2019} schoolName="Esprit" />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription=""
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription=""
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>

            <div className="on">
              <button
                type="button"
                onClick={() => this.OnClickAdd()}
                className="btn btn-default btn-sm"
              >
                <span className="glyphicon glyphicon-plus" /> Add
              </button>
              {this.state.showResults ? <Results /> : null}
            </div>
            <table className="table ">
              <thead />
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <Skills
                      skill="javascript"
                      progress={this.state.progress2}
                    />
                  </td>
                  <td>
                    <div className="haha">
                      <button
                        type="button"
                        onClick={() => this.OnMakeOlder()}
                        className="btn btn-primary"
                      >
                        likes <span className="badge">{this.state.status}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Skills skill="HTML/CSS" progress={this.state.progress3} />
                  </td>
                  <td>
                    <div className="haha">
                    
                      <button
                        type="button"
                        onClick={() => this.OnMakeOlderOne()}
                        className="btn btn-primary"
                      >
                        likes{" "}
                        <span className="badge">{this.state.status2}</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <Skills skill="NodeJS" progress={this.state.progress} />
                  </td>
                  <td>
                    <div className="haha">
                      <button
                        type="button"
                        onClick={() => this.OnMakeOlderTwo()}
                        className="btn btn-primary"
                      >
                        likes{" "}
                        <span className="badge">{this.state.status3}</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
