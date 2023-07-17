const { render } = wp.element;

import { ListingPage } from "../../resources/app-degree-pages/src/components/ListingPage"


// It is possible to load multiple forms onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const listingBlock = document.getElementById( 'asu-degree-overview-container' )

	//const actionUrls = listingBlock.dataset.actionurls
	// const hero = listingBlock.dataset.hero
	// const introContent = listingBlock.dataset.introcontent
	// const programList = listingBlock.dataset.programlist
	const dataSourceCollegeAcadOrg = listingBlock.dataset.datasourcecollegeacadorg
	const dataSourceDepartmentCode = listingBlock.dataset.datasourcedepartmentcode
	const dataSourceProgram = listingBlock.dataset.datasourceprogram

	const defaultView = listingBlock.dataset.defaultview
	const hasFilters = listingBlock.dataset.hasfilters === "true"
	const hasSearchBar = listingBlock.dataset.hassearchbar === "true"
	const degreesPerPage = Number(listingBlock.dataset.degreesperpage)

	const dataSource = {
        endpoint: "https://degrees.apps.asu.edu/t5/service",
        method: "findAllDegrees",
        init: "false", // "true" | "false"Î
        program: dataSourceProgram, // graduate | undergrad
        cert: "false", // "true" | "false"
        collegeAcadOrg: dataSourceCollegeAcadOrg, // OPTIONAL example values: CLW, CTB, CTE, CGF - empty string or null to see all
        departmentCode: dataSourceDepartmentCode, // OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL, CSFIS
        // blacklistAcadPlans: ["BAACCBS", "LAACTBS"], // OPTIONAL example filters out Accountancy and Actuarial Science
      };

	const actionUrls = {
        // applyNowUrl: "https://admission.asu.edu/apply", // OPTIONAL
        majorInfoUrl: `/examples/detail-page.html?acadPlan={ACAD_PLAN_CODE}`,
        // majorInfoUrl:
        //   `programs/College/{ACAD_PLAN_CODE}/undergrad/false`
        // more example here: https://asudev.jira.com/browse/WS2-691?focusedCommentId=1302038
      };

	let customProps = {
		appPathFolder: "http://localhost:3000/dist",
		actionUrls: actionUrls,
		hero: {
		  image: {
		    url: "/programs/resources/images/ds_header_undergrad.jpg",
		    altText: "Undergraduate Degrees",
		    size: "medium",
		  },
		  title: {
		    text: "Undergraduate Degrees",
		    highlightColor: "gold",
		  },
		},
		//introContent,
		hasFilters: hasFilters, // OPTIONAL
		hasSearchBar: hasSearchBar, // OPTIONAL
		programList: {
		  dataSource: dataSource,
		  // OPTIONAL
		  settings: {
			hideCollegeSchool: false,
			defaultView: defaultView, //"grid-view" or "list-view"
			cardDefaultImage: {
			  url: `examples/assets/img/ds_header_undergrad.jpg`,
			}
		  }
		},
		degreesPerPage: degreesPerPage,
	  }

	render(
		<ListingPage
			actionUrls={ actionUrls }
			//hero={ customProps.hero }
			introContent={ customProps.introContent }
			programList={ customProps.programList }
			hasFilters={ hasFilters }
			hasSearchBar={ hasSearchBar }
			degreesPerPage={degreesPerPage}
		/>,
		listingBlock
	);
