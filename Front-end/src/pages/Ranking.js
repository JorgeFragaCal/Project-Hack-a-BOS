import React from 'react';

export function Ranking({ title, userName, id }) {
	return (
		<React.Fragment>
			<section id="ranking-1" key={id}>
				<i className="fa fa-trophy fa-3x" />
				<h3>{title}</h3>
				<ul>
					<li>
						<i className="fa fa-trophy fa-2x" /> {userName}
					</li>
					<li>
						<i className="fa fa-trophy fa-lg" /> {userName}
					</li>
					<li>
						<i className="fa fa-trophy fa-sm" /> {userName}
					</li>
					<li>{userName}</li>
					<li>{userName}</li>
					<li>{userName}</li>
				</ul>
			</section>
		</React.Fragment>
	);
}
