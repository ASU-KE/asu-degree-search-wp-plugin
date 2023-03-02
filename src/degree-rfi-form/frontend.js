const { render } = wp.element;

import { AsuRfi } from '../../resources/asu-degree-rfi/src/components/AsuRfi';
// import { AsuRfi } from "@asu/app-rfi/dist/appRfi.es";

// It is possible to load multiple forms onto a page.
// Load each DOM element on page using the Gutenberg-generated class for the Testimonial block
const rfiForms = document.querySelectorAll( '.wp-block-asu-degree-search-degree-rfi-form' );

rfiForms.forEach( ( form ) => {
	const campus = form.dataset.campus;
	const actualCampus = form.dataset.actualcampus;
	const college = form.dataset.college;
	const department = form.dataset.department;
	const studentType = form.dataset.studenttype;
  //const areaOfInterest = form.dataset.areaofinterest;
	// const programOfInterest = form.dataset.programofinterest;
	const areaOfInterest = form.dataset.areaofinterest;
	const programOfInterest = form.dataset.programofinterest;
	// const areaOfInterest = (form.dataset.areaofinterest ? form.dataset.areaofinterest : undefined);
	// const programOfInterest = (form.dataset.programofinterest ? form.dataset.programofinterest : undefined);
	const programOfInterestOptional = "true" === form.dataset.programofinterestoptional;
	const isCertMinor = "true" === form.dataset.iscertminor;
	const country = form.dataset.country;
	const stateProvince = form.dataset.stateprovince;
	const successMsg = form.dataset.successmsg;
	const test = "true" === form.dataset.test;
	const dataSourceDegreeSearch = form.dataset.datasourcedegreesearch;
	const dataSourceAsuOnline = form.dataset.datasourceasuonline;
	const dataSourceCountriesStates = form.dataset.datasourcecountriesstates;
	const submissionUrl = form.dataset.submissionurl;
	const sourceID = form.dataset.sourceid;

	render(
		<AsuRfi
			campus={ campus }
			actualCampus={ actualCampus }
			studentType={ studentType }
			areaOfInterest={ areaOfInterest }
			// programOfInterest={ programOfInterest }
			programOfInterestOptional={ programOfInterestOptional }
			isCertMinor={ isCertMinor }
			// successMsg={ successMsg }
			test={ test }
			// dataSourceDegreeSearch={ dataSourceDegreeSearch }
			// dataSourceAsuOnline={ dataSourceAsuOnline }
			// dataSourceCountriesStates={ dataSourceCountriesStates }
			submissionUrl={ submissionUrl }
			sourceID={ sourceID }
		/>,
		form
	);
} );
