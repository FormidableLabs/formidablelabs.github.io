var whiteList = require('./white-list');

var React = require('react');
var ReactDOM = require('react-dom');
var Radium = require('radium');
var Style = Radium.Style;
var StyleRoot = Radium.StyleRoot;
var _ = require('lodash');
var ga = require('react-ga');

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

  componentDidMount: function () {
    ga.initialize('UA-43290258-1');
    ga.pageview('stack.formidable.com/');
  },

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
        <Header
          backgroundColor="#6B000B"
        />
          <h1 style={styles.title}>
            <img style={styles.logo} src="/static/logo-formidable-black.svg" />
            <span style={styles.heading}>Open Source</span>
          </h1>
        <RepoList repos={this.props.data} />
        <Footer
          backgroundColor="#6B000B"
          logoColor="white"
          styleOverrides={{color: "#ffffff"}}
        />
        <Polygon />
      </div>
    );
  }
});

var styles = {
  title: {
    maxWidth: '98%',
    display: 'block',
    margin: '3em auto 1.5em',
    textAlign: 'center'
  },
  heading: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '2.5rem',
    fontWeight: 'normal'
  },
  logo: {
    display: 'block',
    maxWidth: '300px',
    margin: '0 auto',
    paddingRight: '24px'
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
