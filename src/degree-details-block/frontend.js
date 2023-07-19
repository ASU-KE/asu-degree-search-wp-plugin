const { render } = wp.element;

import { DetailPage } from "../../resources/app-degree-pages/src/components/DetailPage"

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

	const introContentImageUrl = detailBlock.dataset.introcontentimageurl
	const introContentImageAltText = detailBlock.dataset.introcontentimagealttext

	// const defaultView = listingBlock.dataset.defaultview
	// const hasFilters = listingBlock.dataset.hasfilters === "true"
	// const hasSearchBar = listingBlock.dataset.hassearchbar === "true"
	// const degreesPerPage = Number(listingBlock.dataset.degreesperpage)


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
		    url: heroImageUrl,
		    altText: heroAltText,
		    size: heroImageSize, //"medium",
		  },
		//   title: {
		// 	text: "Undergraduate Degrees",
		// 	highlightColor: "gold",
		//   },
		},
		introContent: {
		  // hideMarketText: true,
		  // hideProgramDesc: true,
		  // hideRequiredCourses: true,
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
				url: introContentImageUrl,
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
		// atAGlance: {
		//   // hide: true,
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
		// applicationRequirements: {
		//   hide: true,
		// },
		// changeMajorRequirements: {
		//   hide: true,
		// },
		nextSteps: {
		  cards: {
			learnMore: {
			  icon: "info-circle",
			  title: "Lear more about our programs",
			  content:
				"Tell us what type of student you are and we'll get you the information you need.",
			  buttonLink: {
				label: "Request information",
				ariaLabel: "Request information",
				color: "maroon",
				href: "https://admission.asu.edu/contact/request-info",
			  },
			},
			apply: {
			  icon: "file-alt",
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
			  icon: "map-marker-alt",
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
		// affordingCollege: {
		//   hide: true,
		// },
		// flexibleDegreeOptions: {
		//   hide: true,
		// },
		careerOutlook: {
		  // OPTIONAL
		  image: {
			url: "https://source.unsplash.com/random/1200x750",
			altText:
			  "Random image. REPLACE with appropriate alt text for accessibility.",
		  },
		},
		// OPTIONAL
		// exampleCareers: {
		//   hide: true,
		// },
		globalOpportunity: {
		  // OPTIONAL
		  image: {
			url: "https://source.unsplash.com/random/1200x750",
			altText:
			  "Random image. REPLACE with appropriate alt text for accessibility.",
		  },
		},
		// OPTIONAL
		whyChooseAsu: {
		  sectionIntroText:
			"ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",
		  cards: {
			faculty: {
			  image: {
				url: `https://source.unsplash.com/random/600x600?career`,
				altText:
				  "Random image. REPLACE with appropriate alt text for accessibility.",
			  },
			  title: "World-class faculty",
			  text: "The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",
			  button: {
				label: "Faculty excellence",
				color: "maroon",
				href: "https://www.asu.edu/academics/faculty-excellence",
			  },
			},
			programs: {
			  image: {
				url: `https://source.unsplash.com/random/600x600?job`,
				altText:
				  "Random image. REPLACE with appropriate alt text for accessibility.",
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
				url: `https://source.unsplash.com/random/600x600?career`,
				altText:
				  "Random image. REPLACE with appropriate alt text for accessibility.",
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
				url: `https://source.unsplash.com/random/600x600?online`,
				altText:
				  "Random image. REPLACE with appropriate alt text for accessibility.",
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
				url: `https://source.unsplash.com/random/600x600?classroom`,
				altText:
				  "Random image. REPLACE with appropriate alt text for accessibility.",
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
				url: `https://source.unsplash.com/random/600x600?school`,
				altText:
				  "Random image. REPLACE with appropriate alt text for accessibility.",
			  },
			  title: "Global education",
			  text: "ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",
			  button: {
				label: "Explore",
				color: "maroon",
				href: "https://goglobal.asu.edu",
			  },
			},
		  },
		},
		attendOnline: {
		  // OPTIONAL
		  image: {
			url: "https://source.unsplash.com/random/1200x750",
			altText:
			  "Random image. REPLACE with appropriate alt text for accessibility.",
		  },
		},
		programContactInfo: {
		  departmentUrl: "#",
		  emailUrl: "#",
		},
	  }

	render(
		<DetailPage
		dataSource={ customProps.dataSource }
		anchorMenu={ anchorMenuEnabled ? customProps.anchorMenu : null}
		hero={ customProps.hero }
		introContent={ customProps.introContent }
		/>,
		detailBlock
	);
