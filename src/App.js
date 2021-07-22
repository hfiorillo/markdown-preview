import React from "react";
import Badge from 'react-bootstrap/Badge';

// Importing marked
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Intialise state within constructor
    this.state = {
      markdown: "",
    };
  }
  // Method
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    // Method & additionals
    // Input object
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    // Preview object
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge style={{color: 'black'}} variant="primary" className="text-align-center">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge style={{color: 'black'}} className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge style={{color: 'black'}} bclassName="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div style={outputStyle}
                dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}