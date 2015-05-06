var React = require('react');
var Radium = require('radium');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Polygon = require('./polygon.jsx');

var RepoList = require('./repo-list.jsx');

var fetchData = function (page) {
  var apiRequest = new XMLHttpRequest();

  var dataPage = page || 1;

  var uri = 'https://api.github.com/orgs/formidablelabs/repos' +
    '?type=public&type=sources' +
    '&per_page=0';

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
        <Radium.Style
          rules={[
            {
              '*': {
                boxSizing: 'border-box'
              }
            },
            {
              body: {
                margin: 0,
                background: '#d71920',
                fontFamily: 'proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }
            },
            {
              'h1, h2, h3, h4, h5, h6, p': {
                margin: 0
              }
            }
          ]}
        />
        <Header />
        <RepoList repos={this.props.data} />
        <Footer />
        <Polygon />
      </div>
    );
  }
});

var renderApp = function (data) {
  React.render(<App data={data} />, document.getElementById('app'));
};

fetchData();
