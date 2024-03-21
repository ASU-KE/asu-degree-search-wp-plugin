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
			anchorMenuApplicationRequirements,
			anchorMenuNextSteps,
			anchorMenuAffordingCollege,
			anchorMenuCareerOutlook,
			anchorMenuGlobalOpportunity,
			dataSourceAcadPlan,
			heroHide,
			heroImageUrl,
			heroAltText,
			heroImageSize,
			introContentImageUrl,
			introContentImageAltText,
			introContentHideMarketText,
			introContentHideProgramDesc,
			introContentHideRequiredCourses,
			atAGlanceHide,
			atAGlanceApplicationRequirementsHide,
			atAGlanceChangeMajorRequirementsHide,
			nextStepsHide,
			nextStepsCardsLearnMoreIconPrefix,
			affordingCollegeHide,
			flexibleDegreeOptionsHide,
			careerOutlookImageUrl,
			careerOutlookImageAltText,
			exampleCareersHide,
			globalOpportunityHide,
			globalOpportunityImageUrl,
			globalOpportunityAltText,
			whyChooseAsuHide,
			whyChooseAsuCardsSectionIntroText,
			whyChooseAsuCardsFacultyTitle,
			whyChooseAsuCardsFacultyText,
			whyChooseAsuCardsFacultyButtonLabel,
			whyChooseAsuCardsFacultyButtonColor,
			whyChooseAsuCardsFacultyButtonHref,
			whyChooseAsuCardsFacultyImageUrl,
			whyChooseAsuCardsFacultyAltText,
			whyChooseAsuCardsProgramsTitle,
			whyChooseAsuCardsProgramsText,
			whyChooseAsuCardsProgramsButtonLabel,
			whyChooseAsuCardsProgramsButtonColor,
			whyChooseAsuCardsProgramsButtonHref,
			whyChooseAsuCardsProgramsImageUrl,
			whyChooseAsuCardsProgramsAltText,
			whyChooseAsuCardsResearchTitle,
			whyChooseAsuCardsResearchText,
			whyChooseAsuCardsResearchButtonLabel,
			whyChooseAsuCardsResearchButtonColor,
			whyChooseAsuCardsResearchButtonHref,
			whyChooseAsuCardsResearchImageUrl,
			whyChooseAsuCardsResearchAltText,
			whyChooseAsuCardsInclusionTitle,
			whyChooseAsuCardsInclusionText,
			whyChooseAsuCardsInclusionButtonLabel,
			whyChooseAsuCardsInclusionButtonColor,
			whyChooseAsuCardsInclusionButtonHref,
			whyChooseAsuCardsInclusionImageUrl,
			whyChooseAsuCardsInclusionAltText,
			whyChooseAsuCardsMentorsTitle,
			whyChooseAsuCardsMentorsText,
			whyChooseAsuCardsMentorsButtonLabel,
			whyChooseAsuCardsMentorsButtonColor,
			whyChooseAsuCardsMentorsButtonHref,
			whyChooseAsuCardsMentorsImageUrl,
			whyChooseAsuCardsMentorsAltText,
			whyChooseAsuCardsHonorsTitle,
			whyChooseAsuCardsHonorsText,
			whyChooseAsuCardsHonorsButtonLabel,
			whyChooseAsuCardsHonorsButtonColor,
			whyChooseAsuCardsHonorsButtonHref,
			whyChooseAsuCardsHonorsImageUrl,
			whyChooseAsuCardsHonorsAltText,
			attendOnlineHide,
			attendOnlineImageUrl,
			attendOnlineAltText,
			programContactInfoHide,
			programContactInfoDepartmentText,
			programContactInfoDepartmentUrl,
			programContactInfoEmailText,
			programContactInfoEmailUrl
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
						<ToggleControl
							label={ 'Hide hero section' }
							checked={ heroHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {heroHide: value} );
								}
							}
						/>
					</PanelRow>
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
					<PanelRow>
						<ToggleControl
							label={ 'Intro content - Hide marketing text' }
							help={'Marketing Text for Program in PeopleSoft'}
							checked={ introContentHideMarketText }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {introContentHideMarketText: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'introContentHideProgramDesc' }
							help={'introContentHideProgramDesc'}
							checked={ introContentHideProgramDesc }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {introContentHideProgramDesc: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Intro content - hide required courses' }
							help={'Required courses/major map section'}
							checked={ introContentHideRequiredCourses }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {introContentHideRequiredCourses: value} );
								}
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'At a glance', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'At a glance - hide section' }
							help={'MathIntensity MinMathReq'}
							checked={ atAGlanceHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {atAGlanceHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'At a glance - hide application requirements' }
							help={'hide application requirements'}
							checked={ atAGlanceApplicationRequirementsHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {atAGlanceApplicationRequirementsHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'At a glance - hide change major requirements' }
							help={'hide change major requirements'}
							checked={ atAGlanceChangeMajorRequirementsHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {atAGlanceChangeMajorRequirementsHide: value} );
								}
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Next steps', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Hide next steps section' }
							checked={ nextStepsHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {nextStepsHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelBody
						title={ __( 'Next steps - Learn more card', 'unityblocks' ) }
						initialOpen={ false }
						>
					<PanelRow>
						<TextControl
							label={ 'Next steps - Learn more card icon prefix' }
							value={ nextStepsCardsLearnMoreIconPrefix }
							onChange={ ( value ) =>
								setAttributes( { nextStepsCardsLearnMoreIconPrefix: value } )
							}
						/>
					</PanelRow>
					</PanelBody>
				</PanelBody>
				<PanelBody
					title={ __( 'Affording college', 'unityblocks' ) }
					initialOpen={ false }
				>
										<PanelRow>
						<ToggleControl
							label={ 'hide affording college section' }
							checked={ affordingCollegeHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {affordingCollegeHide: value} );
								}
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Flexible degree options', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Hide flexible degree options section' }
							checked={ flexibleDegreeOptionsHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {flexibleDegreeOptionsHide: value} );
								}
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Careers', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ 'Career outlook image URL' }
							help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ careerOutlookImageUrl }
							onChange={ ( value ) =>
								setAttributes( { careerOutlookImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Career outlook image alt text' }
              				help={'required for a11y'}
							value={ careerOutlookImageAltText }
							onChange={ ( value ) =>
								setAttributes( { careerOutlookImageAltText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ 'Hide example careers section' }
							checked={ exampleCareersHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {exampleCareersHide: value} );
								}
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Global opportunity', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Hide global opportunity section' }
							checked={ globalOpportunityHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {globalOpportunityHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Global opportunity image URL' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ globalOpportunityImageUrl }
							onChange={ ( value ) =>
								setAttributes( { globalOpportunityImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Global opportunity image alt text' }
              				help={'required for a11y'}
							value={ globalOpportunityAltText }
							onChange={ ( value ) =>
								setAttributes( { globalOpportunityAltText: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Why ASU', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Hide why ASU section' }
							checked={ whyChooseAsuHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {whyChooseAsuHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Section intro text' }
							help={'blank space will hide the default text'}
							value={ whyChooseAsuCardsSectionIntroText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsSectionIntroText: value } )
							}
						/>
					</PanelRow>
					<PanelBody
						title={ __( 'Why ASU cards - Faculty', 'unityblocks' ) }
						initialOpen={ false }
						>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Faculty title' }
							value={ whyChooseAsuCardsFacultyTitle }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsFacultyTitle: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Faculty text' }
							value={ whyChooseAsuCardsFacultyText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsFacultyText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Faculty button text' }
							value={ whyChooseAsuCardsFacultyButtonLabel }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsFacultyButtonLabel: value } )
							}
						/>
					</PanelRow>
						<PanelRow>
						<SelectControl
							label={'Why ASU cards - Faculty button color'}
							help={ 'Set button color' }
							value={ whyChooseAsuCardsFacultyButtonColor }
							options={[
								{ label: 'Gold', value: 'gold' },
								{ label: 'Maroon', value: 'maroon' },
								{ label: 'Gray', value: 'gray' },
								{ label: 'Dark', value: 'dark'}
							]}
							onChange={ ( value ) => setAttributes( { whyChooseAsuCardsFacultyButtonColor: value } ) }
							__nextHasNoMarginBottom
						/>
						</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Faculty button link' }
							value={ whyChooseAsuCardsFacultyButtonHref }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsFacultyButtonHref: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Faculty image' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ whyChooseAsuCardsFacultyImageUrl }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsFacultyImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Faculty image alt text' }
              				help={'required for a11y'}
							value={ whyChooseAsuCardsFacultyAltText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsFacultyAltText: value } )
							}
						/>
					</PanelRow>
					</PanelBody>
					<PanelBody
						title={ __( 'Why ASU cards - Programs', 'unityblocks' ) }
						initialOpen={ false }
						>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Programs title' }
							value={ whyChooseAsuCardsProgramsTitle }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsProgramsTitle: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Programs text' }
							value={ whyChooseAsuCardsProgramsText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsProgramsText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Programs button text' }
							value={ whyChooseAsuCardsProgramsButtonLabel }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsProgramsButtonLabel: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={'Why ASU cards - Programs button color'}
							help={ 'Set button color' }
							value={ whyChooseAsuCardsProgramsButtonColor }
							options={[
								{ label: 'Gold', value: 'gold' },
								{ label: 'Maroon', value: 'maroon' },
								{ label: 'Gray', value: 'gray' },
								{ label: 'Dark', value: 'dark'}
							]}
							onChange={ ( value ) => setAttributes( { whyChooseAsuCardsProgramsButtonColor: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Programs button link' }
							value={ whyChooseAsuCardsProgramsButtonHref }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsProgramsButtonHref: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Programs image' }
			  				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ whyChooseAsuCardsProgramsImageUrl }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsProgramsImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Programs image alt text' }
			  				help={'required for a11y'}
							value={ whyChooseAsuCardsProgramsAltText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsProgramsAltText: value } )
							}
						/>
					</PanelRow>
					</PanelBody>
					<PanelBody
						title={ __( 'Why ASU cards - Research', 'unityblocks' ) }
						initialOpen={ false }
						>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Research title' }
							value={ whyChooseAsuCardsResearchTitle }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsResearchTitle: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Research text' }
							value={ whyChooseAsuCardsResearchText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsResearchText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Research button text' }
							value={ whyChooseAsuCardsResearchButtonLabel }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsResearchButtonLabel: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={'Why ASU cards - Research button color'}
							help={ 'Set button color' }
							value={ whyChooseAsuCardsResearchButtonColor }
							options={[
								{ label: 'Gold', value: 'gold' },
								{ label: 'Maroon', value: 'maroon' },
								{ label: 'Gray', value: 'gray' },
								{ label: 'Dark', value: 'dark'}
							]}
							onChange={ ( value ) => setAttributes( { whyChooseAsuCardsResearchButtonColor: value } ) }
							__nextHasNoMarginBottom
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Research button link' }
							value={ whyChooseAsuCardsResearchButtonHref }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsResearchButtonHref: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Research image' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ whyChooseAsuCardsResearchImageUrl }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsResearchImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Research image alt text' }
              				help={'required for a11y'}
							value={ whyChooseAsuCardsResearchAltText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsResearchAltText: value } )
							}
						/>
					</PanelRow>
					</PanelBody>
					<PanelBody
						title={ __( 'Why ASU cards - Inclusion', 'unityblocks' ) }
						initialOpen={ false }
						>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Inclusion title' }
							value={ whyChooseAsuCardsInclusionTitle }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsInclusionTitle: value } )
							}
						/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Inclusion text' }
							value={ whyChooseAsuCardsInclusionText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsInclusionText: value } )
							}
						/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Inclusion button text' }
							value={ whyChooseAsuCardsInclusionButtonLabel }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsInclusionButtonLabel: value } )
							}
						/>
						</PanelRow>
						<PanelRow>
						<SelectControl
							label={'Why ASU cards - Inclusion button color'}
							help={ 'Set button color' }
							value={ whyChooseAsuCardsInclusionButtonColor }
							options={[
								{ label: 'Gold', value: 'gold' },
								{ label: 'Maroon', value: 'maroon' },
								{ label: 'Gray', value: 'gray' },
								{ label: 'Dark', value: 'dark'}
							]}
							onChange={ ( value ) => setAttributes( { whyChooseAsuCardsInclusionButtonColor: value } ) }
							__nextHasNoMarginBottom
						/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Inclusion button link' }
							value={ whyChooseAsuCardsInclusionButtonHref }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsInclusionButtonHref: value } )
							}
						/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Inclusion image' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ whyChooseAsuCardsInclusionImageUrl }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsInclusionImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Inclusion image alt text' }
              				help={'required for a11y'}
							value={ whyChooseAsuCardsInclusionAltText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsInclusionAltText: value } )
							}
						/>
					</PanelRow>
					</PanelBody>
					<PanelBody
						title={ __( 'Why ASU cards - Mentors', 'unityblocks' ) }
						initialOpen={ false }
						>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Mentors title' }
								value={ whyChooseAsuCardsMentorsTitle }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsMentorsTitle: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Mentors text' }
								value={ whyChooseAsuCardsMentorsText }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsMentorsText: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Mentors button text' }
								value={ whyChooseAsuCardsMentorsButtonLabel }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsMentorsButtonLabel: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={'Why ASU cards - Mentors button color'}
								help={ 'Set button color' }
								value={ whyChooseAsuCardsMentorsButtonColor }
								options={[
									{ label: 'Gold', value: 'gold' },
									{ label: 'Maroon', value: 'maroon' },
									{ label: 'Gray', value: 'gray' },
									{ label: 'Dark', value: 'dark'}
								]}
								onChange={ ( value ) => setAttributes( { whyChooseAsuCardsMentorsButtonColor: value } ) }
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Mentors button link' }
								value={ whyChooseAsuCardsMentorsButtonHref }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsMentorsButtonHref: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Mentors image' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ whyChooseAsuCardsMentorsImageUrl }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsMentorsImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Mentors image alt text' }
              				help={'required for a11y'}
							value={ whyChooseAsuCardsMentorsAltText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsMentorsAltText: value } )
							}
						/>
					</PanelRow>
					</PanelBody>
					<PanelBody
						title={ __( 'Why ASU cards - Honors', 'unityblocks' ) }
						initialOpen={ false }
						>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Honors title' }
								value={ whyChooseAsuCardsHonorsTitle }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsHonorsTitle: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Honors text' }
								value={ whyChooseAsuCardsHonorsText }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsHonorsText: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Honors button text' }
								value={ whyChooseAsuCardsHonorsButtonLabel }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsHonorsButtonLabel: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={'Why ASU cards - Honors button color'}
								help={ 'Set button color' }
								value={ whyChooseAsuCardsHonorsButtonColor }
								options={[
									{ label: 'Gold', value: 'gold' },
									{ label: 'Maroon', value: 'maroon' },
									{ label: 'Gray', value: 'gray' },
									{ label: 'Dark', value: 'dark'}
								]}
								onChange={ ( value ) => setAttributes( { whyChooseAsuCardsHonorsButtonColor: value } ) }
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ 'Why ASU cards - Honors button link' }
								value={ whyChooseAsuCardsHonorsButtonHref }
								onChange={ ( value ) =>
									setAttributes( { whyChooseAsuCardsHonorsButtonHref: value } )
								}
							/>
						</PanelRow>
						<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Honors image' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ whyChooseAsuCardsHonorsImageUrl }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsHonorsImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Why ASU cards - Honors image alt text' }
              				help={'required for a11y'}
							value={ whyChooseAsuCardsHonorsAltText }
							onChange={ ( value ) =>
								setAttributes( { whyChooseAsuCardsHonorsAltText: value } )
							}
						/>
					</PanelRow>
					</PanelBody>

				</PanelBody>
				<PanelBody
					title={ __( 'Attend online', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Hide attend online section' }
							checked={ attendOnlineHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {attendOnlineHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Attend online image' }
              				help={'Use relative url for locally hosted image, example: /wp-content/uploads/2023/07/hero-image.jpeg'}
							value={ attendOnlineImageUrl }
							onChange={ ( value ) =>
								setAttributes( { attendOnlineImageUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Attend online image alt text' }
              				help={'required for a11y'}
							value={ attendOnlineAltText }
							onChange={ ( value ) =>
								setAttributes( { attendOnlineAltText: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Program contact info', 'unityblocks' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<ToggleControl
							label={ 'Hide program contact info section' }
							checked={ programContactInfoHide }
							onChange={ (value) => {
								value ? false : true
								setAttributes( {programContactInfoHide: value} );
								}
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Program name' }
							help={ 'Leave blank to load default program name from API. Field may be locked' }
							value={ programContactInfoDepartmentText }
							onChange={ ( value ) =>
								setAttributes( { programContactInfoDepartmentText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Program name link' }
							help={ 'Leave blank to load default link from API. Examples: https://asu.edu, #jump-link-on-page' }
							value={ programContactInfoDepartmentUrl }
							onChange={ ( value ) =>
								setAttributes( { programContactInfoDepartmentUrl: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Program contact email display text. Field locked?' }
							help={ 'Leave blank to load default display from API' }
							value={ programContactInfoEmailText }
							onChange={ ( value ) =>
								setAttributes( { programContactInfoEmailText: value } )
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ 'Program contact email address' }
							help={ 'Leave blank to load default email address from API' }
							value={ programContactInfoEmailUrl }
							onChange={ ( value ) =>
								setAttributes( { programContactInfoEmailUrl: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
