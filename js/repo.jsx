var React = require('react');
var Radium = require('radium');
var Icon = require('react-geomicons');

var Repo = React.createClass(Radium.wrap({
  displayName: 'Repo',

  render: function () {
    var stars;

    if (this.props.stars) {
      stars = (
        <div style={styles.stars}>
          <span style={styles.starsLabel}>
            {this.props.stars}
          </span>

          <Icon name="star" />
        </div>
      )
    }

    return (
      <div ref="column" style={styles.column}>
        <article style={styles.repo}>
          <h2>
            <a
              style={styles.link}
              href={this.props.url}
            >
              {this.props.name}
            </a>
          </h2>

          <p style={styles.text}>{this.props.description}</p>

          {this.props.homepage ?
            (
              <a
                href={this.props.homepage}
                ref="homepage-link"
                style={[styles.link, styles.homepageLink]}
              >
                Homepage
              </a>
            ) : ""
          }

          {stars}
        </article>
      </div>
    )
  }
}));

var styles = {
  column: {
    width: '100%',
    padding: '0 16px',
    display: 'flex',
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
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.75)',
    backgroundImage: 'radial-gradient(at 30% 0%, rgba(255,255,255,0.8), rgba(255,255,255,0))',
    boxShadow: '1px 2px 1px rgba(0,0,0,0.18)',
    padding: '24px 24px 36px',
    color: '#52242A'
  },

  link: {
    color: '#E52C3F',
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
  },

  homepageLink: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    fontWeight: 700,
    fontSize: 13
  }
};

module.exports = Repo;
