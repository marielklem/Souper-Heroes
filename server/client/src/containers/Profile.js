import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";
import '../static/profile.css';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    if (this.props.user.length === 0) {
      return(<div>...loading</div>)
    }
    console.log(this.props.user)
    return(
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">

              <div className="side-bar">
                <div className="user-info">
                  <img className="img-profile rounded-circle img-thumbnail img-responsive center-block"src={this.props.user.image} alt="user profile" />
                  <ul className="meta list list-unstyled">
                    <li className="name">{this.props.user.name}</li>
                    <li className="email"><a>{this.props.user.email}</a></li>
                    <li className="activity">Last shopping date: Today at 2:18pm</li>
                  </ul>
                </div>

                <nav className="side-menu">
                  <ul className="nav">
                    <li className="active"><a><span className="fa fa-user"></span> Profile</a></li>
                    <li><a><span className="fa fa-credit-card"></span> Previous Orders</a></li>
                    <li><a><span className="fa fa-envelope"></span> Messages</a></li>
                  </ul>
                </nav>
              </div>

              <div className="content-panel">
                <h2 className="title">Profile<span className="badge badge-warning badge-pill" style={{"marginLeft": "10px"}}>ADMIN</span></h2>
                  <form className="form-horizontal">
                    <fieldset className="fieldset container">
                      <h3 className="fieldset-title">Personal Info</h3>
                      <div className="form-group row avatar">
                        <figure className="figure col-lg-2 col-md-2 col-sm-3 col-xs-12">
                          <img className="img-responsive img-thumbnail" src={this.props.user.image} alt=""/>
                        </figure>
                        <div className="form-inline col-lg-4 col-md-4 col-sm-8 col-xs-1">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input inputGroup-sizing-sm" id="inputGroup-sizing-sm" aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" htmlFor="profilepic">Choose file</label>
                          </div>
                        </div>
                      </div>
          
                      <div className="form-group row">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label col-form-label-sm">Full Name</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" className="form-control form-control-sm" value={this.props.user.name}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-2  col-sm-3 col-xs-12 control-label col-form-label-sm">Email</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input type="email" className="form-control form-control-sm" value={this.props.user.email} />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label className="col-md-2  col-sm-3 col-xs-12 control-label col-form-label-sm">Location</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" className="form-control form-control-sm" value={this.props.user.location} />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="fieldset container">
                      <h3 className="fieldset-title">Demographics Info</h3>
                      <div className="form-group row">
                        <label className="col-md-2  col-sm-3 col-xs-12 control-label col-form-label-sm">Race</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" className="form-control form-control-sm" value={this.props.user.demographics.race}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-2  col-sm-3 col-xs-12 control-label col-form-label-sm">Gender</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" className="form-control form-control-sm" value={this.props.user.demographics.gender}/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-2  col-sm-3 col-xs-12 control-label col-form-label-sm">Family Size</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" className="form-control form-control-sm" value={this.props.user.demographics.householdSize}/>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <div className="form-group container">
                      <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0 text-center">
                        <input className="btn btn-primary center-block" style={{"width": "50%"}}type="submit" value="Update Profile"/>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { 
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(actionTypes.fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile) 