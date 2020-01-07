import React from 'react'
import './index.css'

export const Word = ({title="No Title Provided", definition= "View Definition", searchURL="https://www.google.com/search?q=", freeBookmark}) => {
	return (
		<div className="word-card">
			<h2>{title}</h2>
			<p>          
				<a
					className="Word-link"
					href={searchURL+title}
					target="_blank"
					rel="noopener noreferrer"
					>
					{definition}
				</a>
		  	</p>
		</div>
	)
}