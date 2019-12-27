import React, { useRef } from 'react';

export function Search({ onSearchChange }) {
	const input = useRef();

	return (
		<section id="search-aside">
			<input ref={input} type="text" placeholder="Search for city" />
			<button class="button-search" onClick={() => onSearchChange(input.current.value)}>
				<i className="fa fa-search" />
			</button>
		</section>
	);
}
