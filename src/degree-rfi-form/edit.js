/**
 * External dependencies
 */
import { AsuRfi } from "../../resources/asu-unity-stack/packages/app-rfi/src/components/AsuRfi";

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
/* TO ADD:
- college: Use one acadOrgCode from reference
*     https://api.myasuplat-dpl.asu.edu/api/codeset/colleges
* - department: Use one department code. See DepartmentCode values in
*     Degree Search API query.
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
