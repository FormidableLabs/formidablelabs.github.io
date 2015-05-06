var React = require('react');
var Radium = require('radium');
var _ = require('lodash');

var Header = require('./header');
var Footer = require('./footer');
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
  var filteredData = _.filter(data, function (item) {
    if (item.homepage) {
      return true;
    }
  });

  React.render(<App data={filteredData} />, document.getElementById('app'));
};

fetchData();
