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
			anchorMenuAtAGlance,
			anchorMenuApplicationRequirements,
			anchorMenuChangeMajorRequirements,
			anchorMenuNextSteps,
			anchorMenuAffordingCollege,
			anchorMenuFlexibleDegreeOptions,
			anchorMenuCareerOutlook,
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
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - At a Glance' }
							help={'Show or hide At a Glance link'}
							checked={ anchorMenuAtAGlance }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuAtAGlance: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - Application Requirements' }
							help={'Show or hide application requirements link'}
							checked={ anchorMenuApplicationRequirements }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuApplicationRequirements: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - Change Major Requirements' }
							help={'Show or hide change major requirements link'}
							checked={ anchorMenuChangeMajorRequirements }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuChangeMajorRequirements: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - Next steps' }
							help={'Show or hide next steps link'}
							checked={ anchorMenuNextSteps }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuNextSteps: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - Affording college' }
							help={'Show or hide Affording college link'}
							checked={ anchorMenuAffordingCollege }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuAffordingCollege: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - Flexible degree options' }
							help={'Show or hide Flexible degree options link'}
							checked={ anchorMenuFlexibleDegreeOptions }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuFlexibleDegreeOptions: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - career outlook' }
							help={'Show or hide career outlook link'}
							checked={ anchorMenuCareerOutlook }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuCareerOutlook: value} );
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
