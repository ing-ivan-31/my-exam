import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import axios from "axios";
import Table from "./components/Table/table";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            pokemons: [],
            errorMessage:''
        };
    }


    handleOnChange = (event) => {
        this.setState({pokemon: event.target.value});
        console.log(this.state.pokemon)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`;
        if (!this.state.pokemons.some(pokemon => pokemon.name === this.state.pokemon)) {
            axios
                .get(url)
                .then(response => {
                    const pokemonCatched =  response.data;
                    let pokemon = {
                        name: pokemonCatched.name,
                        id: pokemonCatched.id,
                        image: pokemonCatched.sprites.front_default
                    };

                    let newPokemons = [pokemon, ...this.state.pokemons];
                    this.setState({pokemons: newPokemons});
                    this.setState({errorMessage: ''})
                })
                .catch(error => {
                    this.setState({errorMessage: 'Pokemon not found'})
                })
        }
        else {
            this.setState({errorMessage: 'Pokemon exists'})
        }


    };

  render() {
    const {pokemons, errorMessage} =  this.state;
    return (
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1>Pokemons</h1>
            </div>
          </div>
          <div className="row">
            <Form onSubmit={this.handleSubmit} onChange={this.handleOnChange}/>
          </div>
            <div className="row center-align red-text text-darken-2">
                {errorMessage}
            </div>
          <div className="row center-align">
            <Table pokemons={pokemons} />
          </div>
        </div>
    );
  }

}

export default App;
