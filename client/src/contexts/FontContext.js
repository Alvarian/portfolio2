import React, { createContext, useState, useEffect } from 'react';


export const FontContext = createContext();

function FontContextProvider(props) {
	const [font, setFont] = useState('guuh');

	return (
		<FontContext.Provider value={{ font, setFont }}>
			{props.children}
		</FontContext.Provider>
	)
}

export default FontContextProvider;