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
        endpoint: "https://degrees.apps.asu.edu/t5/service",
        method: "findAllDegrees",
        init: "false", // "true" | "false"Î
        program: dataSourceProgram, // graduate | undergrad
        cert: dataSourceCert, // "true" | "false"
        collegeAcadOrg: dataSourceCollegeAcadOrg, // OPTIONAL example values: CLW, CTB, CTE, CGF - empty string or null to see all
        departmentCode: dataSourceDepartmentCode, // OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL, CSFIS
        blacklistAcadPlans: dataSourceBlacklistAcadPlans ? dataSourceBlacklistAcadPlans.split(',') : "", // OPTIONAL ["BAACCBS", "LAACTBS"], example filters out Accountancy and Actuarial Science
      };

	let degreeUrl = ""
	if(dataSourceProgram === "graduate") {
		degreeUrl = `{DEGREE_NAME}`
		dataSource.cert = "false"
	} else {
		degreeUrl = `{DEGREE_NAME}-{DEGREE_LEVEL}`
	}

	const actionUrls = {
        applyNowUrl: actionApplyNowUrl, // OPTIONAL
        majorInfoUrl: `/degrees/${dataSourceProgram}/${degreeUrl}`,
        // majorInfoUrl:
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
