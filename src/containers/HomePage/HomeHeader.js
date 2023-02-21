import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.svg"
import khamchuyenkhoa from "../../assets/images/khamchuyenkhoa.png"
import khamtuxa from "../../assets/images/khamtuxa.png"
import khamtongquat from "../../assets/images/khamtongquat.png"
import dichvuxetnghiem from "../../assets/images/dichvuxetnghiem.png"
import suckhoetinhthan from "../../assets/images/suckhoetinhthan.png"
import khamnhakhoa from "../../assets/images/khamnhakhoa.png"
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils"

import { changeLanguageApp } from '../../store/actions'

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event : actions
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} />
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="home-header.speciality" /></b>
                                    <p className="sub-title"><FormattedMessage id="home-header.searchdoctor" /></p>
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="home-header.health-facility" /></b>
                                    <p className="sub-title"><FormattedMessage id="home-header.select-room" /></p>
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="home-header.doctor" /></b>
                                    <p className="sub-title"><FormattedMessage id="home-header.select-doctor" /></p>
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b><FormattedMessage id="home-header.fee" /></b>
                                    <p className="sub-title"><FormattedMessage id="home-header.check-health" /></p>
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child">
                                    <img src={khamchuyenkhoa}></img>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <img src={khamtuxa}></img>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <img src={khamtongquat}></img>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <img src={dichvuxetnghiem}></img>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <img src={suckhoetinhthan}></img>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <img src={khamnhakhoa}></img>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
        //fire 1 action cuar redux (changeLanguageApp)
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

//kết nối react vs redux
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
