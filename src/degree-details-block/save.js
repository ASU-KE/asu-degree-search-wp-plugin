/**
 * External dependencies
 */
//import classnames from 'classnames';
import { useBlockProps } from "@wordpress/block-editor";


const save = ( props ) => {
	const {
		attributes: {
			dataSourceAcadPlan
		},
		className,
	} = props;

	return (
		<div
		id="asu-degree-details-container"
		{...useBlockProps.save()}
			data-dataSourceAcadPlan={ dataSourceAcadPlan }
		></div>
	);
};

export default save;
