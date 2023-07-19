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
			anchorMenuExampleCareers,
			anchorMenuGlobalOpportunity,
			anchorMenuProgramContactInfo,
			dataSourceAcadPlan,
			heroImageUrl,
			heroAltText,
			heroImageSize,
			introContentImageUrl,
			introContentImageAltText
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
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - example careers' }
							help={'Show or hide example careers link'}
							checked={ anchorMenuExampleCareers }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuExampleCareers: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - global opportunity' }
							help={'Show or hide global opportunity link'}
							checked={ anchorMenuGlobalOpportunity }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuGlobalOpportunity: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Anchor menu - program contact info' }
							help={'Show or hide program contact info link'}
							checked={ anchorMenuProgramContactInfo }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {anchorMenuProgramContactInfo: value} );
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
				<PanelBody
					title={ __( 'Hero settings', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Hero image URL' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ heroImageUrl }
							onChange={ ( value ) =>
								setAttributes( { heroImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Hero image alt text' }
              				help={'required for a11y '}
							value={ heroAltText }
							onChange={ ( value ) =>
								setAttributes( { heroAltText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={'Hero image size'}
							help={ 'Set hero height' }
							value={ heroImageSize }
							options={[
								{ label: 'Small', value: 'small' },
								{ label: 'Medium', value: 'medium' },
								{ label: 'Large', value: 'large' }
							]}
							onChange={ ( value ) => setAttributes( { heroImageSize: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Intro content', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Intro content image URL' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ introContentImageUrl }
							onChange={ ( value ) =>
								setAttributes( { introContentImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Intro content image alt text' }
              				help={'required for a11y'}
							value={ introContentImageAltText }
							onChange={ ( value ) =>
								setAttributes( { introContentImageAltText: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
