/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
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

	return (
		<div
		id="asu-degree-details-container"
		{...useBlockProps.save()}
			data-anchorMenuEnabled={ anchorMenuEnabled }
			data-anchorMenuAtAGlance={ anchorMenuAtAGlance }
			data-anchorMenuApplicationRequirements={ anchorMenuApplicationRequirements }
			data-anchorMenuChangeMajorRequirements={ anchorMenuChangeMajorRequirements }
			data-anchorMenuNextSteps={ anchorMenuNextSteps }
			data-anchorMenuAffordingCollege={ anchorMenuAffordingCollege }
			data-anchorMenuFlexibleDegreeOptions={ anchorMenuFlexibleDegreeOptions }
			data-dataSourceAcadPlan={ dataSourceAcadPlan }
		></div>
	);
};

export default save;
