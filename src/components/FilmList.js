import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render(){

        const filmArray = this.props.films.map(film => {
            return (
            <Film name={film.name} key={film.id} url={film.url}>{film.name}</Film>
            )
        })
        
        return(
        <>
        <h2>Upcoming Film Releases for UK</h2>
        {filmArray}
        <h2>View more upcoming releases >></h2>
        </>
        )
    }
}

export default FilmList;