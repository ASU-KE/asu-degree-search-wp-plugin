const { render } = wp.element;

import { ListingPage } from "../../resources/app-degree-pages/src/components/ListingPage"


// It is possible to load multiple forms onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const listingBlock = document.getElementById( 'asu-degree-overview-container' )

	const dataSourceBlacklistAcadPlans = listingBlock.dataset.datasourceblacklistacadplans
	const dataSourceCollegeAcadOrg = listingBlock.dataset.datasourcecollegeacadorg
	const dataSourceDepartmentCode = listingBlock.dataset.datasourcedepartmentcode
	const dataSourceProgram = listingBlock.dataset.datasourceprogram

	const defaultView = listingBlock.dataset.defaultview
	const hasFilters = listingBlock.dataset.hasfilters === "true"
	const hasSearchBar = listingBlock.dataset.hassearchbar === "true"
	const degreesPerPage = Number(listingBlock.dataset.degreesperpage)

	const heroImageUrl = listingBlock.dataset.heroimageurl
	const heroAltText = listingBlock.dataset.heroalttext
	const heroImageSize = listingBlock.dataset.heroimagesize

	//const wordpressMediaDate = listingBlock.dataset.wordpressmediadate

	const dataSource = {
        endpoint: "https://degrees.apps.asu.edu/t5/service",
        method: "findAllDegrees",
        init: "false", // "true" | "false"Î
        program: dataSourceProgram, // graduate | undergrad
        cert: "false", // "true" | "false"
        collegeAcadOrg: dataSourceCollegeAcadOrg, // OPTIONAL example values: CLW, CTB, CTE, CGF - empty string or null to see all
        departmentCode: dataSourceDepartmentCode, // OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL, CSFIS
        blacklistAcadPlans: dataSourceBlacklistAcadPlans ? dataSourceBlacklistAcadPlans.split(',') : "", // OPTIONAL ["BAACCBS", "LAACTBS"], example filters out Accountancy and Actuarial Science
      };

	const actionUrls = {
        applyNowUrl: "https://admission.asu.edu/apply", // OPTIONAL
        majorInfoUrl: `/degrees/${dataSourceProgram}/{DEGREE_NAME}-{DEGREE_LEVEL}`,
        // majorInfoUrl:
        //   `programs/College/{ACAD_PLAN_CODE}/undergrad/false`
        // more example here: https://asudev.jira.com/browse/WS2-691?focusedCommentId=1302038
      };

	let customProps = {
		appPathFolder: "http://localhost:3000/dist",
		actionUrls: actionUrls,
		hero: {
		  image: {
		    url: heroImageUrl,
		    altText: heroAltText,
		    size: heroImageSize,
		  },
		//   title: {
		//     text: "Undergraduate Degrees",
		//     highlightColor: "gold",
		//   },
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
			// cardDefaultImage: {
			//   url: `/wp-content/uploads/${wordpressMediaDate}/{ACAD_PLAN_CODE}.jpg`,
			//   imageAltText: `{DEGREE_IMG_ALT_TEXT} cover image`,
			// }
		  }
		},
		degreesPerPage: degreesPerPage,
	  }

	render( <ListingPage {...customProps} />, listingBlock );
