var React = require('react');
var Radium = require('radium');
var Icon = require('react-geomicons');

var Repo = React.createClass(Radium.wrap({
  displayName: 'Repo',

  render: function () {
    return (
      <div ref="column" style={styles.column}>
        <article style={styles.repo}>
          <a
            style={styles.link}
            href={this.props.url}
          >
            <h2>{this.props.name}</h2>

            <p style={styles.text}>{this.props.description}</p>

            <div style={styles.stars}>
              <span style={styles.starsLabel}>
                {this.props.stars}
              </span>

              <Icon name="star" />
            </div>
          </a>
        </article>
      </div>
    )
  }
}));

var styles = {
  column: {
    width: '100%',
    padding: '0 16px',
    display: 'inline-block',
    marginTop: 32,
    verticalAlign: 'top',

    '@media (min-width: 600px)': {
      width: '50%'
    },

    '@media (min-width: 960px)': {
      width: '33.3333%'
    }
  },

  repo: {
    position: 'relative',
    background: 'rgba(255,255,255,0.9)',
    padding: 24,
    color: '#52242A'
  },

  link: {
    color: '#E53D4F',
    textDecoration: 'none',

    ':hover': {
      color: '#52242A'
    }
  },

  text: {
    marginTop: 10,
    color: '#52242A'
  },

  stars: {
    position: 'absolute',
    top: 8,
    right: 8,
    color: '#A6616A'
  },

  starsLabel: {
    fontWeight: 700,
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginRight: '0.4em',
    position: 'relative',
    top: -2
  }
};

module.exports = Repo;
