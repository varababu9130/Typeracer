import React from 'react'

const Results = ({correctResults, wrongResults, countCorrect}) => {
  return (
    <div className='results'>
        <div className='title'>
            <p>Correct answers: {countCorrect}</p>
        </div>
        <div className='resultsContainer'>
            <div className='correctResults'>
                {correctResults.map((correctWord, index) => (
                    <div key={index} className="row">
                        <p>{correctWord}</p>
                    </div>
                ))}
            </div>
            <div className='wrongResults'>
                {wrongResults.map((wrongword, index) => (
                    <div key={index} className="row">
                        <p>{wrongword}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Results