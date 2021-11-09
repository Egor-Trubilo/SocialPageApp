import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }
    activateEditMode =() => {
        this.state.editMode = true;
    }
    render() {
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