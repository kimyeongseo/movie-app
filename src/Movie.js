import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieWrap = styled.div`
background-color: pink;`;

function Movie({ year, title, summary, poster, genres }) {
    return (
        <MovieWrap>
            <div className='movie'>
                <img src={poster} alt={title} title={title} className='movie__poster' />
                <div className='movie_data'>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className='movie__year'>{year}</h5>
                    <p className='movie__summary'>{summary}</p>
                    <ul className='ganres'>
                        {genres.map((genre, currentItemNumber) => (
                            <li key={currentItemNumber} className='genres__genre'>
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MovieWrap>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movie;
