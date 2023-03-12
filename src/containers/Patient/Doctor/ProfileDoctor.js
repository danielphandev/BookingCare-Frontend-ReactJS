import React, { Component } from 'react';
import { connect } from "react-redux";
import './ProfileDoctor.scss'
import { LANGUAGES, } from '../../../utils';
import { FormattedMessage } from 'react-intl';
import { getProfileDoctorById } from '../../../services/userService'
import NumberFormat from 'react-number-format';
import _ from 'lodash';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
class ProfileDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}
        }
    }

    async componentDidMount() {
        let id = this.props.doctorId;
        let data = await this.getInforDoctor(id);
        this.setState({
            dataProfile: data
        })
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.doctorId !== prevProps.doctorId) {
            let data = await this.getInforDoctor(this.props.doctorId);
            this.setState({
                dataProfile: data,
            });
        }
    }


    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data
            }
        }
        return result;
    }

    rederTimeBooking = (dataTime) => {
        let { language } = this.props;
        let time = language === LANGUAGES.VI ?
            dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
        if (dataTime && !_.isEmpty(dataTime)) {
            let date = language === LANGUAGES.VI ? moment.unix(dataTime.date / 1000).format('dddd - DD/MM/YYYY')
                : moment.unix(dataTime.date / 1000).locale('en').format('dddd - MM/DD/YYYY')
            return (
                <>
                    <div>{time} - {date}</div>
                    <div><FormattedMessage id="patient.booking-modal.priceBooking" /></div>
                </>
            )
        }
        return <></>
    }

    render() {
        let { dataProfile } = this.state;
        let { language, isShowDescriptionDoctor, dataTime, isShowLinkDetail, isShowPrice, doctorId } = this.props;
        let nameVi = '';
        let nameEn = '';
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        return (
            <div className='profile-doctor-container'>
                <div className='intro-doctor'>
                    <div className='content-left'
                        style={{ backgroundImage: `url(${dataProfile.image ? dataProfile.image : ''})` }}
                    >
                    </div>
                    <div className='content-right'>
                        <div className='up'>
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                        </div>
                        <div className='down'>
                            {isShowDescriptionDoctor === true ?
                                <>
                                    {dataProfile && dataProfile.Markdown && dataProfile.Markdown.description
                                        && <span>
                                            {dataProfile.Markdown.description}
                                        </span>
                                    }
                                </>
                                :
                                <>
                                    {this.rederTimeBooking(dataTime)}
                                </>
                            }
                        </div>
                    </div>

                </div>
                {isShowLinkDetail === true
                    && <div className='view-detail-doctor'>
                        <Link to={`/detail-doctor/${doctorId}`}>Xem thêm</Link>
                    </div>
                }

                {isShowPrice === true &&
                    <div className='price'>
                        <FormattedMessage id="patient.extra-infor-doctor.price" />
                        {dataProfile && dataProfile.Doctor_Infor && language === LANGUAGES.VI
                            &&
                            <NumberFormat
                                displayType="text"
                                value={dataProfile.Doctor_Infor.priceTypeData.valueVi}
                                thousandSeparator={true}
                                suffix={'VND'}
                                className='currency'
                            />}
                        {dataProfile && dataProfile.Doctor_Infor && language === LANGUAGES.EN
                            &&
                            <NumberFormat
                                displayType="text"
                                value={dataProfile.Doctor_Infor.priceTypeData.valueEn}
                                thousandSeparator={true}
                                suffix={'$'}
                                className='currency'
                            />}
                    </div>
                }

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
