import React from 'react';

const Table = ({pokemons}) => {
    let pokemonsHtml;

    if (pokemons.length > 0) {
        pokemonsHtml = pokemons.map(pokemon => {
            return (
                <tr key={pokemon.id}>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.name}</td>
                    <td> <img src={pokemon.image} alt={pokemon.name}/> </td>
                </tr>
            );
        });
    }
    else {
        pokemonsHtml = (
                <tr className="center-align">
                    <td colSpan="3" className="center-align">No pokemon captured yet</td>
                </tr>);
    }



    return (
        <table className="striped">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>image</th>
            </tr>
            </thead>

            <tbody>
            {pokemonsHtml}
            </tbody>
        </table>


    );
};

export default  Table;
