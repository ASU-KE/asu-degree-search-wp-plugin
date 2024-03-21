/**
 * External dependencies
 */
import { DetailPage } from "../../resources/asu-unity-stack/packages/app-degree-pages/src/components/DetailPage"

/**
 * Internal dependencies
 */
// import Controls from './controls';
import Inspector from './inspector';
import { useBlockProps } from "@wordpress/block-editor";
// default img
import ImgDefaultHero from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/hero.jpg"
import ImgDefaultIntro from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/intro.jpg"
import ImgAttendOnline from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/attend-online.jpg"
import ImgCareerOutlook from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/career-outlook.jpg"
import ImgCustomizeFaculty from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/customize-faculty-600.jpg"
import ImgCustomizeHonors from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/customize-honors-600.jpg"
import ImgCustomizeInclusion from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/customize-inclusion-600.jpg"
import ImgCustomizeMentor from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/customize-mentor-600.jpg"
import ImgCustomizePrograms from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/customize-programs-600.jpg"
import ImgCustomizeResearch from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/customize-research-600.jpg"
import ImgGlobalOpportunity from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/detail-page/global-opportunity.jpg"



/**
 * Block edit function
 *
 * @param {Object} props
 */

const Edit = ( props ) => {

	const {
		attributes: {
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
			programContactInfoEmailUrl
		},
		className,
	} = props;

	const customProps = {
		appPathFolder: ".", // OPTIONAL
		dataSource: {
		  acadPlan: dataSourceAcadPlan, // any valid acadPlan code example BABUSGLBA //"TBTGMBGM" - this has major map subPlans
		  // acadPlan: "FAARTHBA", // this has one on-campus and one online major map
		  // acadPlan: "LSBISBIS", // this has marketText
		  // acadPlan: "ESBMEMDBSE", // this does not have required courses
		},
		anchorMenu: {
			atAGlance: anchorMenuAtAGlance,
			applicationRequirements: anchorMenuApplicationRequirements,
			changeMajorRequirements: anchorMenuChangeMajorRequirements,
			nextSteps: anchorMenuNextSteps,
			affordingCollege: anchorMenuAffordingCollege,
			flexibleDegreeOptions: anchorMenuFlexibleDegreeOptions,
			careerOutlook: anchorMenuCareerOutlook,
			exampleCareers: anchorMenuExampleCareers,
			//customizeYourCollegeExperience: true, // listed as prop, but currently commented out in component by ET. Future update?
			globalOpportunity: anchorMenuGlobalOpportunity,
			attendOnline: anchorMenuAttendOnline,
			whyChooseAsu: true,
			programContactInfo: true,
		//   externalAnchors: [
		// 	{
		// 	  targetIdName: "my-request-form-info-id",
		// 	  // targetIdName: "#my-request-form-info-id", this stil work but is not recommended
		// 	  text: "Request Information",
		// 	},
		//   ],
		},
		hero: {
			hide: heroHide,
			image: {
				url: heroImageUrl ? heroImageUrl : ImgDefaultHero,
				altText: heroAltText,
				size: heroImageSize, //"medium",
			},
		//   title: {
		// 	text: "Undergraduate Degrees",
		// 	highlightColor: "gold",
		//   },
		},
		introContent: {
			hideMarketText: introContentHideMarketText,
			hideProgramDesc: introContentHideProgramDesc,
			hideRequiredCourses: introContentHideRequiredCourses,
		//   breadcrumbs: [
		// 	{
		// 	  text: "Academic programs",
		// 	  url: "#",
		// 	},
		// 	{
		// 	  text: "Undergraduate degrees",
		// 	  // this is just an example working on Storybook
		// 	  url: `${getStoryBookBaseUrl()}?path=/story/program-listing-page--default`,
		// 	},
		// 	{
		// 	  text: "Degree title",
		// 	  // this is just an example working on Storybook
		// 	  url: `${getStoryBookBaseUrl()}?path=/story/program-detail-page--with-content`,
		// 	  isActive: true,
		// 	},
		//   ],
			image: {
				url: introContentImageUrl ? introContentImageUrl : ImgDefaultIntro,
				altText: introContentImageAltText,
			},
		  // OPTIONAL
		  // video: {
		  //   url: "./examples/assets/video/stock-video-person-drawing.mp4",
		  //   altText: "",
		  //   vttUrl: "",
		  // },
		  // OPTIONAL, override market text
		  // contents: [
		  //   {
		  //     text: `Can you imagine yourself hosting successful events and meetings?
		  //     Then this program is right for you. Earn a degree that showcases your advanced knowledge of event programming, operations, financial management and marketing.
		  //     The instructors work in all aspects of the event industry.`,
		  //   },
		  // ],
		},
		atAGlance: {
			hide: atAGlanceHide,
		//   offeredBy: {
		// 	text: "Herberger Instite for Design and the Arts",
		// 	url: "#",
		//   },
		//   locations: [
		// 	{
		// 	  text: "Tempe campus",
		// 	  url: "#",
		// 	},
		// 	{
		// 	  text: "West Valley campus",
		// 	  url: "#",
		// 	},
		// 	{
		// 	  text: "Online",
		// 	  url: "#",
		// 	},
		// 	{
		// 	  text: "ASU Local@Los Angeles",
		// 	  url: "#",
		// 	},
		//   ],
		//   firstRequirementMathCourse: "MAT 142 - College Mathematics",
		//   mathIntensity: "General",
		//   timeCommitment: "120 credit hours(about 4 years)",
		},
		applicationRequirements: {
			hide: atAGlanceApplicationRequirementsHide,
		},
		changeMajorRequirements: {
			hide: atAGlanceChangeMajorRequirementsHide,
		},
		nextSteps: {
			hide: nextStepsHide,
			cards: {
				learnMore: {
					icon: [nextStepsCardsLearnMoreIconPrefix, nextStepsCardsLearnMoreIconName],
					title: nextStepsCardsLearnMoreTitle,
					content: nextStepsCardsLearnMoreContent,
					buttonLink: {
						label: nextStepsCardsLearnMoreButtonLinkLabel,
						ariaLabel: nextStepsCardsLearnMoreButtonLinkAriaLabel,
						color: nextStepsCardsLearnMoreButtonLinkColor,
						href: nextStepsCardsLearnMoreButtonLinkHref,
					},
				},
				apply: {
					icon: [nextStepsCardsApplyIconPrefix, nextStepsCardsApplyIconName],
					title: nextStepsCardsApplyTitle,
					content: nextStepsCardsApplyContent,
					buttonLink: {
						label: nextStepsCardsApplyButtonLinkLabel,
						ariaLabel: nextStepsCardsApplyButtonLinkAriaLabel,
						color: nextStepsCardsApplyButtonLinkColor,
						href: nextStepsCardsApplyButtonLinkHref,
					},
				},
				visit: {
					icon: [nextStepsCardsVisitIconPrefix, nextStepsCardsVisitIconName],
					title: nextStepsCardsVisitTitle,
					content:nextStepsCardsVisitContent,
					buttonLink: {
						label: nextStepsCardsVisitButtonLinkLabel,
						ariaLabel: nextStepsCardsVisitButtonLinkAriaLabel,
						color: nextStepsCardsVisitButtonLinkColor,
						href: nextStepsCardsVisitButtonLinkHref,
					},
				},
			},
		},
		affordingCollege: {
		  hide: affordingCollegeHide,
		},
		flexibleDegreeOptions: {
		  hide: flexibleDegreeOptionsHide,
		},
		careerOutlook: {
		  image: {
			url: careerOutlookImageUrl ? careerOutlookImageUrl : ImgCareerOutlook,
			altText: careerOutlookImageAltText,
		  },
		},
		exampleCareers: {
		  hide: exampleCareersHide,
		},
		globalOpportunity: {
		  hide: globalOpportunityHide,
		  image: {
			url: globalOpportunityImageUrl ? globalOpportunityImageUrl : ImgGlobalOpportunity,
			altText: globalOpportunityAltText,
		  },
		},
		whyChooseAsu: {
		  hide: whyChooseAsuHide,
		  sectionIntroText: whyChooseAsuCardsSectionIntroText,
		  cards: {
			faculty: {
			  image: {
				url: whyChooseAsuCardsFacultyImageUrl ? whyChooseAsuCardsFacultyImageUrl : ImgCustomizeFaculty,
				altText: whyChooseAsuCardsFacultyAltText,
			  },
			  title: whyChooseAsuCardsFacultyTitle,
			  text: whyChooseAsuCardsFacultyText,
			  button: {
				label: whyChooseAsuCardsFacultyButtonLabel,
				color: whyChooseAsuCardsFacultyButtonColor,
				href: whyChooseAsuCardsFacultyButtonHref,
			  },
			},
			programs: {
			  image: {
				url: whyChooseAsuCardsProgramsImageUrl ? whyChooseAsuCardsProgramsImageUrl : ImgCustomizePrograms,
				altText: whyChooseAsuCardsProgramsAltText,
			  },
			  title: whyChooseAsuCardsProgramsTitle,
			  text: whyChooseAsuCardsProgramsText,
			  button: {
				label: whyChooseAsuCardsProgramsButtonLabel,
				color: whyChooseAsuCardsProgramsButtonColor,
				href: whyChooseAsuCardsProgramsButtonHref,
			  },
			},
			research: {
			  image: {
				url: whyChooseAsuCardsResearchImageUrl ? whyChooseAsuCardsResearchImageUrl : ImgCustomizeResearch,
				altText: whyChooseAsuCardsResearchAltText,
			  },
			  title: whyChooseAsuCardsResearchTitle,
			  text: whyChooseAsuCardsResearchText,
			  button: {
				label: whyChooseAsuCardsResearchButtonLabel,
				color: whyChooseAsuCardsResearchButtonColor,
				href: whyChooseAsuCardsResearchButtonHref,
			  },
			},
			inclusion: {
			  image: {
				url: whyChooseAsuCardsInclusionImageUrl ? whyChooseAsuCardsInclusionImageUrl : ImgCustomizeInclusion,
				altText: whyChooseAsuCardsInclusionAltText,
			  },
			  title: whyChooseAsuCardsInclusionTitle,
			  text: whyChooseAsuCardsInclusionText,
			  button: {
				label: whyChooseAsuCardsInclusionButtonLabel,
				color: whyChooseAsuCardsInclusionButtonColor,
				href: whyChooseAsuCardsInclusionButtonHref,
			  },
			},
			mentors: {
			  image: {
				url: whyChooseAsuCardsMentorsImageUrl ? whyChooseAsuCardsMentorsImageUrl : ImgCustomizeMentor,
				altText: whyChooseAsuCardsMentorsAltText,
			  },
			  title: whyChooseAsuCardsMentorsTitle,
			  text: whyChooseAsuCardsMentorsText,
			  button: {
				label: whyChooseAsuCardsMentorsButtonLabel,
				color: whyChooseAsuCardsMentorsButtonColor,
				href: whyChooseAsuCardsMentorsButtonHref,
			  },
			},
			honors: {
			  image: {
				url: whyChooseAsuCardsHonorsImageUrl ? whyChooseAsuCardsHonorsImageUrl : ImgCustomizeHonors,
				altText: whyChooseAsuCardsHonorsAltText,
			  },
			  title: whyChooseAsuCardsHonorsTitle,
			  text: whyChooseAsuCardsHonorsText,
			  button: {
				label: whyChooseAsuCardsHonorsButtonLabel,
				color: whyChooseAsuCardsHonorsButtonColor,
				href: whyChooseAsuCardsHonorsButtonHref,
			  },
			},
		  },
		},
		attendOnline: {
		  hide: attendOnlineHide,
		  image: {
			url: attendOnlineImageUrl ? attendOnlineImageUrl : ImgAttendOnline,
			altText:attendOnlineAltText,
		  },
		},
		programContactInfo: {
		  hide: programContactInfoHide,
		  department: { text: programContactInfoDepartmentText, url: programContactInfoDepartmentUrl },
		  email: { text: programContactInfoEmailText, url: programContactInfoEmailUrl },
		},
	  };

	return (
		<>
			<Inspector { ...props } />

			<div {...useBlockProps()}>
				<DetailPage { ...customProps } />
			</div>
		</>
	);

};

export default Edit;
