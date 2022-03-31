import React from 'react';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

export function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search({handleAdd, setName, setDate }) {

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" onChange={(e) => {
						e.preventDefault();
						setName(e.target.value);
					}}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" onChange={(e) => {
						e.preventDefault();
						setDate(e.target.value);
					}} />
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={() => {
				handleAdd();
				const name = document.getElementById('studentName');
				const date = document.getElementById('joiningDate');
				name.value = '';
				date.value = '';
			}}>Add</button>
		</div>
	);
}

export default Search;
