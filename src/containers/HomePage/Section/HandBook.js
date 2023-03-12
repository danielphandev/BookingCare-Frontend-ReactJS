import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from 'react-slick';


class HandBook extends Component {


    render() {

        return (
            <div className="section-share section-handbook">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cẩm nang</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>

                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-handbook"></div>
                                <div>Cẩm nang 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook"></div>
                                <div>Cẩm nang 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook"></div>
                                <div>Cẩm nang 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook"></div>
                                <div>Cẩm nang 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook"></div>
                                <div>Cẩm nang 5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-handbook"></div>
                                <div>Cẩm nang 6</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
