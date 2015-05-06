var React = require('react');
var Radium = require('radium');

var Repo = React.createClass(Radium.wrap({
  displayName: 'Repo',

  render: function () {
    return (
      <div style={{
        width: '33.3333%',
        padding: '0 16px',
        display: 'inline-block',
        marginTop: 32,
        verticalAlign: 'top'
      }}>
        <article style={repoStyle}>
          <h2 style={{margin: '0 0 10px'}}>
            <a href={this.props.data.html_url}>
              {this.props.data.name}
            </a>
          </h2>

          <i>{this.props.data.stargazers_count} stars</i>
        </article>
      </div>
    )
  }
}));

var repoStyle = {
  background: 'rgba(255,255,255,0.8)',
  padding: 24
};

module.exports = Repo;
