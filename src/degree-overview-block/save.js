/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
			actionUrls,
			defaultView,
			degreesPerPage,
			hero,
			introContent,
			programList,
			hasFilters,
			hasSearchBar,
		},
		className,
	} = props;

	return (
		<div
		id="asu-degree-overview-container"
		{...useBlockProps.save()}
			data-actionurls={ 'a string' }
			data-defaultView={ defaultView }
			data-degreesPerPage={ degreesPerPage }
			data-hero={ hero }
			data-introContent={ introContent }
			data-programList={ programList }
			data-hasFilters={ hasFilters }
			data-hasSearchBar={ hasSearchBar }
		></div>
	);
};

export default save;
