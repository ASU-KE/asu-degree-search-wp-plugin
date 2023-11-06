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
			dataSourceCert,
			defaultView,
			degreesPerPage,
			heroImageUrl,
			heroAltText,
			heroImageSize,
			introContent,
			programList,
			hasFilters,
			hasSearchBar,
			actionApplyNowUrl,
			enableIntroContent,
			introContentType,
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
			data-dataSourceCert={ dataSourceCert }
			data-defaultView={ defaultView }
			data-degreesPerPage={ degreesPerPage }
			data-heroImageUrl={ heroImageUrl }
			data-heroAltText={ heroAltText }
			data-heroImageSize={ heroImageSize }
			data-introContent={ introContent }
			data-programList={ programList }
			data-hasFilters={ hasFilters }
			data-hasSearchBar={ hasSearchBar }
			data-actionApplyNowUrl={ actionApplyNowUrl }
			data-enableIntroContent={ enableIntroContent }
			data-introContentType={ introContentType }
		></div>
	);
};

export default save;
