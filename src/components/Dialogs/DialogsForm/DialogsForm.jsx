import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";


const maxLength50 = maxLengthCreator(100)


const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter Message'
                   validate={[required, maxLength50]}
                   component={Textarea}
                   name='newMessageBody'
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};




export default reduxForm({form:'dialog-add-message-form'}) (DialogsForm);