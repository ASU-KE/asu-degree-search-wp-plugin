const { render } = wp.element;

import { AsuRfi } from '../../resources/asu-unity-stack/packages/app-rfi/src/components/AsuRfi';
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
	const areaOfInterest = form.dataset.areaofinterest || undefined;
	const programOfInterest = form.dataset.programofinterest || undefined;
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

	window.addEventListener("load", (event) => {
		const postInput = Object.assign(document.createElement('input'), {
			name: 'action',
			type: 'hidden',
			value: 'ke_asu_rfi_form_submit'
		});
		// Get the div container by its ID
		let divContainer = document.getElementById('asu-degree-rfi-container');
		// Get the form element inside the div container
		let formElement = divContainer.querySelector('form');
		// Append this element to the form
		formElement.appendChild(postInput)

		console.log('apppended the child')
	})


	render(
		<AsuRfi
			campus={ campus }
			actualCampus={ actualCampus }
			studentType={ studentType }
			areaOfInterest={ areaOfInterest }
			programOfInterest={ programOfInterest }
			programOfInterestOptional={ programOfInterestOptional }
			isCertMinor={ isCertMinor }
			// successMsg={ successMsg }
			test={ test }
			// dataSourceDegreeSearch={ dataSourceDegreeSearch }
			// dataSourceAsuOnline={ dataSourceAsuOnline }
			// dataSourceCountriesStates={ dataSourceCountriesStates }
			submissionUrl={ submissionUrl }
		/>,
		form
	);
} );
