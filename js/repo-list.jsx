var React = require('react');
var Radium = require('radium');
var _ = require('lodash');

var Repo = require('./repo');

var RepoList = React.createClass(Radium.wrap({
  displayName: 'RepoList',

  renderRepo: function (repo, i) {
    return (
      <Repo
        key={i}
        url={repo.html_url}
        name={repo.name}
        stars={repo.stargazers_count}
        description={repo.description}
        homepage={repo.homepage}
      />
    )
  },

  render: function () {
    var sortedRepos = _.sortByOrder(
      this.props.repos,
      'stargazers_count',
      false
    );

    return (
      <main style={styles}>
        {sortedRepos.map(this.renderRepo)}
      </main>
    );
  }
}));

var styles = {
  margin: '0 auto 50px',
  maxWidth: '90%',
  display: 'flex',
  flexWrap: 'wrap'
};

module.exports = RepoList;
