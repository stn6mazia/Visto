import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';


class App extends Component {

  constructor(){
    super();
    this.state = {lista : [], name:'', email:'', message:'', _id:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }


  componentDidMount(){
    $.ajax({
      url:"http://localhost:3001/messages",
      dataType: 'json',
      success:function(resposta){
        this.setState({lista:resposta});
      }.bind(this)
    });
  }


  enviaForm(evento){
    evento.preventDefault();

    $.ajax({
      url:"http://localhost:3001/messages",
      contentType: "application/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({name:this.state.nome,email:this.state.email,message:this.state.message}),
      success:(resposta) => {
        console.log("ok");
        this.componentDidMount();
      },
      error:(resposta) => {
        console.log("erro");
      },
    });
  }



  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  setEmail(evento){
    this.setState({email:evento.target.value});
  }

  setMessage(evento){
    this.setState({message:evento.target.value});
  }

  setId(evento){
    this.setState({_id:evento.target.value});
  }


    deleteMessage(evt, autor){
    evt.preventDefault();

    $.ajax({
      url:`http://localhost:3001/messages/${autor._id}`,
      contentType: "application/json",
      dataType: "json",
      type: "delete",
      success:(resposta) => {
        console.log("ok");
        this.componentDidMount();
      },
      error:(resposta) => {
        console.log("erro");
      },
    });
  }






render() {
return (
<div id="layout">

    <a href="#menu" id="menuLink" className="menu-link">

        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="./App">Nicolópolis</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item, pure-menu-link">Home</li>
            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1>Test Front</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text" name="nome" value={this.state.nome}  onChange={this.setNome}/>
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={this.state.email}  onChange={this.setEmail}/>
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="senha">Message</label>
                    <input id="message" type="text" name="message" value={this.state.message} onChange={this.setMessage}/>
                  </div>
                  <div className="pure-control-group">
                    <br></br>
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary" onClick={(evento) => this.enviaForm(evento)}>Post</button>
                  </div>
                </form>

              </div>
              <div>
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>ID</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.lista.map((autor) => {
                        return(
                            <tr key={autor._id}>
                              <td>{autor.name}</td>
                              <td>{autor.email}</td>
                              <td>{autor.message}</td>
                              <td>{autor._id}</td>
                              <td><button type="button" className="deletar" onClick={(evt) => this.deleteMessage(evt, autor)}>Delete</button></td>
                            </tr>
                          );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>


</div>
    );
  }
}

export default App;
