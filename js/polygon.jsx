var React = require('react');
var ReactDOM = require('react-dom');

var Radium = require('radium');
var Trianglify = require('trianglify');
var _ = require('lodash');

var Polygon = React.createClass({
  displayName: 'Polygon',

  componentDidMount: function () {
    this.renderPolygon();

    window.addEventListener('resize', _.debounce(this.renderPolygon, 150));
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize');
  },

  renderPolygon: function () {
    var pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight,
      x_colors: [
        '#6B000B',
        '#EB0017',
        '#E57F89',
        '#A10011',
        '#EB0017',
        '#6B2028',
        '#B80012'
      ]
    });

    var el = ReactDOM.findDOMNode(this);
    el.innerHTML = '';
    el.appendChild(pattern.canvas());
  },

  render: function () {
    return (
      <div style={styles} />
    );
  }
});

var styles = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -1
};

module.exports = Radium(Polygon);
