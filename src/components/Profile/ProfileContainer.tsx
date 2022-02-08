import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { userAPI } from "../../api/api";

// UI

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2';
        }
       userAPI.profile(userId)
            .then(data => {
            this.props.setUserProfile(data.data)
        })

    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}
//connect

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
};

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export const ProfileConnectContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
})(withUrlDataContainerComponent);

//type

type ProfileContainerType = {
    profile: ProfileType,
    setUserProfile: (profile: ProfileType) => void,
}

type MapStateToPropsType = {
    profile: ProfileType,
}

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = ProfileContainerType & MapStateToPropsType