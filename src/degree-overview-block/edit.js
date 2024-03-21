/**
 * External dependencies
 */
import { ListingPage } from "../../resources/asu-unity-stack/packages/app-degree-pages/src/components/ListingPage"
// default img
import ImgDefaultHero from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/listing-page/hero.jpg"
/**
 * Internal dependencies
 */
// import Controls from './controls';
import Inspector from './inspector';
import { useBlockProps } from "@wordpress/block-editor";


/**
 * Block edit function
 *
 * @param {Object} props
 */

const Edit = ( props ) => {
	console.log(`starting props: ${JSON.stringify(props)}`);
	const {
		attributes: {
			dataSourceBlacklistAcadPlans,
			dataSourceCollegeAcadOrg,
			dataSourceDepartmentCode,
			dataSourceProgram,
			dataSourceCert,
			defaultView,
			degreesPerPage,
			heroImageUrl,
			heroAltText,
			heroImageSize,
			hasFilters,
			hasSearchBar,
			actionApplyNowUrl,
			enableIntroContent,
			introContentType,
			introContentTitleText,
			introContentContentsText,
			introContentPhotoGridImagesUrl1,
			introContentPhotoGridImagesUrl2,
			introContentPhotoGridImagesUrl3,
			introContentPhotoGridImagesUrl4,
		},
		className,
	} = props;
	console.log(`attribute props: ${JSON.stringify(props)}`);

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
        // majorInfoUrl: custom set in resources/asu-unity-stack submodule
		//default:
		// majorInfoUrl:
  		//   `${DOMAIN_URL}/programs/t5/majorinfo/` +
  		//   `{INSTITUTION_CODE}/{ACAD_PLAN_CODE}/undergrad/false`,
        //   `programs/College/{ACAD_PLAN_CODE}/undergrad/false`
        // more example here: https://asudev.jira.com/browse/WS2-691?focusedCommentId=1302038
    };

	let introContent = null;

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

	let customProps1 = {
		appPathFolder: ".", // OPTIONAL
		actionUrls,
		hero: null,
		introContent: {
		  type: "text",
		  title: {
			text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
		  },
		  contents: [
			{
			  text: `<p>Lorem, <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
		   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
		   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
		   </p>`,
			},
			{
			  text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
		   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
		   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
			},
		  ],
		},
		// hasFilters: false, // OPTIONAL
		// hasSearchBar: false, // OPTIONAL
		programList: {
		  dataSource,
		  // OPTIONAL
		  // settings: {
		  // hideCollegeSchool: true,
		  // defaultView: "grid-view", // or "list-view"
		  // cardDefaultImage: {
		  //   url: `examples/assets/img/ds_header_undergrad.jpg`,
		  // },
		  // },
		},
	  };

	return (
		<>
			<Inspector { ...props } />

			<div {...useBlockProps()}>
				<ListingPage {...customProps} />
			</div>
		</>
	);

};

export default Edit;
