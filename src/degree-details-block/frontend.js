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
	const anchorMenuProgramContactInfo = detailBlock.dataset.anchormenuprogramcontactinfo === "true"

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

	const affordingCollegeHide = detailBlock.dataset.affordingcollegehide === "true"
	const flexibleDegreeOptionsHide = detailBlock.dataset.flexibledegreeoptionshide === "true"

	const careerOutlookImageUrl = detailBlock.dataset.careeroutlookimageurl
	const careerOutlookImageAltText = detailBlock.dataset.careeroutlookimagealttext
	const exampleCareersHide = detailBlock.dataset.examplecareershide === "true"

	const globalOpportunityImageUrl = detailBlock.dataset.globalopportunityimageurl
	const globalOpportunityAltText = detailBlock.dataset.globalopportunityalttext

	const whyChooseAsuCardsFacultyImageUrl = detailBlock.dataset.whychooseasucardsfacultyimageurl
	const whyChooseAsuCardsFacultyAltText = detailBlock.dataset.whychooseasucardsfacultyalttext
	const whyChooseAsuCardsProgramsImageUrl = detailBlock.dataset.whychooseasucardsprogramsimageurl
	const whyChooseAsuCardsProgramsAltText = detailBlock.dataset.whychooseasucardsprogramsalttext
	const whyChooseAsuCardsResearchImageUrl = detailBlock.dataset.whychooseasucardsresearchimageurl
	const whyChooseAsuCardsResearchAltText = detailBlock.dataset.whychooseasucardsresearchalttext
	const whyChooseAsuCardsInclusionImageUrl = detailBlock.dataset.whychooseasucardsinclusionimageurl
	const whyChooseAsuCardsInclusionAltText = detailBlock.dataset.whychooseasucardsinclusionalttext
	const whyChooseAsuCardsMentorsImageUrl = detailBlock.dataset.whychooseasucardsmentorsimageurl
	const whyChooseAsuCardsMentorsAltText = detailBlock.dataset.whychooseasucardsmentorsalttext
	const whyChooseAsuCardsHonorsImageUrl = detailBlock.dataset.whychooseasucardshonorsimageurl
	const whyChooseAsuCardsHonorsAltText = detailBlock.dataset.whychooseasucardshonorsalttext

	const attendOnlineImageUrl = detailBlock.dataset.attendonlineimageurl
	const attendOnlineAltText = detailBlock.dataset.attendonlinealttext

	const customProps = {
		appPathFolder: "http://localhost:3000/dist",
		dataSource: {
		  endpoint: "https://degrees.apps.asu.edu/t5/service",
		  method: "findDegreeByAcadPlan",
		  init: "false",
		  acadPlan: dataSourceAcadPlan, // any valid acadPlan code example BABUSGLBA
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
		  globalOpportunity: anchorMenuGlobalOpportunity,
		  programContactInfo: anchorMenuProgramContactInfo,
		//   externalAnchors: [
		//     {
		//       targetIdName: "my-request-form-info-id",
		//       text: "Request Information",
		//     },
		//   ],
		},
		hero: {
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
		// 	  url: "listing-page.html",
		// 	},
		// 	{
		// 	  text: "Degree title",
		// 	  url: "detail-page.html",
		// 	  isActive: true,
		// 	},
		//   ],
			image: {
				url: introContentImageUrl ? introContentImageUrl : ImgDefaultIntro,
				altText: introContentImageAltText,
			},
		  // optional
		  // video: {
		  //   url: "/assets/video/stock-video-person-drawing.mp4",
		  //   altText: "",
		  //   vttUrl: "",
		  // },
		  // optional, override market text
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
		// 	  text: "West campus",
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
		// },
			applicationRequirements: {
				hide: atAGlanceApplicationRequirementsHide,
			},
			changeMajorRequirements: {
			hide: atAGlanceChangeMajorRequirementsHide,
			}
		},
		// nextSteps: {
		//   cards: {
		// 	learnMore: {
		// 	  icon: "info-circle",
		// 	  title: "Lear more about our programs",
		// 	  content:
		// 		"Tell us what type of student you are and we'll get you the information you need.",
		// 	  buttonLink: {
		// 		label: "Request information",
		// 		ariaLabel: "Request information",
		// 		color: "maroon",
		// 		href: "https://admission.asu.edu/contact/request-info",
		// 	  },
		// 	},
		// 	apply: {
		// 	  icon: "file-alt",
		// 	  title: "Apply to program",
		// 	  content:
		// 		"Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",
		// 	  buttonLink: {
		// 		label: "Apply now",
		// 		ariaLabel: "Apply now",
		// 		color: "maroon",
		// 		href: "https://admission.asu.edu/apply",
		// 	  },
		// 	},
		// 	visit: {
		// 	  icon: "map-marker-alt",
		// 	  title: "Visit our campus",
		// 	  content:
		// 		"An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",
		// 	  buttonLink: {
		// 		label: "Schedule a visit",
		// 		ariaLabel: "Schedule a visit",
		// 		color: "maroon",
		// 		href: "https://visit.asu.edu/",
		// 	  },
		// 	},
		//   },
		// },
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
		  // OPTIONAL
		  image: {
			url: globalOpportunityImageUrl ? globalOpportunityImageUrl : ImgGlobalOpportunity,
			altText: globalOpportunityAltText,
		  },
		},
		// OPTIONAL
		whyChooseAsu: {
		//  sectionIntroText:"ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",
		  cards: {
			faculty: {
			  image: {
				url: whyChooseAsuCardsFacultyImageUrl ? whyChooseAsuCardsFacultyImageUrl : ImgCustomizeFaculty,
				altText: whyChooseAsuCardsFacultyAltText,
			  },
			//   title: "World-class faculty",
			//   text: "The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",
			//   button: {
			// 	label: "Faculty excellence",
			// 	color: "maroon",
			// 	href: "https://www.asu.edu/academics/faculty-excellence",
			//   },
			},
			programs: {
			  image: {
				url: whyChooseAsuCardsProgramsImageUrl ? whyChooseAsuCardsProgramsImageUrl : ImgCustomizePrograms,
				altText: whyChooseAsuCardsProgramsAltText,
			  },
			//   title: "Highly ranked programs",
			//   text: "A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",
			//   button: {
			// 	label: "ASU rankings",
			// 	color: "maroon",
			// 	href: "https://www.asu.edu/rankings",
			//   },
			},
			research: {
			  image: {
				url: whyChooseAsuCardsResearchImageUrl ? whyChooseAsuCardsResearchImageUrl : ImgCustomizeResearch,
				altText: whyChooseAsuCardsResearchAltText,
			  },
			//   title: "Research opportunities",
			//   text: "Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",
			//   button: {
			// 	label: "Research opportunities",
			// 	color: "maroon",
			// 	href: "https://provost.asu.edu/uresearch",
			//   },
			},
			inclusion: {
			  image: {
				url: whyChooseAsuCardsInclusionImageUrl ? whyChooseAsuCardsInclusionImageUrl : ImgCustomizeInclusion,
				altText: whyChooseAsuCardsInclusionAltText
			  },
			//   title: "An inclusive environment",
			//   text: "ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",
			//   button: {
			// 	label: "ASU Charter",
			// 	color: "maroon",
			// 	href: "https://www.asu.edu/about/charter-mission",
			//   },
			},
			mentors: {
			  image: {
				url: whyChooseAsuCardsMentorsImageUrl ? whyChooseAsuCardsMentorsImageUrl : ImgCustomizeMentor,
				altText: whyChooseAsuCardsMentorsAltText,
			  },
			//   title: "Mentor network",
			//   text: "Students have access to a powerful online network of diverse mentors. Engaging with the ASU Mentor Network can help to build connections with professionals, both locally and globally, who share career advice, networks, and their own success stories.",
			//   button: {
			// 	label: "ASU Mentor network",
			// 	color: "maroon",
			// 	href: "https://mentorship.asu.edu",
			//   },
			},
			honors: {
			  image: {
				url: whyChooseAsuCardsHonorsImageUrl ? whyChooseAsuCardsHonorsImageUrl : ImgCustomizeHonors,
				altText: whyChooseAsuCardsHonorsAltText,
			  },
			//   title: "Global education",
			//   text: "ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",
			//   button: {
			// 	label: "Explore",
			// 	color: "maroon",
			// 	href: "https://goglobal.asu.edu",
			//   },
			},
		  },
		},
		attendOnline: {
		  // OPTIONAL
		  image: {
			url: attendOnlineImageUrl ? attendOnlineImageUrl : ImgAttendOnline,
			altText: attendOnlineAltText,
		  },
		},
		programContactInfo: {
		  departmentUrl: "#",
		  emailUrl: "#",
		},
	  }

	window.addEventListener('load', () => {
		const hash = window.location.hash.substring(1)
		if (hash == `flexible-accelerated-options`) {
			const checkElementExistence = setInterval(() => {
				const element = document.getElementById(hash)
				if (element) {
					clearInterval(checkElementExistence);
					let headerOffset = 375
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
			affordingCollege={ customProps.affordingCollege }
			flexibleDegreeOptions={ customProps.flexibleDegreeOptions }
			careerOutlook={ customProps.careerOutlook }
			exampleCareers={ customProps.exampleCareers }
			globalOpportunity={ customProps.globalOpportunity }
			whyChooseAsu={ customProps.whyChooseAsu }
			attendOnline={ customProps.attendOnline }
		/>,
		detailBlock
	);
