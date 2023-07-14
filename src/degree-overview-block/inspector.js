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
			actionUrls,
			degreesPerPage,
			hero,
			introContent,
			programList,
			hasFilters,
			hasSearchBar,
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
					<PanelRow>
						<SelectControl
							label={'actionUrls'}
							help={ 'actionUrls' }
							value={ actionUrls }
							options={[
								{ label: 'No preference', value: "" },
								{ label: 'Tempe', value: 'TEMPE' },
								{ label: 'Downtown Phoenix', value: 'DTPHX' },
								{ label: 'Polytechnic', value: 'POLY' },
								{ label: 'West', value: 'WEST' },
								{ label: 'Online', value: 'ONLNE' }
							]}
							onChange={ ( value ) => setAttributes( { actionUrls: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={'hero'}
							help={ 'hero' }
							value={ hero }
							options={[
								{ label: 'Ground', value: 'GROUND' },
								{ label: 'Online', value: 'ONLNE' },
								{ label: 'No preference', value: 'NOPREF' }
							]}
							onChange={ ( value ) => setAttributes( { hero: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Program filtering', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Degrees Per Page' }
              				help={'Number of degrees displayed per search page'}
							value={ degreesPerPage }
							onChange={ ( value ) =>
								setAttributes( { degreesPerPage: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'programList' }
              help={'programList'}
							value={ programList }
							onChange={ ( value ) =>
								setAttributes( { programList: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'User filtering' }
							help={'Show or hide degree filtering controls (Campuses or online, ASU location, ASU LocalAccelerated, Concurrent)'}
							checked={ hasFilters }
              onChange={ (value) => {
                value ? false : true
                setAttributes( {hasFilters: value} );
            } }

						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Search bar' }
							help={'Show or hide search degree programs via text input'}
							checked={ hasSearchBar }
              onChange={ (value) => {
                value ? false : true
                setAttributes( {hasSearchBar: value} );
            } }

						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
