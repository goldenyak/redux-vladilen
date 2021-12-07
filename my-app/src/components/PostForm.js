import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
               <div className='form-group'>
                   <label htmlFor='exampleInputPassword1'>Заголовок поста</label>
                   <input type='text' className='form-control' id='exampleInputPassword1'/>
               </div>
            </form>
        )
    }
}