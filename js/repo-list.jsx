var React = require('react');
var Radium = require('radium');
var _ = require('lodash');

var Repo = require('./repo.jsx');

var RepoList = React.createClass(Radium.wrap({
  displayName: 'RepoList',

  renderRepo: function (repo, i) {
    return (
      <Repo
        key={i}
        data={repo}
      />
    )
  },

  render: function () {
    var sortedRepos = _.sortByOrder(
      this.props.repos,
      'stargazers_count',
      false
    );

    // console.log(sortedRepos);

    return (
      <main style={styles}>
        {sortedRepos.map(this.renderRepo)}
      </main>
    );
  }
}));

var styles = {
  margin: '0 auto',
  maxWidth: '90%'
};

module.exports = RepoList;
