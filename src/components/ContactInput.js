import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    //Inisialisasi State
    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event){
    this.setState((prevState) => {
        return{
            ...prevState,
            name: event.target.value
        };
    });
  }

  onTagChangeEventHandler(event){
    this.setState((prevState) => {
        return{
            ...prevState,
            tag: event.target.value
        };
    });
  }

  onSubmitEventHandler(event){
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" onChange={this.onNameChangeEventHandler}/>
        <input type="text" placeholder="Tag" onChange={this.onTagChangeEventHandler}/>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
