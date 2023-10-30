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
			dataSourceBlacklistAcadPlans,
			dataSourceCollegeAcadOrg,
			dataSourceDepartmentCode,
			dataSourceProgram,
			dataSourceCert,
			defaultView,
			degreesPerPage,
			heroImageUrl,
			heroAltText,
			heroImageSize,
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
							label={'Program level'}
							help={ 'Display undergrad or graduate programs.' }
							value={ dataSourceProgram }
							options={[
								{ label: 'undergrad', value: "undergrad" },
								{ label: 'graduate', value: "graduate" }
							]}
							onChange={ ( value ) => setAttributes( { dataSourceProgram: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>

					{dataSourceProgram == 'undergrad' && (

					<PanelRow>
						<ToggleControl
							label={ 'Certificates and minors' }
							help={'Show or hide undergrad certificates and minors. Only applicable to undergrad programs.'}
							checked={ dataSourceCert }
              				onChange={ (value) => {
                				value ? false : true
                				setAttributes( {dataSourceCert: value} );
								}
							}
						/>
					</PanelRow>
					)}

					<PanelRow>
						<SelectControl
							label={'View style'}
							help={ 'The degree overview list style - Degree cards will be added into future update' }
							value={ defaultView }
							options={[
								{ label: 'List style', value: "list-view" }
							]}
							onChange={ ( value ) => setAttributes( { defaultView: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
					{/* <PanelRow>
						<TextControl
							label={ 'View style - Grid images' }
              				help={'If using grid style, user can set card images. Name the uploaded image using the academic plan code of the degree, ex. "BAACCBS.jpg". Set the date of upload in this field ex. "2023/07"'}
							value={ wordpressMediaDate }
							onChange={ ( value ) =>
								setAttributes( { wordpressMediaDate: value } )
							}
						/>
					</PanelRow> */}
					<PanelRow>
						<TextControl
							label={ 'College Academic Org' }
              				help={'OPTIONAL example values: CLW, CTB, CTE, CGF - empty string to see all'}
							value={ dataSourceCollegeAcadOrg }
							onChange={ ( value ) =>
								setAttributes( { dataSourceCollegeAcadOrg: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Department Code' }
              				help={'OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL, CSFIS - empty string to see all'}
							value={ dataSourceDepartmentCode }
							onChange={ ( value ) =>
								setAttributes( { dataSourceDepartmentCode: value } )
							}
						/>
					</PanelRow>
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
							label={ 'Hide specific academic plan' }
              				help={'OPTIONAL, example filters out Accountancy and Actuarial Science. Use comma seperated list for multiple - BAACCBS,LAACTBS'}
							value={ dataSourceBlacklistAcadPlans }
							onChange={ ( value ) =>
								setAttributes( { dataSourceBlacklistAcadPlans: value } )
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

				<PanelBody
					title={ __( 'Program filtering', 'unityblocks' ) }
					initialOpen={ false }
				>

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
              				help={'required for a11y'}
							value={ heroAltText }
							onChange={ ( value ) =>
								setAttributes( { heroAltText: value } )
							}
						/>
					</PanelRow>
				<PanelRow>
						<SelectControl
							label={'Hero image size'}
							help={ 'Set vertical height of hero' }
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
			</InspectorControls>
		</>
	);
};

export default Inspector;
