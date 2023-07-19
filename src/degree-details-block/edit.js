/**
 * External dependencies
 */
import { DetailPage } from "../../resources/app-degree-pages/src/components/DetailPage"

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
	//console.log(`starting props: ${JSON.stringify(props)}`);
	const {
		attributes: {
			anchorMenuEnabled,
			anchorMenuAtAGlance,
			anchorMenuApplicationRequirements,
			anchorMenuChangeMajorRequirements,
			anchorMenuNextSteps,
			anchorMenuAffordingCollege,
			anchorMenuFlexibleDegreeOptions,
			dataSourceAcadPlan
		},
		className,
	} = props;
	//console.log(`attribute props: ${JSON.stringify(props)}`);
	const args = {
		anchorMenuEnabled,
		anchorMenuAtAGlance,
		anchorMenuApplicationRequirements,
		anchorMenuChangeMajorRequirements,
		anchorMenuNextSteps,
		anchorMenuAffordingCollege,
		anchorMenuFlexibleDegreeOptions,
		dataSourceAcadPlan
	};
	//console.log(`args: ${JSON.stringify(args)}`);
	return (
		<>
			<Inspector { ...props } />

			<div {...useBlockProps()}>
				<DetailPage { ...args } />
			</div>
		</>
	);

};

export default Edit;
