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
import { BlockPreview } from '@wordpress/block-editor';
import { useBlockProps } from "@wordpress/block-editor";


/**
 * Block edit function
 *
 * @param {Object} props
 */

const Edit = ( props ) => {
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

	return (
		<>
			<Inspector { ...props } />

			<div {...useBlockProps()}>
      <BlockPreview block={ AsuRfi } viewportWidth={ 800 } />
				<AsuRfi { ...args } />
			</div>
		</>
	);

};

export default Edit;
