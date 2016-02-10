var whiteList = require('./white-list');

var React = require('react');
var ReactDOM = require('react-dom');
var Radium = require('radium');
var Style = Radium.Style;
var StyleRoot = Radium.StyleRoot;
var _ = require('lodash');

var Common = require('formidable-landers');
var Header = Common.Header;
var Footer = Common.Footer;
var Polygon = require('./polygon');

var RepoList = require('./repo-list');

var fetchData = function (page) {
  var apiRequest = new XMLHttpRequest();

  var uri = 'https://api.github.com/orgs/formidablelabs/repos' +
    '?type=public&type=sources' +
    '&per_page=200';


  apiRequest.open('GET', uri, true);

  apiRequest.onload = function() {
    if (apiRequest.status >= 200 && apiRequest.status < 400) {
      var data = JSON.parse(apiRequest.responseText);

      renderApp(data);
    } else {
      throw new Error("It didn't work! Sorry! Try refreshing?");
    }
  };

  apiRequest.onerror = function (err) {
    throw new Error("It didn't work! Sorry! Try refreshing?");
  };

  apiRequest.send();
};

var App = React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div>
        <Style rules={{
        '*': {
          boxSizing: 'border-box'
        },
        body: {
          margin: 0,
          background: '#d71920',
          fontFamily: 'proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontSize: '16px'
        },
        'h1, h2, h3, h4, h5, h6, p': {
          margin: 0
        },
        'a': {
          color: '#ffffff',
          fontWeight: 'bold'
        },
        'a:hover': {
          color: '#d71920'
        }
        }} />
        <Header backgroundColor="#2b303b" />
          <h1 style={styles.heading}>Our open source work:</h1>
        <RepoList repos={this.props.data} />
        <Footer backgroundColor="#2b303b" styleOverrides={{color: "#ffffff"}} />
        <Polygon />
      </div>
    );
  }
});

var styles = {
  heading: {
    maxWidth: '98%',
    display: 'block',
    margin: '3em auto 1.5em',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 'bold'
  }
};


var renderApp = function (data) {
  var filteredData = _.filter(data, function (item) {
    if (_.indexOf(whiteList, item.name) !== -1) {
      return true;
    }
  });

  ReactDOM.render(<StyleRoot><App data={filteredData} /></StyleRoot>, document.getElementById('app'));
};

fetchData();
