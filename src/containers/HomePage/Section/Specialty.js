import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from 'react-slick';
import { getAllSpecialty } from '../../../services/userService'
import testImage from '../../../assets/specialty/100650-doctor-57101521920.jpg'
import './Specialty.scss'
import { withRouter } from 'react-router'
class Specialty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSpecialty: []
        }
    }

    async componentDidMount() {
        let res = await getAllSpecialty();
        if (res && res.errCode == 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }

    handleViewDetaildoctor = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-specialty/${item.id}`)
        }
    }

    render() {
        let { dataSpecialty } = this.state;
        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section"><FormattedMessage id="homepage.popular-specialty" /></span>
                        <button className="btn-section"><FormattedMessage id="homepage.more-infor" /></button>
                    </div>

                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {dataSpecialty && dataSpecialty.length > 0 &&
                                dataSpecialty.map((item, index) => {
                                    return (
                                        <div className="section-customize specialty-child"
                                            key={index}
                                            onClick={() => this.handleViewDetaildoctor(item)}
                                        >
                                            <div
                                                className="bg-image section-specialty"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            ></div>
                                            <div className="specialty-name">{item.name}</div>
                                        </div>
                                    )
                                })
                            }


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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
