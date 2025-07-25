/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
			id,
			anchorMenuEnabled,
			anchorMenuAtAGlance,
			anchorMenuChangeMajorRequirements,
			anchorMenuApplicationRequirements,
			anchorMenuNextSteps,
			anchorMenuAffordingCollege,
			anchorMenuFlexibleDegreeOptions,
			anchorMenuCareerOutlook,
			anchorMenuExampleCareers,
			anchorMenuGlobalOpportunity,
			anchorMenuAttendOnline,
			anchorMenuWhyChooseAsu,
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
			nextStepsCardsLearnMoreIconPrefix,
			nextStepsCardsLearnMoreIconName,
			nextStepsCardsLearnMoreTitle,
			nextStepsCardsLearnMoreContent,
			nextStepsCardsLearnMoreButtonLinkLabel,
			nextStepsCardsLearnMoreButtonLinkAriaLabel,
			nextStepsCardsLearnMoreButtonLinkColor,
			nextStepsCardsLearnMoreButtonLinkHref,
			nextStepsCardsApplyIconPrefix,
			nextStepsCardsApplyIconName,
			nextStepsCardsApplyTitle,
			nextStepsCardsApplyContent,
			nextStepsCardsApplyButtonLinkLabel,
			nextStepsCardsApplyButtonLinkAriaLabel,
			nextStepsCardsApplyButtonLinkColor,
			nextStepsCardsApplyButtonLinkHref,
			nextStepsCardsVisitIconPrefix,
			nextStepsCardsVisitIconName,
			nextStepsCardsVisitTitle,
			nextStepsCardsVisitContent,
			nextStepsCardsVisitButtonLinkLabel,
			nextStepsCardsVisitButtonLinkAriaLabel,
			nextStepsCardsVisitButtonLinkColor,
			nextStepsCardsVisitButtonLinkHref,
			affordingCollegeHide,
			flexibleDegreeOptionsHide,
			careerOutlookHide,
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
			whyChooseAsuCardsFacultyButtonLabel,
			whyChooseAsuCardsFacultyButtonColor,
			whyChooseAsuCardsFacultyButtonHref,
			whyChooseAsuCardsFacultyImageUrl,
			whyChooseAsuCardsFacultyAltText,
			whyChooseAsuCardsProgramsTitle,
			whyChooseAsuCardsProgramsText,
			whyChooseAsuCardsProgramsButtonLabel,
			whyChooseAsuCardsProgramsButtonColor,
			whyChooseAsuCardsProgramsButtonHref,
			whyChooseAsuCardsProgramsImageUrl,
			whyChooseAsuCardsProgramsAltText,
			whyChooseAsuCardsResearchTitle,
			whyChooseAsuCardsResearchText,
			whyChooseAsuCardsResearchButtonLabel,
			whyChooseAsuCardsResearchButtonColor,
			whyChooseAsuCardsResearchButtonHref,
			whyChooseAsuCardsResearchImageUrl,
			whyChooseAsuCardsResearchAltText,
			whyChooseAsuCardsInclusionTitle,
			whyChooseAsuCardsInclusionText,
			whyChooseAsuCardsInclusionButtonLabel,
			whyChooseAsuCardsInclusionButtonColor,
			whyChooseAsuCardsInclusionButtonHref,
			whyChooseAsuCardsInclusionImageUrl,
			whyChooseAsuCardsInclusionAltText,
			whyChooseAsuCardsMentorsTitle,
			whyChooseAsuCardsMentorsText,
			whyChooseAsuCardsMentorsButtonLabel,
			whyChooseAsuCardsMentorsButtonColor,
			whyChooseAsuCardsMentorsButtonHref,
			whyChooseAsuCardsMentorsImageUrl,
			whyChooseAsuCardsMentorsAltText,
			whyChooseAsuCardsHonorsTitle,
			whyChooseAsuCardsHonorsText,
			whyChooseAsuCardsHonorsButtonLabel,
			whyChooseAsuCardsHonorsButtonColor,
			whyChooseAsuCardsHonorsButtonHref,
			whyChooseAsuCardsHonorsImageUrl,
			whyChooseAsuCardsHonorsAltText,
			attendOnlineHide,
			attendOnlineImageUrl,
			attendOnlineAltText,
			programContactInfoHide,
			programContactInfoDepartmentText,
			programContactInfoDepartmentUrl,
			programContactInfoEmailText,
			programContactInfoEmailUrl,
			professionalLicensureHide
		},
		className,
	} = props;

	return (
		<div
		id={`asu-degree-details-container-${ id }`}
		{...useBlockProps.save()}
			data-anchorMenuEnabled={ anchorMenuEnabled }
			data-anchorMenuAtAGlance={ anchorMenuAtAGlance }
			data-anchorMenuChangeMajorRequirements={ anchorMenuChangeMajorRequirements }
			data-anchorMenuApplicationRequirements={ anchorMenuApplicationRequirements }
			data-anchorMenuNextSteps={ anchorMenuNextSteps }
			data-anchorMenuAffordingCollege={ anchorMenuAffordingCollege }
			data-anchorMenuFlexibleDegreeOptions={ anchorMenuFlexibleDegreeOptions }
			data-anchorMenuCareerOutlook={ anchorMenuCareerOutlook }
			data-anchorMenuExampleCareers={ anchorMenuExampleCareers }
			data-anchorMenuGlobalOpportunity={ anchorMenuGlobalOpportunity }
			data-anchorMenuAttendOnline={ anchorMenuAttendOnline }
			data-anchorMenuWhyChooseAsu={ anchorMenuWhyChooseAsu }
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
			data-nextStepsCardsLearnMoreIconPrefix={ nextStepsCardsLearnMoreIconPrefix }
			data-nextStepsCardsLearnMoreIconName={ nextStepsCardsLearnMoreIconName }
			data-nextStepsCardsLearnMoreTitle={ nextStepsCardsLearnMoreTitle }
			data-nextStepsCardsLearnMoreContent={ nextStepsCardsLearnMoreContent }
			data-nextStepsCardsLearnMoreButtonLinkLabel={ nextStepsCardsLearnMoreButtonLinkLabel }
			data-nextStepsCardsLearnMoreButtonLinkAriaLabel={ nextStepsCardsLearnMoreButtonLinkAriaLabel }
			data-nextStepsCardsLearnMoreButtonLinkColor={ nextStepsCardsLearnMoreButtonLinkColor }
			data-nextStepsCardsLearnMoreButtonLinkHref={ nextStepsCardsLearnMoreButtonLinkHref }
			data-nextStepsCardsApplyIconPrefix={ nextStepsCardsApplyIconPrefix }
			data-nextStepsCardsApplyIconName={ nextStepsCardsApplyIconName }
			data-nextStepsCardsApplyTitle={ nextStepsCardsApplyTitle }
			data-nextStepsCardsApplyContent={ nextStepsCardsApplyContent }
			data-nextStepsCardsApplyButtonLinkLabel={ nextStepsCardsApplyButtonLinkLabel }
			data-nextStepsCardsApplyButtonLinkAriaLabel={ nextStepsCardsApplyButtonLinkAriaLabel }
			data-nextStepsCardsApplyButtonLinkColor={ nextStepsCardsApplyButtonLinkColor }
			data-nextStepsCardsApplyButtonLinkHref={ nextStepsCardsApplyButtonLinkHref }
			data-nextStepsCardsVisitIconPrefix={ nextStepsCardsVisitIconPrefix }
			data-nextStepsCardsVisitIconName={ nextStepsCardsVisitIconName }
			data-nextStepsCardsVisitTitle={ nextStepsCardsVisitTitle }
			data-nextStepsCardsVisitContent={ nextStepsCardsVisitContent }
			data-nextStepsCardsVisitButtonLinkLabel={ nextStepsCardsVisitButtonLinkLabel }
			data-nextStepsCardsVisitButtonLinkAriaLabel={ nextStepsCardsVisitButtonLinkAriaLabel }
			data-nextStepsCardsVisitButtonLinkColor={ nextStepsCardsVisitButtonLinkColor }
			data-nextStepsCardsVisitButtonLinkHref={ nextStepsCardsVisitButtonLinkHref }
			data-affordingCollegeHide={ affordingCollegeHide }
			data-flexibleDegreeOptionsHide={ flexibleDegreeOptionsHide }
			data-careerOutlookHide={ careerOutlookHide }
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
			data-whyChooseAsuCardsFacultyButtonLabel={ whyChooseAsuCardsFacultyButtonLabel }
			data-whyChooseAsuCardsFacultyButtonColor={ whyChooseAsuCardsFacultyButtonColor }
			data-whyChooseAsuCardsFacultyButtonHref={ whyChooseAsuCardsFacultyButtonHref }
			data-whyChooseAsuCardsFacultyImageUrl={ whyChooseAsuCardsFacultyImageUrl }
			data-whyChooseAsuCardsFacultyAltText={ whyChooseAsuCardsFacultyAltText }
			data-whyChooseAsuCardsProgramsTitle={ whyChooseAsuCardsProgramsTitle }
			data-whyChooseAsuCardsProgramsText={ whyChooseAsuCardsProgramsText }
			data-whyChooseAsuCardsProgramsButtonLabel={ whyChooseAsuCardsProgramsButtonLabel }
			data-whyChooseAsuCardsProgramsButtonColor={ whyChooseAsuCardsProgramsButtonColor }
			data-whyChooseAsuCardsProgramsButtonHref={ whyChooseAsuCardsProgramsButtonHref }
			data-whyChooseAsuCardsProgramsImageUrl={ whyChooseAsuCardsProgramsImageUrl }
			data-whyChooseAsuCardsProgramsAltText={ whyChooseAsuCardsProgramsAltText }
			data-whyChooseAsuCardsResearchTitle={ whyChooseAsuCardsResearchTitle }
			data-whyChooseAsuCardsResearchText={ whyChooseAsuCardsResearchText }
			data-whyChooseAsuCardsResearchButtonLabel={ whyChooseAsuCardsResearchButtonLabel }
			data-whyChooseAsuCardsResearchButtonColor={ whyChooseAsuCardsResearchButtonColor }
			data-whyChooseAsuCardsResearchButtonHref={ whyChooseAsuCardsResearchButtonHref }
			data-whyChooseAsuCardsResearchImageUrl={ whyChooseAsuCardsResearchImageUrl }
			data-whyChooseAsuCardsResearchAltText={ whyChooseAsuCardsResearchAltText }
			data-whyChooseAsuCardsInclusionTitle={ whyChooseAsuCardsInclusionTitle }
			data-whyChooseAsuCardsInclusionText={ whyChooseAsuCardsInclusionText }
			data-whyChooseAsuCardsInclusionButtonLabel={ whyChooseAsuCardsInclusionButtonLabel }
			data-whyChooseAsuCardsInclusionButtonColor={ whyChooseAsuCardsInclusionButtonColor }
			data-whyChooseAsuCardsInclusionButtonHref={ whyChooseAsuCardsInclusionButtonHref }
			data-whyChooseAsuCardsInclusionImageUrl={ whyChooseAsuCardsInclusionImageUrl }
			data-whyChooseAsuCardsInclusionAltText={ whyChooseAsuCardsInclusionAltText }
			data-whyChooseAsuCardsMentorsTitle={ whyChooseAsuCardsMentorsTitle }
			data-whyChooseAsuCardsMentorsText={ whyChooseAsuCardsMentorsText }
			data-whyChooseAsuCardsMentorsButtonLabel={ whyChooseAsuCardsMentorsButtonLabel }
			data-whyChooseAsuCardsMentorsButtonColor={ whyChooseAsuCardsMentorsButtonColor }
			data-whyChooseAsuCardsMentorsButtonHref={ whyChooseAsuCardsMentorsButtonHref }
			data-whyChooseAsuCardsMentorsImageUrl={ whyChooseAsuCardsMentorsImageUrl }
			data-whyChooseAsuCardsMentorsAltText={ whyChooseAsuCardsMentorsAltText }
			data-whyChooseAsuCardsHonorsTitle={ whyChooseAsuCardsHonorsTitle }
			data-whyChooseAsuCardsHonorsText={ whyChooseAsuCardsHonorsText }
			data-whyChooseAsuCardsHonorsButtonLabel={ whyChooseAsuCardsHonorsButtonLabel }
			data-whyChooseAsuCardsHonorsButtonColor={ whyChooseAsuCardsHonorsButtonColor }
			data-whyChooseAsuCardsHonorsButtonHref={ whyChooseAsuCardsHonorsButtonHref }
			data-whyChooseAsuCardsHonorsImageUrl={ whyChooseAsuCardsHonorsImageUrl }
			data-whyChooseAsuCardsHonorsAltText={ whyChooseAsuCardsHonorsAltText }
			data-attendOnlineHide={ attendOnlineHide }
			data-attendOnlineImageUrl={ attendOnlineImageUrl }
			data-attendOnlineAltText={ attendOnlineAltText }
			data-programContactInfoHide={ programContactInfoHide }
			data-programContactInfoDepartmentText={ programContactInfoDepartmentText }
			data-programContactInfoDepartmentUrl={ programContactInfoDepartmentUrl }
			data-programContactInfoEmailText={ programContactInfoEmailText }
			data-programContactInfoEmailUrl={ programContactInfoEmailUrl }
			data-professionalLicensureHide={ professionalLicensureHide }
		></div>
	);
};

export default save;
