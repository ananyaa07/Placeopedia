import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={1250}
		height={600}
		viewBox="0 0 476 250"
		backgroundColor="#f0f0f0"
		foregroundColor="#ecebeb"
		{...props}
		className="mt-5"
	>
		<rect x="49" y="8" rx="3" ry="3" width="88" height="6" />
		<rect x="49" y="20" rx="3" ry="3" width="286" height="5" />
		<rect x="49" y="30" rx="3" ry="3" width="285" height="5" />
		<rect x="363" y="8" rx="3" ry="3" width="57" height="14" />
		<circle cx="20" cy="20" r="20" />
		<rect x="363" y="26" rx="3" ry="3" width="42" height="8" />
		<rect x="49" y="59" rx="3" ry="3" width="88" height="6" />
		<rect x="49" y="70" rx="3" ry="3" width="286" height="5" />
		<rect x="49" y="80" rx="3" ry="3" width="285" height="5" />
		<rect x="363" y="58" rx="3" ry="3" width="57" height="14" />
		<circle cx="20" cy="70" r="20" />
		<rect x="363" y="76" rx="3" ry="3" width="42" height="8" />
		<rect x="49" y="111" rx="3" ry="3" width="88" height="6" />
		<rect x="49" y="122" rx="3" ry="3" width="286" height="5" />
		<rect x="49" y="132" rx="3" ry="3" width="285" height="5" />
		<rect x="363" y="110" rx="3" ry="3" width="57" height="14" />
		<circle cx="20" cy="122" r="20" />
		<rect x="363" y="128" rx="3" ry="3" width="42" height="8" />
	</ContentLoader>
);

export default MyLoader;
