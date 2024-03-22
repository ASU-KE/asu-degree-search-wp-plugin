const { render } = wp.element;

import { DetailPage } from "../../resources/asu-unity-stack/packages/app-degree-pages/src/components/DetailPage"
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

const detailBlock = document.getElementById( 'asu-degree-details-container' )

	const dataSourceAcadPlan = detailBlock.dataset.datasourceacadplan

	const anchorMenuEnabled = detailBlock.dataset.anchormenuenabled === "true"
	const anchorMenuAtAGlance = detailBlock.dataset.anchormenuataglance === "true"
	const anchorMenuApplicationRequirements = detailBlock.dataset.anchormenuapplicationrequirements === "true"
	const anchorMenuChangeMajorRequirements = detailBlock.dataset.anchormenuchangemajorrequirements === "true"
	const anchorMenuNextSteps = detailBlock.dataset.anchormenunextsteps === "true"
	const anchorMenuAffordingCollege = detailBlock.dataset.anchormenuaffordingcollege === "true"
	const anchorMenuFlexibleDegreeOptions = detailBlock.dataset.anchormenuflexibledegreeoptions === "true"
	const anchorMenuCareerOutlook = detailBlock.dataset.anchormenucareeroutlook === "true"
	const anchorMenuExampleCareers = detailBlock.dataset.anchormenuexamplecareers === "true"
	const anchorMenuGlobalOpportunity = detailBlock.dataset.anchormenuglobalopportunity === "true"
	const anchorMenuAttendOnline = detailBlock.dataset.anchormenuattendonline === "true"
	const anchorMenuWhyChooseAsu = detailBlock.dataset.anchormenuwhychooseasu === "true"
	const anchorMenuProgramContactInfo = detailBlock.dataset.anchormenuprogramcontactinfo === "true"

	const heroHide = detailBlock.dataset.herohide === "true"
	const heroImageUrl = detailBlock.dataset.heroimageurl
	const heroAltText = detailBlock.dataset.heroalttext
	const heroImageSize = detailBlock.dataset.heroimagesize

	const introContentHideMarketText = detailBlock.dataset.introcontenthidemarkettext === "true"
	const introContentHideProgramDesc = detailBlock.dataset.introcontenthideprogramdesc === "true"
	const introContentHideRequiredCourses = detailBlock.dataset.introcontenthiderequiredcourses === "true"
	const introContentImageUrl = detailBlock.dataset.introcontentimageurl
	const introContentImageAltText = detailBlock.dataset.introcontentimagealttext

	const atAGlanceHide = detailBlock.dataset.ataglancehide === "true"
	const atAGlanceApplicationRequirementsHide = detailBlock.dataset.ataglanceapplicationrequirementshide === "true"
	const atAGlanceChangeMajorRequirementsHide = detailBlock.dataset.ataglancechangemajorrequirements === "true"

	const nextStepsHide = detailBlock.dataset.nextstepshide === "true"

	const nextStepsCardsLearnMoreIconPrefix = detailBlock.dataset.nextstepscardslearnmoreiconprefix
	const nextStepsCardsLearnMoreIconName = detailBlock.dataset.nextstepscardslearnmoreiconname
	const nextStepsCardsLearnMoreTitle = detailBlock.dataset.nextstepscardslearnmoretitle
	const nextStepsCardsLearnMoreContent = detailBlock.dataset.nextstepscardslearnmorecontent
	const nextStepsCardsLearnMoreButtonLinkLabel = detailBlock.dataset.nextstepscardslearnmorebuttonlinklabel
	const nextStepsCardsLearnMoreButtonLinkAriaLabel = detailBlock.dataset.nextstepscardslearnmorebuttonlinkarialabel
	const nextStepsCardsLearnMoreButtonLinkColor = detailBlock.dataset.nextstepscardslearnmorebuttonlinkcolor
	const nextStepsCardsLearnMoreButtonLinkHref = detailBlock.dataset.nextstepscardslearnmorebuttonlinkhref

	const nextStepsCardsApplyIconPrefix = detailBlock.dataset.nextstepscardsapplyiconprefix
	const nextStepsCardsApplyIconName = detailBlock.dataset.nextstepscardsapplyiconname
	const nextStepsCardsApplyTitle = detailBlock.dataset.nextstepscardsapplytitle
	const nextStepsCardsApplyContent = detailBlock.dataset.nextstepscardsapplycontent
	const nextStepsCardsApplyButtonLinkLabel = detailBlock.dataset.nextstepscardsapplybuttonlinklabel
	const nextStepsCardsApplyButtonLinkAriaLabel = detailBlock.dataset.nextstepscardsapplybuttonlinkarialabel
	const nextStepsCardsApplyButtonLinkColor = detailBlock.dataset.nextstepscardsapplybuttonlinkcolor
	const nextStepsCardsApplyButtonLinkHref = detailBlock.dataset.nextstepscardsapplybuttonlinkhref

	const nextStepsCardsVisitIconPrefix = detailBlock.dataset.nextstepscardsvisiticonprefix
	const nextStepsCardsVisitIconName = detailBlock.dataset.nextstepscardsvisiticonname
	const nextStepsCardsVisitTitle = detailBlock.dataset.nextstepscardsvisittitle
	const nextStepsCardsVisitContent = detailBlock.dataset.nextstepscardsvisitcontent
	const nextStepsCardsVisitButtonLinkLabel = detailBlock.dataset.nextstepscardsvisitbuttonlinklabel
	const nextStepsCardsVisitButtonLinkAriaLabel = detailBlock.dataset.nextstepscardsvisitbuttonlinkarialabel
	const nextStepsCardsVisitButtonLinkColor = detailBlock.dataset.nextstepscardsvisitbuttonlinkcolor
	const nextStepsCardsVisitButtonLinkHref = detailBlock.dataset.nextstepscardsvisitbuttonlinkhref

	const affordingCollegeHide = detailBlock.dataset.affordingcollegehide === "true"
	const flexibleDegreeOptionsHide = detailBlock.dataset.flexibledegreeoptionshide === "true"

	const careerOutlookImageUrl = detailBlock.dataset.careeroutlookimageurl
	const careerOutlookImageAltText = detailBlock.dataset.careeroutlookimagealttext
	const exampleCareersHide = detailBlock.dataset.examplecareershide === "true"

	const globalOpportunityHide = detailBlock.dataset.globalopportunityhide === "true"
	const globalOpportunityImageUrl = detailBlock.dataset.globalopportunityimageurl
	const globalOpportunityAltText = detailBlock.dataset.globalopportunityalttext

	const whyChooseAsuHide = detailBlock.dataset.whychooseasuhide === "true"
	const whyChooseAsuCardsSectionIntroText = detailBlock.dataset.whychooseasucardssectionintrotext

	const whyChooseAsuCardsFacultyTitle = detailBlock.dataset.whychooseasucardsfacultytitle
	const whyChooseAsuCardsFacultyText = detailBlock.dataset.whychooseasucardsfacultytext
	const whyChooseAsuCardsFacultyButtonLabel = detailBlock.dataset.whychooseasucardsfacultybuttonlabel
	const whyChooseAsuCardsFacultyButtonColor = detailBlock.dataset.whychooseasucardsfacultybuttoncolor
	const whyChooseAsuCardsFacultyButtonHref = detailBlock.dataset.whychooseasucardsfacultybuttonhref
	const whyChooseAsuCardsFacultyImageUrl = detailBlock.dataset.whychooseasucardsfacultyimageurl
	const whyChooseAsuCardsFacultyAltText = detailBlock.dataset.whychooseasucardsfacultyalttext

	const whyChooseAsuCardsProgramsTitle = detailBlock.dataset.whychooseasucardsprogramstitle
	const whyChooseAsuCardsProgramsText = detailBlock.dataset.whychooseasucardsprogramstext
	const whyChooseAsuCardsProgramsButtonLabel = detailBlock.dataset.whychooseasucardsprogramsbuttonlabel
	const whyChooseAsuCardsProgramsButtonColor = detailBlock.dataset.whychooseasucardsprogramsbuttoncolor
	const whyChooseAsuCardsProgramsButtonHref = detailBlock.dataset.whychooseasucardsprogramsbuttonhref
	const whyChooseAsuCardsProgramsImageUrl = detailBlock.dataset.whychooseasucardsprogramsimageurl
	const whyChooseAsuCardsProgramsAltText = detailBlock.dataset.whychooseasucardsprogramsalttext

	const whyChooseAsuCardsResearchTitle = detailBlock.dataset.whychooseasucardsresearchtitle
	const whyChooseAsuCardsResearchText = detailBlock.dataset.whychooseasucardsresearchtext
	const whyChooseAsuCardsResearchButtonLabel = detailBlock.dataset.whychooseasucardsresearchbuttonlabel
	const whyChooseAsuCardsResearchButtonColor = detailBlock.dataset.whychooseasucardsresearchbuttoncolor
	const whyChooseAsuCardsResearchButtonHref = detailBlock.dataset.whychooseasucardsresearchbuttonhref
	const whyChooseAsuCardsResearchImageUrl = detailBlock.dataset.whychooseasucardsresearchimageurl
	const whyChooseAsuCardsResearchAltText = detailBlock.dataset.whychooseasucardsresearchalttext

	const whyChooseAsuCardsInclusionTitle = detailBlock.dataset.whychooseasucardsinclusiontitle
	const whyChooseAsuCardsInclusionText = detailBlock.dataset.whychooseasucardsinclusiontext
	const whyChooseAsuCardsInclusionButtonLabel = detailBlock.dataset.whychooseasucardsinclusionbuttonlabel
	const whyChooseAsuCardsInclusionButtonColor = detailBlock.dataset.whychooseasucardsinclusionbuttoncolor
	const whyChooseAsuCardsInclusionButtonHref = detailBlock.dataset.whychooseasucardsinclusionbuttonhref
	const whyChooseAsuCardsInclusionImageUrl = detailBlock.dataset.whychooseasucardsinclusionimageurl
	const whyChooseAsuCardsInclusionAltText = detailBlock.dataset.whychooseasucardsinclusionalttext

	const whyChooseAsuCardsMentorsTitle = detailBlock.dataset.whychooseasucardsmentorstitle
	const whyChooseAsuCardsMentorsText = detailBlock.dataset.whychooseasucardsmentorstext
	const whyChooseAsuCardsMentorsButtonLabel = detailBlock.dataset.whychooseasucardsmentorsbuttonlabel
	const whyChooseAsuCardsMentorsButtonColor = detailBlock.dataset.whychooseasucardsmentorsbuttoncolor
	const whyChooseAsuCardsMentorsButtonHref = detailBlock.dataset.whychooseasucardsmentorsbuttonhref
	const whyChooseAsuCardsMentorsImageUrl = detailBlock.dataset.whychooseasucardsmentorsimageurl
	const whyChooseAsuCardsMentorsAltText = detailBlock.dataset.whychooseasucardsmentorsalttext

	const whyChooseAsuCardsHonorsTitle = detailBlock.dataset.whychooseasucardshonorstitle
	const whyChooseAsuCardsHonorsText = detailBlock.dataset.whychooseasucardshonorstext
	const whyChooseAsuCardsHonorsButtonLabel = detailBlock.dataset.whychooseasucardshonorsbuttonlabel
	const whyChooseAsuCardsHonorsButtonColor = detailBlock.dataset.whychooseasucardshonorsbuttoncolor
	const whyChooseAsuCardsHonorsButtonHref =detailBlock.dataset.whychooseasucardshonorsbuttonhref
	const whyChooseAsuCardsHonorsImageUrl = detailBlock.dataset.whychooseasucardshonorsimageurl
	const whyChooseAsuCardsHonorsAltText = detailBlock.dataset.whychooseasucardshonorsalttext

	const attendOnlineHide = detailBlock.dataset.attendonlinehide === "true"
	const attendOnlineImageUrl = detailBlock.dataset.attendonlineimageurl
	const attendOnlineAltText = detailBlock.dataset.attendonlinealttext

	const programContactInfoHide = detailBlock.dataset.programcontactinfohide === "true"
	const programContactInfoDepartmentText = detailBlock.dataset.programcontactinfodepartmenttext
	const programContactInfoDepartmentUrl = detailBlock.dataset.programcontactinfodepartmenturl
	const programContactInfoEmailText = detailBlock.dataset.programcontactinfoemailtext
	const programContactInfoEmailUrl = detailBlock.dataset.programcontactinfoemailurl

	const customProps = {
		appPathFolder: ".", // OPTIONAL
		dataSource: {
		  // endpoint: "https://degrees.apps.asu.edu/t5/service", // OPTIONAL
		  // method: "findDegreeByAcadPlan", // OPTIONAL
		  // init: "false", // OPTIONAL
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
			whyChooseAsu: anchorMenuWhyChooseAsu,
			programContactInfo: anchorMenuProgramContactInfo,
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

	window.addEventListener('load', () => {
		const hash = window.location.hash.substring(1)
		if (hash == `flexible-accelerated-options`) {
			const checkElementExistence = setInterval(() => {
				const element = document.getElementById(hash)
				if (element) {
					clearInterval(checkElementExistence);
					let headerOffset = 250
					if(anchorMenuEnabled){
						headerOffset = 350
					}
					console.log(headerOffset)
					let elementPosition = element.getBoundingClientRect().top
					let offsetPosition = elementPosition + window.scrollY - headerOffset
					window.scrollTo({top: offsetPosition,behavior: "smooth"})
				}
			}, 100)
		}
	})

	render(
		<DetailPage
			dataSource={ customProps.dataSource }
			anchorMenu={ anchorMenuEnabled ? customProps.anchorMenu : null}
			hero={ customProps.hero }
			introContent={ customProps.introContent }
			atAGlance={ customProps.atAGlance }
			applicationRequirements={ customProps.applicationRequirements }
			changeMajorRequirements={ customProps.changeMajorRequirements }
			nextSteps={ customProps.nextSteps }
			affordingCollege={ customProps.affordingCollege }
			flexibleDegreeOptions={ customProps.flexibleDegreeOptions }
			careerOutlook={ customProps.careerOutlook }
			exampleCareers={ customProps.exampleCareers }
			globalOpportunity={ customProps.globalOpportunity }
			whyChooseAsu={ customProps.whyChooseAsu }
			attendOnline={ customProps.attendOnline }
			programContactInfo={ customProps.programContactInfo }
		/>,
		detailBlock
	);
