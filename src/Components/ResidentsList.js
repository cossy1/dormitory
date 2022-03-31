import React from 'react';

function ResidentsList({nameList}) {

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{
					nameList.map((e, index) => (
						<li className="slide-up-fade-in" key={index}>
							{e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()}
						</li>
					))
					}
			</ul>
		</div>
	);
}

export default ResidentsList;
