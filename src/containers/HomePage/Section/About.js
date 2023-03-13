import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";



class About extends Component {


    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Hệ thống BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe
                            width="90%"
                            height="400px"
                            src="https://www.youtube.com/embed/OASGscJQXp0"
                            title="BookingCare: Hệ thống đặt khám trực tuyến"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>BookingCare là ứng dụng hỗ trợ kết nối giữa người dùng với bác sĩ và các cơ sở y tế uy tín. Nhờ vào đó, người dùng có thể lựa chọn đúng bác sĩ chuyên khoa phù hợp với vấn đề của mình để đặt lịch khám bệnh ở các cơ sở y tế hoặc với hình thức tư vấn trực tuyến ngay tại nhà. </p>
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
