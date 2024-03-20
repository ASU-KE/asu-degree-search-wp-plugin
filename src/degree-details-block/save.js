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
			heroHide,
			heroImageUrl,
			heroAltText,
			heroImageSize,
			introContentImageUrl,
			introContentImageAltText,
			introContentHideMarketText,
			introContentHideProgramDesc,
			introContentHideRequiredCourses,
			atAGlanceHide,
			atAGlanceApplicationRequirementsHide,
			atAGlanceChangeMajorRequirementsHide,
			nextStepsHide,
			affordingCollegeHide,
			flexibleDegreeOptionsHide,
			careerOutlookImageUrl,
			careerOutlookImageAltText,
			exampleCareersHide,
			globalOpportunityHide,
			globalOpportunityImageUrl,
			globalOpportunityAltText,
			whyChooseAsuHide,
			whyChooseAsuCardsSectionIntroText,
			whyChooseAsuCardsFacultyTitle,
			whyChooseAsuCardsFacultyText,
			whyChooseAsuCardsFacultyImageUrl,
			whyChooseAsuCardsFacultyAltText,
			whyChooseAsuCardsProgramsImageUrl,
			whyChooseAsuCardsProgramsAltText,
			whyChooseAsuCardsResearchImageUrl,
			whyChooseAsuCardsResearchAltText,
			whyChooseAsuCardsInclusionImageUrl,
			whyChooseAsuCardsInclusionAltText,
			whyChooseAsuCardsMentorsImageUrl,
			whyChooseAsuCardsMentorsAltText,
			whyChooseAsuCardsHonorsImageUrl,
			whyChooseAsuCardsHonorsAltText,
			attendOnlineHide,
			attendOnlineImageUrl,
			attendOnlineAltText
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
			data-heroHide={ heroHide }
			data-heroImageUrl={ heroImageUrl }
			data-heroAltText={ heroAltText }
			data-heroImageSize={ heroImageSize }
			data-introContentImageUrl={ introContentImageUrl }
			data-introContentImageAltText={ introContentImageAltText }
			data-introContentHideMarketText={ introContentHideMarketText }
			data-introContentHideProgramDesc={ introContentHideProgramDesc }
			data-introContentHideRequiredCourses={ introContentHideRequiredCourses }
			data-atAGlanceHide={ atAGlanceHide }
			data-atAGlanceApplicationRequirementsHide={ atAGlanceApplicationRequirementsHide }
			data-atAGlanceChangeMajorRequirementsHide={ atAGlanceChangeMajorRequirementsHide }
			data-nextStepsHide={ nextStepsHide }
			data-affordingCollegeHide={ affordingCollegeHide }
			data-flexibleDegreeOptionsHide={ flexibleDegreeOptionsHide }
			data-careerOutlookImageUrl={ careerOutlookImageUrl }
			data-careerOutlookImageAltText={ careerOutlookImageAltText }
			data-exampleCareersHide={ exampleCareersHide }
			data-globalOpportunityHide={ globalOpportunityHide }
			data-globalOpportunityImageUrl={ globalOpportunityImageUrl }
			data-globalOpportunityAltText={ globalOpportunityAltText }
			data-whyChooseAsuHide={ whyChooseAsuHide }
			data-whyChooseAsuCardsSectionIntroText={ whyChooseAsuCardsSectionIntroText }
			data-whyChooseAsuCardsFacultyTitle={ whyChooseAsuCardsFacultyTitle }
			data-whyChooseAsuCardsFacultyText={ whyChooseAsuCardsFacultyText }
			data-whyChooseAsuCardsFacultyImageUrl={ whyChooseAsuCardsFacultyImageUrl }
			data-whyChooseAsuCardsFacultyAltText={ whyChooseAsuCardsFacultyAltText }
			data-whyChooseAsuCardsProgramsImageUrl={ whyChooseAsuCardsProgramsImageUrl }
			data-whyChooseAsuCardsProgramsAltText={ whyChooseAsuCardsProgramsAltText }
			data-whyChooseAsuCardsResearchImageUrl={ whyChooseAsuCardsResearchImageUrl }
			data-whyChooseAsuCardsResearchAltText={ whyChooseAsuCardsResearchAltText }
			data-whyChooseAsuCardsInclusionImageUrl={ whyChooseAsuCardsInclusionImageUrl }
			data-whyChooseAsuCardsInclusionAltText={ whyChooseAsuCardsInclusionAltText }
			data-whyChooseAsuCardsMentorsImageUrl={ whyChooseAsuCardsMentorsImageUrl }
			data-whyChooseAsuCardsMentorsAltText={ whyChooseAsuCardsMentorsAltText }
			data-whyChooseAsuCardsHonorsImageUrl={ whyChooseAsuCardsHonorsImageUrl }
			data-whyChooseAsuCardsHonorsAltText={ whyChooseAsuCardsHonorsAltText }
			data-attendOnlineHide={ attendOnlineHide }
			data-attendOnlineImageUrl={ attendOnlineImageUrl }
			data-attendOnlineAltText={ attendOnlineAltText }
		></div>
	);
};

export default save;
