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
    // Secrets for development convenience (one off fake application).
    // Delete before launching.
    '&per_page=0' +
    '&client_id=37a02cd830a1afd8fe2f' +
    '&client_secret=23bfab898eec4656b01b0e647d9a9d84147a27f9';

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
                fontFamily: 'proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif'
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
