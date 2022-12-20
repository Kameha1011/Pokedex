import React, { Component } from 'react';
import '../stylesheets/Pokecard.css';

class Pokecard extends Component {
    render() {
        const { name, type, baseExp, sprite } = this.props;
        return (           
            <div className='Pokecard'>
                <img src={sprite} alt={`${name} Sprite`} className='Pokecard-img'></img>
                <h2>{name}</h2>
                <p >Type: &nbsp;  
                    <span className={`Pokecard-type-${type}`}>
                        {type}
                    </span>
             </p>
                <p>Base EXP: {baseExp}</p>
            </div>
        )
    }
}

export default Pokecard;