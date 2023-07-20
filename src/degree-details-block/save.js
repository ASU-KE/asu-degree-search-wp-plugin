/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
			anchorMenuEnabled,
			anchorMenuAtAGlance,
			anchorMenuApplicationRequirements,
			anchorMenuChangeMajorRequirements,
			anchorMenuNextSteps,
			anchorMenuAffordingCollege,
			anchorMenuFlexibleDegreeOptions,
			anchorMenuCareerOutlook,
			anchorMenuExampleCareers,
			anchorMenuGlobalOpportunity,
			anchorMenuProgramContactInfo,
			dataSourceAcadPlan,
			heroImageUrl,
			heroAltText,
			heroImageSize,
			introContentImageUrl,
			introContentImageAltText,
			introContentHideMarketText,
			introContentHideProgramDesc,
			introContentHideRequiredCourses
		},
		className,
	} = props;

	return (
		<div
		id="asu-degree-details-container"
		{...useBlockProps.save()}
			data-anchorMenuEnabled={ anchorMenuEnabled }
			data-anchorMenuAtAGlance={ anchorMenuAtAGlance }
			data-anchorMenuApplicationRequirements={ anchorMenuApplicationRequirements }
			data-anchorMenuChangeMajorRequirements={ anchorMenuChangeMajorRequirements }
			data-anchorMenuNextSteps={ anchorMenuNextSteps }
			data-anchorMenuAffordingCollege={ anchorMenuAffordingCollege }
			data-anchorMenuFlexibleDegreeOptions={ anchorMenuFlexibleDegreeOptions }
			data-anchorMenuCareerOutlook={ anchorMenuCareerOutlook }
			data-anchorMenuExampleCareers={ anchorMenuExampleCareers }
			data-anchorMenuGlobalOpportunity={ anchorMenuGlobalOpportunity }
			data-anchorMenuProgramContactInfo={ anchorMenuProgramContactInfo }
			data-dataSourceAcadPlan={ dataSourceAcadPlan }
			data-heroImageUrl={ heroImageUrl }
			data-heroAltText={ heroAltText }
			data-heroImageSize={ heroImageSize }
			data-introContentImageUrl={ introContentImageUrl }
			data-introContentImageAltText={ introContentImageAltText }
			data-introContentHideMarketText={ introContentHideMarketText }
			data-introContentHideProgramDesc={ introContentHideProgramDesc }
			data-introContentHideRequiredCourses={ introContentHideRequiredCourses }
		></div>
	);
};

export default save;
