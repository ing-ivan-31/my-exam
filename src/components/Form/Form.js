import React, {Component} from 'react';

class Form extends Component {

    render() {
         const {onSubmit, onChange} = this.props;

        return (
            <form onSubmit={onSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">textsms</i>
                        <input type="text" id="autocomplete-input" className="autocomplete" onChange={onChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Find it
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;
