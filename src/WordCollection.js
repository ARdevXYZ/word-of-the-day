import React from 'react'
import PropTypes from 'prop-types'
import { Word } from './Word'
import './App.css';

class WordCollection extends React.Component {
	
	render() {
		const { words } = this.props
		return (
			<section>

				{words.map(
					(word, i) => 
						<Word 
							key={i}
							title={word.title}/>
				)}
				
			</section>
		)
	}
}

WordCollection.propTypes = {
	words: PropTypes.array
}

Word.propTypes = {
	title: PropTypes.string,
	definition: PropTypes.string
}

export default WordCollection