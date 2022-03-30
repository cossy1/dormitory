import React, {useEffect} from 'react';

function ResidentsList({nameList, setErr}) {

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{
					nameList.map(e => (
								<li className="slide-up-fade-in" key={e.name}>
									{e.name}
								</li>
							))
				}

			</ul>
		</div>
	);
}

export default ResidentsList;
