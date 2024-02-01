/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
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

	//7016T000002c8qMQAQ
	function splitSourceID(sourceID) {
		// Check if sourceID is the correct length
		// if (sourceID.length !== 18) {
		// 	throw new Error('sourceID must be 18 characters long');
		// }

		// Split the sourceID string into 3 equal parts
		const part1 = sourceID.substring(0, 6);
		const part2 = sourceID.substring(6, 12);
		const part3 = sourceID.substring(12, 18);

		// Return the pieces
		return [part1, part2, part3];
	}
	const pieces = splitSourceID(sourceID);

	return (
		<div
      id="asu-degree-rfi-container"
      {...useBlockProps.save()}
			data-campus={ campus }
			data-actualcampus={ actualCampus }
			data-studenttype={ studentType }
			data-areaofinterest={ areaOfInterest }
			data-programofinterest={ programOfInterest }
			data-programofinterestoptional={ programOfInterestOptional }
			data-iscertminor={ isCertMinor }
			data-successmsg={ successMsg }
			data-test={ test }
			//data-datasource={ dataSourceDegreeSearch }
			//data-datasourceonline={ dataSourceAsuOnline }
			//data-datasourcecountriesstates={ dataSourceCountriesStates }
			data-submissionurl={ submissionUrl }
			data-maroon={ pieces[0] }
			data-gold={ pieces[1] }
			data-asu={ pieces[2] }
		></div>
	);
};

export default save;
