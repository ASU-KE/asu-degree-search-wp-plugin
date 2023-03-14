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
			campus,
			// actualCampus,
			// college,
			// department,
			studentType,
			areaOfInterest,
			programOfInterest,
			programOfInterestOptional,
			isCertMinor,
			// country,
			// stateProvince,
			successMsg,
			test,
			// dataSourceDegreeSearch,
			// dataSourceAsuOnline,
			// dataSourceCountriesStates,
			submissionUrl,
      sourceID
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
							label={'Campus type'}
							help={ 'Type of campus: Ground, Online, or no preference' }
							value={ campus }
							options={[
								{ label: 'Ground', value: 'GROUND' },
								{ label: 'Online', value: 'ONLNE' },
								{ label: 'No preference', value: 'NOPREF' }
							]}
							onChange={ ( value ) => setAttributes( { campus: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={'Student type'}
							help={ 'Student type: Undergraduate or Graduate' }
							value={ studentType }
							options={[
								{ label: 'Undergraduate', value: 'undergrad' },{ label: 'Graduate', value: 'graduate' }]}
							onChange={ ( value ) => setAttributes( { studentType: value } ) }
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
							label={ 'Area of Interest' }
              help={'Available fields depend on if student is ground or online, and grad or undergrad. example: "Arts" is ground only, "Arts and design" is online only'}
							value={ areaOfInterest }
							onChange={ ( value ) =>
								setAttributes( { areaOfInterest: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Program of Interest' }
              help={'Use catalog code, example: UGHI-FAARTHBA'}
							value={ programOfInterest }
							onChange={ ( value ) =>
								setAttributes( { programOfInterest: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Is Program Optional?' }
							help={'Set selection of program field to optional.'}
							checked={ programOfInterestOptional }

							onChange={ ( value ) => {
                value ? false : true
								setAttributes( {
									programOfInterestOptional: value,
								} );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Is Cert Minor?' }
							help={'Sets RFI to success message, certificates and minors inquiries do not run through ASU RFI system. If the program code of a specific certificate or minor is entered in the program of interest field, the system will attempt to populate the message with the email address associated with the certificate or minor.'}
							checked={ isCertMinor }
              onChange={ (value) => {
                value ? false : true
                setAttributes( {isCertMinor: value} );
            } }

						/>
					</PanelRow>
				</PanelBody>

				<PanelBody
					title={ __( 'Plugin settings', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Submission Success Message' }
							help={
								'Customize the success message displayed when form is submitted. HTML is allowed in this field.'
							}
							value={ successMsg }
							onChange={ ( value ) =>
								setAttributes( { successMsg: value } )
							}
						/>
					</PanelRow>
          <PanelRow>
						<TextControl
							label={ 'Source ID' }
							help={
								'Routes form submissions to appropriate department. DO NOT CHANGE WITHOUT APPROVAL, unintended BEHAVIORS WILL OCCUR.'
							}
							value={ sourceID }
							onChange={ ( value ) =>
								setAttributes( { sourceID: value } )
							}
						/>
					</PanelRow>
          <PanelRow>
						<TextControl
							label={ 'Submission URL' }
							help={
								'URL target of POST request. DO NOT CHANGE WITHOUT APPROVAL, unintended BEHAVIORS WILL OCCUR.'
							}
							value={ submissionUrl }
							onChange={ ( value ) =>
								setAttributes( { submissionUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Enable Test Mode?' }
							help={'For developers, alerts submission json.'}
							checked={ test }
              value={ test }
							onChange={ ( value ) => {
                value ? false : true
								setAttributes( { test: value } );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
