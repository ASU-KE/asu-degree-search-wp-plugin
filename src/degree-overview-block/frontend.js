const { render } = wp.element;

import { ListingPage } from "../../resources/asu-unity-stack/packages/app-degree-pages/src/components/ListingPage"
import ImgDefaultHero from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/listing-page/hero.jpg"

	const listingBlock = document.getElementById( 'asu-degree-overview-container' )

	const dataSourceBlacklistAcadPlans = listingBlock.dataset.datasourceblacklistacadplans
	const dataSourceCollegeAcadOrg = listingBlock.dataset.datasourcecollegeacadorg
	const dataSourceDepartmentCode = listingBlock.dataset.datasourcedepartmentcode
	const dataSourceProgram = listingBlock.dataset.datasourceprogram
	const dataSourceCert = listingBlock.dataset.datasourcecert === "true"

	const defaultView = listingBlock.dataset.defaultview
	const hasFilters = listingBlock.dataset.hasfilters === "true"
	const hasSearchBar = listingBlock.dataset.hassearchbar === "true"
	const degreesPerPage = Number(listingBlock.dataset.degreesperpage)

	const heroImageUrl = listingBlock.dataset.heroimageurl
	const heroAltText = listingBlock.dataset.heroalttext
	const heroImageSize = listingBlock.dataset.heroimagesize

	const actionApplyNowUrl = listingBlock.dataset.actionapplynowurl
	const enableIntroContent = listingBlock.dataset.enableintrocontent === "true"
	const introContentType = listingBlock.dataset.introcontenttype
	const introContentTitleText = listingBlock.dataset.introcontenttitletext
	const introContentContentsText = listingBlock.dataset.introcontentcontentstext
	const introContentPhotoGridImagesUrl1 = listingBlock.dataset.introcontentphotogridimagesurl1
	const introContentPhotoGridImagesUrl2 = listingBlock.dataset.introcontentphotogridimagesurl2
	const introContentPhotoGridImagesUrl3 = listingBlock.dataset.introcontentphotogridimagesurl3
	const introContentPhotoGridImagesUrl4 = listingBlock.dataset.introcontentphotogridimagesurl4

	//const wordpressMediaDate = listingBlock.dataset.wordpressmediadate

	const dataSource = {
        //endpoint: "https://degrees.apps.asu.edu/t5/service",
        //method: "findAllDegrees",
        program: dataSourceProgram, // graduate | undergrad
		//init: "false", // "true" | "false"
		collegeAcadOrg: dataSourceCollegeAcadOrg, // OPTIONAL example values: CLW, CTB, CTE, CGF - empty string or null to see all
		...dataSourceProgram === "graduate" && {
			blacklistAcadPlans: dataSourceBlacklistAcadPlans ? dataSourceBlacklistAcadPlans.split(',') : "", // OPTIONAL ["BAACCBS", "LAACTBS"], example filters out Accountancy and Actuarial Science
			departmentCode: dataSourceDepartmentCode, // OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL, CSFIS
		},
		...dataSourceProgram === "undergrad" && {
			blacklistAcadPlans: dataSourceBlacklistAcadPlans ? dataSourceBlacklistAcadPlans.split(',') : "", // OPTIONAL ["BAACCBS", "LAACTBS"], example filters out Accountancy and Actuarial Science
			departmentCode: dataSourceDepartmentCode, // OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL, CSFIS
		},
		...dataSourceCert && {
			blacklistAcadPlans: dataSourceBlacklistAcadPlans ? dataSourceBlacklistAcadPlans.split(',') : null, // OPTIONAL ["BAACCBS", "LAACTBS"], example filters out Accountancy and Actuarial Science
			cert: dataSourceCert,
			showInactivePrograms:"true",
		},
      };

	let degreeUrl = ""
	let degreeUrlLevel = dataSourceProgram
	if(dataSourceProgram === "graduate") {
		degreeUrl = `{DEGREE_NAME}`
		dataSource.cert = "false"
	} else {
		degreeUrl = `{DEGREE_NAME}-{DEGREE_LEVEL}`
		if(dataSourceCert){
			degreeUrlLevel = "minors"
			dataSource.cert = "true"
		}
	}

	const actionUrls = {
        applyNowUrl: actionApplyNowUrl, // OPTIONAL
        majorInfoUrl: `/degrees/${degreeUrlLevel}/${degreeUrl}`,
        // majorInfoUrl:
        //   `programs/College/{ACAD_PLAN_CODE}/undergrad/false`
        // more example here: https://asudev.jira.com/browse/WS2-691?focusedCommentId=1302038
    };

	let introContent = null

	if(enableIntroContent){
		introContent = {
			type: introContentType,
			//...introContentType === "text-image-overlay" && {
			//     header: {
			//       text: "Intro Content Image Overlay",
    		//       // component: "h2", default h2
    		//     },
			//},
			title: {
				text: introContentTitleText,
				//highlightColor: "gold",
				// component: "h2", default h2
			},
			contents: [{
				text: introContentContentsText,
				//highlightColor: "gold",
			}],
			...introContentType === "text-photo-grid" && {
				photoGrid: {
					images: [
						{url: introContentPhotoGridImagesUrl1,},
						{url: introContentPhotoGridImagesUrl2,},
						{url: introContentPhotoGridImagesUrl3,},
						{url: introContentPhotoGridImagesUrl4,},
					],
				},
			},
			...introContentType === "text-media" && {
				image: {
					url: introContentPhotoGridImagesUrl1,
				},
				// video: {
    			// url: "./assets/video/stock-video-person-drawing.mp4",
    			// title: "",
    			// vttUrl: "",
    			// },
			},
			...introContentType === "text-image-overlay" && {
				image: {
					url: introContentPhotoGridImagesUrl1,
				},
			},
		}
	}

	let customProps = {
		appPathFolder: "http://localhost:3000/dist",
		actionUrls: actionUrls,
		hero: {
		  image: {
		    url: heroImageUrl ? heroImageUrl : ImgDefaultHero,
		    altText: heroAltText,
		    size: heroImageSize,
		  },
		//   title: {
		//     text: "Undergraduate Degrees",
		//     highlightColor: "gold",
		//   },
		},
		introContent: introContent,
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
