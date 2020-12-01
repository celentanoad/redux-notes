import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const NewNote = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.name.value;
        const message = e.name.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        };
        props.dispatch({
            type: 'ADD_NOTE',
            data
        });
        e.name.value = '';
        e.name.value = '';
    }
    return ( 
        <div className="note-container">
            <h1 className="note-heading">Add Note</h1>
            <form className="form" onSubmig={handleSubmit}>
                <input required type="text" placeholder="Enter Note Title" name="title"/>
                <textarea required rows="5" cols="28" placeholder="Enter Note" name="message"/>
                <button>Add Note</button>
            </form>
        </div>
     );
}
 
export default connect()(NewNote);