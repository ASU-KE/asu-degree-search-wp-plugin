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
			submissionUrl
		},
		className,
	} = props;

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
			data-datasource={ dataSourceDegreeSearch }
			data-datasourceonline={ dataSourceAsuOnline }
			data-datasourcecountriesstates={ dataSourceCountriesStates }
			data-submissionurl={ submissionUrl }
		></div>
	);
};

export default save;
