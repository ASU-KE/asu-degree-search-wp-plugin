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
			applicationRequirements: anchorMenuApplicationRequirements,
			nextSteps: anchorMenuNextSteps,
			affordingCollege: anchorMenuAffordingCollege,
			careerOutlook: anchorMenuCareerOutlook,
			globalOpportunity: anchorMenuGlobalOpportunity,
		  //atAGlance: anchorMenuAtAGlance, REMOVE THIS
		  //changeMajorRequirements: anchorMenuChangeMajorRequirements, REMOVE THIS
		  //flexibleDegreeOptions: anchorMenuFlexibleDegreeOptions, REMOVE THIS
		  //exampleCareers: anchorMenuExampleCareers, REMOVE THIS
		  //programContactInfo: anchorMenuProgramContactInfo, REMOVE THIS
		  //
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
		nextSteps: { // add ability to customize next steps cards
			hide: nextStepsHide,
			cards: {
				learnMore: {
					icon: ["fas", "info-circle"],
					title: "Learn more about our programs",
					content:"Tell us what type of student you are and we'll get you the information you need.",
					buttonLink: {
						label: "Request information",
						ariaLabel: "Request information",
						color: "maroon",
						href: "https://admission.asu.edu/contact/request-info",
					},
				},
				apply: {
			  icon: ["fas", "file-alt"],
			  title: "Apply to program",
			  content:
				"Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",
			  buttonLink: {
				label: "Apply now",
				ariaLabel: "Apply now",
				color: "maroon",
				href: "https://admission.asu.edu/apply",
			  },
			},
			visit: {
			  icon: ["fas", "map-marker-alt"],
			  title: "Visit our campus",
			  content:
				"An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",
			  buttonLink: {
				label: "Schedule a visit",
				ariaLabel: "Schedule a visit",
				color: "maroon",
				href: "https://visit.asu.edu/",
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
				label: "Faculty excellence",
				color: "maroon",
				href: "https://www.asu.edu/academics/faculty-excellence",
			  },
			},
			programs: {
			  image: {
				url: whyChooseAsuCardsProgramsImageUrl ? whyChooseAsuCardsProgramsImageUrl : ImgCustomizePrograms,
				altText: whyChooseAsuCardsProgramsAltText,
			  },
			  title: "Highly ranked programs",
			  text: "A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",
			  button: {
				label: "ASU rankings",
				color: "maroon",
				href: "https://www.asu.edu/rankings",
			  },
			},
			research: {
			  image: {
				url: whyChooseAsuCardsResearchImageUrl ? whyChooseAsuCardsResearchImageUrl : ImgCustomizeResearch,
				altText: whyChooseAsuCardsResearchAltText,
			  },
			  title: "Research opportunities",
			  text: "Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",
			  button: {
				label: "Research opportunities",
				color: "maroon",
				href: "https://provost.asu.edu/uresearch",
			  },
			},
			inclusion: {
			  image: {
				url: whyChooseAsuCardsInclusionImageUrl ? whyChooseAsuCardsInclusionImageUrl : ImgCustomizeInclusion,
				altText: whyChooseAsuCardsInclusionAltText,
			  },
			  title: "An inclusive environment",
			  text: "ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",
			  button: {
				label: "ASU Charter",
				color: "maroon",
				href: "https://www.asu.edu/about/charter-mission",
			  },
			},
			mentors: {
			  image: {
				url: whyChooseAsuCardsMentorsImageUrl ? whyChooseAsuCardsMentorsImageUrl : ImgCustomizeMentor,
				altText: whyChooseAsuCardsMentorsAltText,
			  },
			  title: "Mentor network",
			  text: "Students have access to a powerful online network of diverse mentors. Engaging with the ASU Mentor Network can help to build connections with professionals, both locally and globally, who share career advice, networks, and their own success stories.",
			  button: {
				label: "ASU Mentor network",
				color: "maroon",
				href: "https://mentorship.asu.edu",
			  },
			},
			honors: {
			  image: {
				url: whyChooseAsuCardsHonorsImageUrl ? whyChooseAsuCardsHonorsImageUrl : ImgCustomizeHonors,
				altText: whyChooseAsuCardsHonorsAltText,
			  },
			  title: "Global education",
			  text: "ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",
			  button: {
				label: "Explore",
				color: "maroon",
				//<code>&quot;gold&quot;</code> \| <code>&quot;maroon&quot;</code> \| <code>&quot;gray&quot;</code> \| <code>&quot;dark&quot;</code> |
				href: "https://goglobal.asu.edu",
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
		  // hide: true, // OPTIONAL
		  //leave blank to load default contact info
		  department: { text: "", url: "#" },
		  email: { text: "", url: "#" },
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
