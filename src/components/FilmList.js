import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render(){
        
        return(<>
        <h2>here's the film list</h2>
        <Film></Film>
        </>
        )
    }
}

export default FilmList;