var React = require('react');
var ReactDOM = require('react-dom');
var formwrapperstyle = {
  border : '5px solid #494949',
  margin : '0px auto',
  display: 'flex',
  padding: '20px 40px',
  backgroundColor : '#cccccc',
  width : '300px',
  borderRadius : '5px',
  boxShadow : '5px 5px 5px #cccccc'


};
var inputstyle ={
  padding: '2px 5px',
  borderRadius : '5px',
  height : '50px',
  width : '200px',
  display: 'block',
  margin : '10px'
};

var buttonstyle = {

    padding: '2px 5px',
    borderRadius : '5px',
    height : '50px',
    width : '200px',
    display: 'block',
    margin : '10px',
    fontSize : '24px',
    color : 'white',
    backgroundColor : '#494949'
};
var MainForm = React.createClass({
handleLogin : function(){
  alert('login not enabled');
},

render: function(){


  return(
<div className="form-wrapper" style={formwrapperstyle} >
  <form bsStyle="inline" callback={this.handleLogin}>

  <input name="email" style={inputstyle} type="email" placeholder="Email" required={true}/>
  <input name="password" type="password" style={inputstyle} placeholder="Password / Blank"
  required={true} minLength={5}/>
  <br/>
  <button style ={buttonstyle} onClick={this.handleLogin} type="#" bsStyle="success">
  Log in
  </button>
  </form>
</div>
);
}

});

module.exports =  MainForm;
