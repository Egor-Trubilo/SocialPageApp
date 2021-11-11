import React from "react";
import Preloader from "../../common/Preolader/Preloader";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }
    activateEditMode =() => {
        this.state.editMode = true;
    }

    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        debugger;
        return (
            <div>
                {!this.props.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} > {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status}/>
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;