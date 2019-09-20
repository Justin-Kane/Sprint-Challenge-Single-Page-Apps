import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import {Link} from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results);
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return(
        <Link to={`/components/${character.id}`}>
          <CharacterCard key={character.id} char={character} />
        </Link>
        )
      })} 
    </section>
  );
}
