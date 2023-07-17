/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
			actionUrls,
			dataSourceBlacklistAcadPlans,
			dataSourceCollegeAcadOrg,
			dataSourceDepartmentCode,
			dataSourceProgram,
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
			data-dataSourceBlacklistAcadPlans={ dataSourceBlacklistAcadPlans }
			data-dataSourceCollegeAcadOrg={ dataSourceCollegeAcadOrg }
			data-dataSourceDepartmentCode={ dataSourceDepartmentCode }
			data-dataSourceProgram={ dataSourceProgram }
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
