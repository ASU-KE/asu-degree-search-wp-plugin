/**
 * External dependencies
 */
import { AsuRfi } from "../../resources/asu-degree-rfi/src/components/AsuRfi";
// import { AsuRfi } from "@asu/app-rfi/dist/appRfi.es";

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
			campus,
			actualCampus,
			// college,
			// department,
			studentType,
			areaOfInterest,
			programOfInterest,
			programOfInterestOptional,
			isCertMinor,
			// country,
			// stateProvince,
			successMsg,
			test,
			dataSourceDegreeSearch,
			dataSourceAsuOnline,
			dataSourceCountriesStates,
			submissionUrl,
			sourceID
		},
		className,
	} = props;
	console.log(`attribute props: ${JSON.stringify(props)}`);
	const args = {
		campus,
		actualCampus,
		// college,
		// department,
		studentType,
		areaOfInterest,
		programOfInterest,
		programOfInterestOptional,
		isCertMinor,
		// country,
		// stateProvince,
		successMsg,
		test,
		dataSourceDegreeSearch,
		dataSourceAsuOnline,
		dataSourceCountriesStates,
		submissionUrl,
    sourceID
	};
	console.log(`args: ${JSON.stringify(args)}`);
	return (
		<>
			<Inspector { ...props } />

			<div {...useBlockProps()}>
				<AsuRfi { ...args }
				areaOfInterest={args.areaOfInterest || undefined}
				programOfInterest={args.programOfInterest || undefined}
				actualCampus={args.actualCampus || undefined} />
			</div>
		</>
	);

};

export default Edit;
