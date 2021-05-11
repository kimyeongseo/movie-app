import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieWrap = styled.div`
.movie {
    width: 45%;
    background-color: white;
    margin: 50px 0px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }

.movie__poster{
    position: relative;
    top: -50px;
    max-width: 120px;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie__title,
.movie__year {
  margin: 0;
  font-weight: 300;
}

.movie__title {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
  }
  
.movie__genres {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    margin: 5px 0px;
  }
  
  .movie__genres li,
  .movie .movie__year {
    margin-right: 10px;
    font-size: 14px;
  }
`;

function Movie({ year, title, summary, poster, genres }) {
    return (
        <MovieWrap>
            <div className='movie'>
                <img src={poster} alt={title} title={title} className='movie__poster' />
                <div className='movie_data'>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className='movie__year'>{year}</h5>
                    <p className='movie__summary'>{summary}</p>
                    <ul className='movie__ganres'>
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
