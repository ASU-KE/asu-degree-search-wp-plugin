/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
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
			hasFilters,
			hasSearchBar,
			actionApplyNowUrl,
			enableIntroContent,
			introContentType,
			introContentTitleText,
			introContentContentsText,
			introContentPhotoGridImagesUrl1,
			introContentPhotoGridImagesUrl2,
			introContentPhotoGridImagesUrl3,
			introContentPhotoGridImagesUrl4,
		},
		className,
	} = props;

	return (
		<div
		id="asu-degree-overview-container"
		{...useBlockProps.save()}
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
			data-hasFilters={ hasFilters }
			data-hasSearchBar={ hasSearchBar }
			data-actionApplyNowUrl={ actionApplyNowUrl }
			data-enableIntroContent={ enableIntroContent }
			data-introContentType={ introContentType }
			data-introContentTitleText={ introContentTitleText }
			data-introContentContentsText={ introContentContentsText }
			data-introContentPhotoGridImagesUrl1={ introContentPhotoGridImagesUrl1 }
			data-introContentPhotoGridImagesUrl2={ introContentPhotoGridImagesUrl2 }
			data-introContentPhotoGridImagesUrl3={ introContentPhotoGridImagesUrl3 }
			data-introContentPhotoGridImagesUrl4={ introContentPhotoGridImagesUrl4 }
		></div>
	);
};

export default save;
