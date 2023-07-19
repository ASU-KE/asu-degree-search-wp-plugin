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
			anchorMenuEnabled,
			dataSourceAcadPlan
		},
		setAttributes,
	} = props;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Show/hide sections - Anchor menu', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Enable anchor menu' }
							help={'Show or hide anchor menu'}
							checked={ anchorMenuEnabled }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuEnabled: value} );
								}
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Data source', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'dataSourceAcadPlan' }
              				help={'any valid acadPlan code example BABUSGLBA'}
							value={ dataSourceAcadPlan }
							onChange={ ( value ) =>
								setAttributes( { dataSourceAcadPlan: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
