import React from 'react'

export default class Panel extends React.Component{
    render(){
        return(
        <div id="side-panel">
            <div id="side-panel-trigger-close" class="side-panel-trigger">
                <a href="#">
                    <i className="icon-line-cross"></i>
                </a>
            </div>
            <div className="side-panel-wrap">
                <div className="widget clearfix">
                    <h4 className="t400">Login with Social Profiles</h4>
                    <a href="#" className="button button-rounded t400 btn-block center si-colored noleftmargin si-facebook">Facebook</a>
                    <a href="#" className="button button-rounded t400 btn-block center si-colored noleftmargin si-gplus">Google</a>
                    <div className="line"></div>
                    <h4 className="t400">Existing Account?</h4>
                    <form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
                        <div className="col_full">
                            <label for="login-form-username" className="t400">Username:</label>
                            <input type="text" id="login-form-username" name="login-form-username" value="" className="form-control" />
                        </div>
                        <div className="col_full">
                            <label for="login-form-password" className="t400">Password:</label>
                            <input type="password" id="login-form-password" name="login-form-password" value="" className="form-control" />
                        </div>
                        <div className="col_full nobottommargin">
                            <button className="button button-rounded t400 nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                            <a href="#" className="fright">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        )
    }
}