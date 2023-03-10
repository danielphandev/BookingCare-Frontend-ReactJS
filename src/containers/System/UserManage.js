import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUSers } from '../../services/userService';
import { Fragment } from 'react';
import ModalUser from './ModalUser';
class UserManage extends Component {

    /** Life cycle
     * Run component:
     * 1.Run constructor -> init state
     * 2. DidMount (muốn gán giá trị cho state nào đấy - set state)
     * 3. Render
     * 
    */

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }



    async componentDidMount() {
        let response = await getAllUSers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
        console.log('get user from node.js', response);
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                />
                <div className='title text-center'>Manage users</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    ><i className='fas fa-plus me-1'></i>Add new user</button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className='fas fa-pencil-alt'></i></button>
                                            <button className='btn-delete'><i className='fas fa-trash'></i></button>
                                        </td>
                                    </tr>

                                )
                            })

                            }
                        </tbody>


                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
