import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from 'react-slick';

import testImage from '../../../assets/specialty/100650-doctor-57101521920.jpg'

class Specialty extends Component {


    render() {

        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>

                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Co xuong khop 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Co xuong khop 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Co xuong khop 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Co xuong khop 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Co xuong khop 5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <div>Co xuong khop 6</div>
                            </div>

                        </Slider>
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
export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
