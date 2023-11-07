/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl, ToggleControl, TextareaControl } from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
const Inspector = ( props ) => {
	const {
		attributes: {
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
			programList,
			hasFilters,
			hasSearchBar,
			actionApplyNowUrl,
			enableIntroContent,
			introContentType,
			introContentTitleText,
			introContentContentsText,
			introContentPhotoGridImagesUrl1,
			introContentPhotoGridImagesUrl2,
			introContentPhotoGridImagesUrl3,
			introContentPhotoGridImagesUrl4,
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
                				value ? true : false
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
					<PanelRow>
						<TextControl
							label={ 'Apply Now URL' }
              				help={'OPTIONAL change CTA button URL.'}
							value={ actionApplyNowUrl }
							onChange={ ( value ) =>
								setAttributes( { actionApplyNowUrl: value } )
							}
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
					<PanelBody
					title={ __( 'Intro marketing text settings', 'unityblocks' ) }
					initialOpen={ false }
					/>
					<PanelRow>
						<ToggleControl
							label={ 'Display intro content' }
							help={'Show or hide intro content/CTA area'}
							checked={ enableIntroContent }
              onChange={ (value) => {
                value ? false : true
                setAttributes( {enableIntroContent: value} );
            } }

						/>
					</PanelRow>
					{enableIntroContent == true && (
						<PanelBody>
							<PanelRow>
								<SelectControl
									label={'Intro content type'}
									help={ 'Set style for CTA intro content before search area.<br/>Basic text<br/>Photo grid<br/>Media<br/>Image overlay' }
									value={ introContentType }
									options={[
										{ label: 'Basic text', value: 'text' },
										{ label: 'Photo grid', value: 'text-photo-grid' },
										{ label: 'Media', value: 'text-media' },
										{ label: 'Image overlay', value: 'text-image-overlay' }
									]}
									onChange={ ( value ) => setAttributes( { introContentType: value } ) }
									__nextHasNoMarginBottom
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Title' }
									help={'Main CTA title, HTML not allowed'}
									value={ introContentTitleText }
									onChange={ ( value ) =>
										setAttributes( { introContentTitleText: value } )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextareaControl
									label={ 'Content' }
									help={'HTML allowed (strong, br, etc.)'}
									value={ introContentContentsText }
									onChange={ ( value ) =>
										setAttributes( { introContentContentsText: value } )
									}
								/>
							</PanelRow>
						</PanelBody>

					)}
					{introContentType == 'text-photo-grid' && (
						<PanelBody>
							<PanelRow>
								<TextControl
									label={ 'Photo grid image 1' }
									help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
									value={ introContentPhotoGridImagesUrl1 }
									onChange={ ( value ) =>
										setAttributes( { introContentPhotoGridImagesUrl1: value } )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Photo grid image 2' }
									help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
									value={ introContentPhotoGridImagesUrl2 }
									onChange={ ( value ) =>
										setAttributes( { introContentPhotoGridImagesUrl2: value } )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Photo grid image 3' }
									help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
									value={ introContentPhotoGridImagesUrl3 }
									onChange={ ( value ) =>
										setAttributes( { introContentPhotoGridImagesUrl3: value } )
									}
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label={ 'Photo grid image 4' }
									help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
									value={ introContentPhotoGridImagesUrl4 }
									onChange={ ( value ) =>
										setAttributes( { introContentPhotoGridImagesUrl4: value } )
									}
								/>
							</PanelRow>

						</PanelBody>
					)}
					{introContentType == 'text-media' && (
						<PanelBody>
							<PanelRow>
								<TextControl
									label={ 'Media image' }
									help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
									value={ introContentPhotoGridImagesUrl1 }
									onChange={ ( value ) =>
										setAttributes( { introContentPhotoGridImagesUrl1: value } )
									}
								/>
							</PanelRow>
						</PanelBody>
					)}
					{introContentType == 'text-image-overlay' && (
						<PanelBody>
							<PanelRow>
								<TextControl
									label={ 'Image overlay image' }
									help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
									value={ introContentPhotoGridImagesUrl1 }
									onChange={ ( value ) =>
										setAttributes( { introContentPhotoGridImagesUrl1: value } )
									}
								/>
							</PanelRow>
						</PanelBody>
					)}
			</InspectorControls>
		</>
	);
};

export default Inspector;
