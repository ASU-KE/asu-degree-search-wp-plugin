/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
			dataSourceAcadPlan
		},
		setAttributes,
	} = props;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Program selection', 'unityblocks' ) }
					initialOpen={ false }
				>
					{/* <PanelRow>
						<SelectControl
							label={'View style'}
							help={ 'The degree overview list can be styled as a list or cards.' }
							value={ defaultView }
							options={[
								{ label: 'Grid style', value: "grid-view" },
								{ label: 'List style', value: "list-view" }
							]}
							onChange={ ( value ) => setAttributes( { defaultView: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow> */}
					<PanelRow>
						<TextControl
							label={ 'Degree plan code' }
              				help={'Code to display degree data. Any valid acadPlan code, example: BABUSGLBA'}
							value={ dataSourceAcadPlan }
							onChange={ ( value ) =>
								setAttributes( { dataSourceAcadPlan: value } )
							}
						/>
					</PanelRow>
					{/* <PanelRow>
						<ToggleControl
							label={ 'User filtering' }
							help={'Show or hide degree filtering controls (Campuses or online, ASU location, ASU LocalAccelerated, Concurrent)'}
							checked={ hasFilters }
              onChange={ (value) => {
                value ? false : true
                setAttributes( {hasFilters: value} );
            } }

						/>
					</PanelRow> */}
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
