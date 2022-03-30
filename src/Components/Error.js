import React from 'react';

function Error({err}) {
	return(
		err && <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{err}</div>
	);

}

export default Error;
