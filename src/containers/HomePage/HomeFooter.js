import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";



class HomeFooter extends Component {


    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2023 BookingCare with Long Phan. More infomation, please visit me.<a href="" target="_blank"> &#8594; Click here &#8592;</a></p>
            </div>
        );
    }
}

//redux
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

//truy cập được hàm này thông qua this.props
const mapDispatchToProps = (dispatch) => {
    return {
    };
};

//kết nối react vs redux
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
