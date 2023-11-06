const { render } = wp.element;

import { ListingPage } from "../../resources/asu-unity-stack/packages/app-degree-pages/src/components/ListingPage"
import ImgDefaultHero from "../../resources/asu-unity-stack/packages/app-degree-pages/src/assets/img/listing-page/hero.jpg"


// It is possible to load multiple forms onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const listingBlock = document.getElementById( 'asu-degree-overview-container' )

	const dataSourceBlacklistAcadPlans = listingBlock.dataset.datasourceblacklistacadplans
	const dataSourceCollegeAcadOrg = listingBlock.dataset.datasourcecollegeacadorg
	const dataSourceDepartmentCode = listingBlock.dataset.datasourcedepartmentcode
	const dataSourceProgram = listingBlock.dataset.datasourceprogram
	const dataSourceCert = String(listingBlock.dataset.datasourcecert)

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

	//const wordpressMediaDate = listingBlock.dataset.wordpressmediadate

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
	let introContent = null
	if(enableIntroContent){
		if(introContentType === "text") {
			introContent = {
				type: "text",
				title: {
				  text:
					"ASU offers more than 800 undergraduate and graduate degrees, minors and certificates in a wide range of academic disciplines. Explore the degree programs below to find the path that's right for you.",
				  highlightColor: "gold",
				},
				content: {
				  text:
					"ASU offers more than 800 undergraduate and graduate degrees, minors and certificates in a wide range of academic disciplines. Explore the degree programs below to find the path that's right for you.",
					highlightColor: "gold",
				},
			  };
		}
		if(introContentType === "text-photo-grid") {
			 // =======================================================================
      // Optional introContent configuration which type is "text-photo-grid"
      // =======================================================================
      introContent = {
        type: "text-photo-grid",
        title: {
          text:
            "This is introductory marketing copy. Lorem ipsum dolor sit amet",
          // component: "h2", default h2
        },
        contents: [
          {
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
          },
        ],
        photoGrid: {
          images: [
            {
              url: "./assets/img/demo-phot-1.jpeg",
            },
            {
              url: "./assets/img/demo-phot-2.jpeg",
            },
            {
              url: "./assets/img/demo-phot-3.jpeg",
            },
            {
              url: "./assets/img/demo-phot-4.jpeg",
            },
          ],
        },
      };
		}

		if(introContentType === "text-media") {
      // =======================================================================
      // Optional introContent configuration which type is "text-media"
      // =======================================================================
      introContent = {
        type: "text-media",
        title: {
          text:
            "This is introductory marketing copy. Lorem ipsum dolor sit amet",
          // component: "h2", default h2
        },
        contents: [
          {
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
          },
        ],
        image: {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        // video: {
        //   url: "./assets/video/stock-video-person-drawing.mp4",
        //   title: "",
        //   vttUrl: "",
        // },
      }; }
	  if(introContentType === "text-image-overlay") {
      // =======================================================================
      // Optional introContent configuration which type is "text-image-overlay"
      // =======================================================================
      introContent = {
        type: "text-image-overlay",
        header: {
          text: "Intro Content Image Overlay",
          // component: "h2", default h2
        },
        title: {
          text: "This is the contents that goes in the box",
          // component: "h2", default h2
        },
        contents: [
          {
            text: `Instagram tour operator travel sailing flying package.
           Territory New York City group discount active lifestyle creditcard
           insurance wellness kayak guide overnight rural lonely planet.`,
          },
          {
            text: `Train luxury Paris recommendations nature France sight seeing.
           Flexibility Amsterdam maps.
           Pacific lonely planet private jet national insurance taxi tourist attractions.
           Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`,
          },
        ],
        image: {
          url: "https://source.unsplash.com/random/800x600?a=1",
        },
      };}
      // =======================================================================
      // Optional introContent configuration which type is "text"
      // =======================================================================
    //   const introContentText = {
    //     type: "text",
    //     title: {
    //       text:
    //         "This is introductory marketing copy. Lorem ipsum dolor sit amet",
    //       // component: "h2", default h2
    //     },
    //     contents: [
    //       {
    //         text: `<strong>Lorem, ipsum dolor</strong> sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    //   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    //   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
    //       },
    //     ],
    //   };
	}


	let customProps = {
		appPathFolder: "http://localhost:3000/dist",
		actionUrls: actionUrls,
		introContent: introContent,
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
