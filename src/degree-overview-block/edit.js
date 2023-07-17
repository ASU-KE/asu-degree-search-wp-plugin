/**
 * External dependencies
 */
import { ListingPage } from "../../resources/app-degree-pages/src/components/ListingPage"

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
			actionUrls,
			dataSourceBlacklistAcadPlans,
			dataSourceCollegeAcadOrg,
			dataSourceDepartmentCode,
			dataSourceProgram,
			defaultView,
			degreesPerPage,
			hero,
			introContent,
			programList,
			hasFilters,
			hasSearchBar,
		},
		className,
	} = props;
	//console.log(`attribute props: ${JSON.stringify(props)}`);
	const args = {
		actionUrls,
		dataSourceBlacklistAcadPlans,
		dataSourceCollegeAcadOrg,
		dataSourceDepartmentCode,
		dataSourceProgram,
		defaultView,
		degreesPerPage,
		hero,
		introContent,
		programList,
		hasFilters,
		hasSearchBar,
	};
	//console.log(`args: ${JSON.stringify(args)}`);
	return (
		<>
			<Inspector { ...props } />

			<div {...useBlockProps()}>
				<ListingPage { ...args } />
			</div>
		</>
	);

};

export default Edit;
