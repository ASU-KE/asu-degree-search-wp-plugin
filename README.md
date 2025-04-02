<p align="center">
  <img src="https://research.asu.edu/wp-content/themes/UDS-WordPress-Theme/img/endorsed-logo/asu_knowledge_enterprise_white.png" width="300" alt="ASU KE Logo">
</p>

# ASU Degree Search Wordpress Plugin

### A collection of blocks to handle ASU degree data within Wordpress.

* Contributors:      ASU-KE
* Tested up to:      6.7.2
* Current vesion:    1.7.0

## Installation

Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.

##### Development
This block uses `wp-scripts` for the build process:
* `npm run build` - rebuilds the app with the latest saved files, exported to `/build`
* `npm run start` - live editing mode, rebuilds app when updated file is saved
###### 1st time setup
* Install submodules
* Duplicate .npmrc file into `resources/asu-unity-stack` to fully install `@asu` dependencies.
* `npm i` in `resources/asu-unity-stack`

`packages/react-unity-core`
* `yarn install`
* `yarn build`
* auto-updates paths to esm/dist - build process works

## Available blocks

* [ASU Degree RFI Form](#ASU-Degree-RFI-Form) - Gutenberg block to add the offical ASU Degree RFI Form to a page.
    - [Installation and initial configuration](#installation-and-initial-configuration)
		- [Changelog](#changelog)
		- [Known issues](#known-issues-updated-3923)
		- [ASU Degree Search REST API](#asu-degree-search-rest-api)
		    - [Example API queries](#degree-search-rest-api-queries-for-reference)
				- [Available methods](#available-methods)
* [ASU Degree Overview](#asu-degree-overview)
* [ASU Degree Details](#asu-degree-details)

### ASU Degree RFI Form

From the original asu-unity-stack component README:

> The ASU RFI Component is a React-powered Request for Information form. It is intended to be implemented by a CMS module/plugin/extension that must provide a local endpoint to receive the component's submission payload and add the host's source ID (which serves as an API key and identifier) to the payload, and then send it off to the RFI submissions service which processes and routes the submissions to Undergrad, Grad, and ASUOnline middleware destinations so that the RFI request ultimately lands in the appropriate Salesforce destination.

#### Installation and initial configuration

`@asu/bootstrap4-theme` is required. This should already be available via an ASU branded WordPress theme on your site.

Make sure to have included FontAwesome to allow icons to be shown: `@asu/components-core@dev`. An ASU branded WordPress theme should already provide this module.

Additionally, Google Tag Manager (GTM) and a dataLayer must be provided by the website launching the RFI component so Google Analytics data can be properly included as hidden field data in submissions. See the Header Guide on https://unity.web.asu.edu for details about GTM options to fit your ASU site.

You must have a Source ID configured in your host site in order to successfully send RFI submissions to the RFI submissions service.

See `/resources/asu-degree-rfi/examples/rfi.html` for a complete, HTML + vanilla Javascript example of incorporating the RFI component into an HTML page and launching it. Includes example and description of the props to use to configure the RFI form.

See the the [Unity Storybook for the RFI component](https://unity.web.asu.edu/@asu-design-system/app-rfi/index.html?path=/story/uds-asurfi--rfi-default) for example configurations to match various use-cases.


#### Changelog

= 0.1.0 =
* initial commits - AsuRfi components, degree-rfi-form Gutenberg block created.

## Known issues (updated 3/9/23)
* Using the `@asu/app-rfi` packages from a remote reponsitory is causing build issues, currently they are imported locally from `/resources`

### To-do list before 1.0 release
* Test submissions on live endpoint
* Test Google Analytics integration

# Data sources

## ASU Degree Search REST API

Currently proxied through Cloudflare worker for CORS permissions for main degree data. Best viewed in Postman. To view in your browser, install a JSON formatter extension.

### Degree search REST API queries, for reference

* Undergrad:
<https://degrees.apps.asu.edu/t5/service?method=findAllDegrees&init=false&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&cert=false&program=undergrad>
* Graduate:
<https://degrees.apps.asu.edu/t5/service?method=findAllDegrees&init=false&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&cert=false&program=graduate>
* Certs/Minors:
<https://degrees.apps.asu.edu/t5/service?method=findAllDegrees&init=false&fields=Descr100,Degree,CollegeAcadOrg,CollegeDescr100,DepartmentCode,DepartmentName,AcadPlanType,AcadPlan,AcadProg,AcadProg,planCatDescr,CampusStringArray&cert=true&program=graduate>

### Available methods

* findAllDegrees:
<https://degrees.apps.asu.edu/t5/service?cert=false&program=undergrad&method=findAllDegrees&fields=Descr100,Degree,CollegeAcadOrg,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr,EmailAddr,accelerateDegrees,concurrentDegrees,globalExp,careerData,AsuCareerOpp&init=false>
* findDegreeByAcadPlan:
<https://degrees.apps.asu.edu/t5/service?method=findDegreeByAcadPlan&acadPlan=LAACTMS&fields=Descr100,Degree,CollegeAcadOrg,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr,applyInfo,graduateAllApplyDates&init=false>
* findDegreeByCollege:
<https://degrees.apps.asu.edu/t5/service?method=findDegreeByCollege&fields=AcadPlan&program=undergrad&cert=false&collegeOrg=CBA&init=false>

<br/>

#### Data Potluck for Countries and States data:
* <https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states>
* [DPL docs](https://api.myasuplat-dpl.asu.edu)

#### ASUOnline Leads API 3.3 Programs for online programs data:
* <https://asuonline.asu.edu/lead-submissions-v3.3/programs>
* <https://asuonline.asu.edu/lead-submissions-v3.3/programs?category=undergraduate&progcode=UGBA>
* [See documentation for more examples](https://docs.google.com/document/d/1kdIiuipSmbnrcT9gUkeHzCQujwtCdY680ueYhcLaIUw/edit).


## About the RFI Submission Proxy in Webspark

The RFI submission proxy in Webspark was set up to protect the Source ID. Rather than having the React component include the Source ID in the request, the idea is to pass the RFI request through a proxy function that appends the Source ID to the HTTP request before sending on to the Degree RFI service.

In reality, we could implement something similar with a PHP endpoint in WP Engine.

The main technical barrier is that the ASU RFI service can take a while to respond to a submission. The default PHP timeout limit of 60 seconds is not enough to guarantee all requests will succeed. ET recommends the PHP timeout to be increased to 120 seconds:

`max_execution_time = 120;`

However, WP Engine does not allow this timeout setting to be increased beyond 60.

Additionally I'm skeptical that the proxy is even necessary. The Source ID isn't really any more secret than a web token used to authenticate REST API requests. I feel that there is no need for this RFI process to be over-complicated. Include the Source ID in the React component and submit the RFI request directly to the ASU service endpoint.

We still need to verify that our Unity Block handles the slow request responses gracefully.


## Installation and Requirements

If you use the ASU RFI component through Webspark 2 or another CMS that has
implemented the component, all of the below will have been done for you.
Simply enable the module/extension/plugin. You will still need to supply a
Source ID.

If you are a developer integrating the RFI component into your CMS or app,
read on:

React and React-DOM are required as peer dependencies. Install with:
`yarn add react react-dom`

@asu/bootstrap4-theme is required as a peer dependency in your
project. Install the latest version with the following command:
`yarn add @asu/bootstrap4-theme@dev`

Make sure to have included [FontAwesome](https://fontawesome.com/) in your
project to allow icons to be shown:
`yarn add @asu/components-core@dev`

Additionally, Google Tag Manager (GTM) and a dataLayer should be provided by
the site launching the RFI component so Google Analytics data can be properly
included as hidden field data in submissions. See the Header Guide on
<https://unity.web.asu.edu> for details about GTM options to fit your ASU site.

You must have a Source ID configured in your host site in order to successfully
send RFI submissions to the RFI submissions service.

RECOMMENDED: See /example/rfi.html for a complete, HTML + vanilla Javascript
example of incorporating the RFI component into an HTML page and launching it.
Includes example and description of the props to use to configure the
RFI form. It should work if you open the file in your browser, allowing you
to get to know the RFI component.

See the the [Unity Storybook for the RFI component](https://unity.web.asu.edu/@asu/app-rfi/index.html?path=/story/uds-asurfi--rfi-default)
for example configurations to match various use-cases.

## Requesting a Source ID
TODO - details to come

## ASU RFI component architectural overview:
* Top level app: src/components/AsuRfi/AsuRfi.js
* ... which invokes the main form which defines the form steps: src/components/steps/RfiMainForm.js
* ... which instantiates the RfiStepper component wherein the Formik component is defined: src/components/stepper/RfiStepper.js
* ... which calls the various step forms with their independent validation schemas: src/components/steps/*.js
* ... field input components live in src/components/controls
* Final submission handler is invoked in RfiMainForm.js. TODO: make separate function in its own file for the submission.
* Custom form input components live in src/components/controls/*.js and are styled using the styled-components library.

This pattern is based on example code found at https://codesandbox.io/s/mlc2o

Developer note: When adding new form-custom-control field input types, don't
forget to register them in controls/index.js. You'll be scratching your head
until you do.





## React component props

This Unity block implements the `app-rfi` unity-stack component.

`app-rfi` accepts the following props:

* appPathFolder
* campus
* actualCampus
* college
* department
* studentType
* areaOfInterest
* programOfInterest
* programOfInterestOptional
* isCertMinor
* country
* stateProvince
* successMsg - Message to display after successful RFI submission
* test - Submit RFI in test mode (needs to be paired with the Test submission url endpoint)
* dataSourceDegreeSearch - Data source for main academic degrees
* dataSourceAsuOnline - Data source for ASU Online degrees
* dataSourceCountriesStates - Data Potluck api for countries and states ISO codes
* submissionUrl - Endpoint to submit RFI requests

Most of these props either configure the submission process or pre-configure the webform options.


## Components

<dl>
<dt><a href="#AsuRfi">AsuRfi(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RFIProps">RFIProps</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="AsuRfi"></a>

## AsuRfi(props) ⇒ <code>JSX.Element</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| props | [<code>RFIProps</code>](#RFIProps) |

<a name="RFIProps"></a>

## RFIProps : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **campus** | <code>string</code> | <code>"GROUND"</code> | <code>ONLNE, GROUND, NOPREF.</code> Needs to be set or  <code>areaOfInterest</code> and <code>programOfInterest</code> will fail to load. |
| **actualCampus** | <code>string</code> | <code>"TEMPE"</code> | A specific campus like <code>TEMPE, DTPHX, POLY, WEST, ONLNE.</code> Needs to be set or <code>areaOfInterest</code> and <code>programOfInterest</code> will fail to load. |
| **college** | <code>string</code> | <code>undefined</code>  | Use one <code>acadOrgCode</code> from reference https://api.myasuplat-dpl.asu.edu/api/codeset/colleges |
| **department** | <code>string</code> | <code>undefined</code>  | Use one department code. See <code>DepartmentCode</code> values in Degree Search API query. |
| **studentType** | <code>string</code> |<code>"undergrad"</code>  | <code>undergrad, graduate</code> |
| **areaOfInterest** | <code>string</code> | <code>""</code> | <code>planCatDescr</code> values from Degree Search API query. For block validation, WordPress is expecting an empty string, while the react app takes the empty string and casts it to <code>undefined</code>. |
| **programOfInterest** | <code>string</code> | <code>""</code> | <code>AcadPlan</code> from Degree Search API query. <code>Descr100</code> is used as label for this value in RFI UIs. For block validation, WordPress is expecting an empty string, while the react app takes the empty string and casts it to <code>undefined</code>. |
| **programOfInterestOptional** | <code>boolean</code> | <code>false</code> | Sets <code>programOfInterest</code> as an optional field. |
| **isCertMinor** | <code>boolean</code> | <code>false</code> | <code>true</code> value sets form into certificate/minor mode, which simply displays the success message screen. These programs have a different admissions pipeline.
| **country** | <code>string</code> | <code>undefined</code> | see data used by RFI in https://api.myasuplat-dpl.asu.edu/api/codeset/countries |
| **stateProvince** | <code>string</code> | <code>undefined</code> | USA/Canada only field, https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states |
| **successMsg** | <code>string</code> | <code>"Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer."</code> | A string. May contain HTML. |
| **test** | <code>boolean</code> | <code>false</code> | true or false. Will send the form payload with Test === 1. RFI will display test banner. |
| **dataSourceDegreeSearch** | <code>string</code> | <code>"https://degrees.apps.asu.edu/t5/service"</code> | Degree Search REST API |
| **dataSourceAsuOnline** | <code>string</code> | <code>"https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs"</code> | ASUOnline Programs API |
| **dataSourceCountriesStates** | <code>string</code> | <code>"https://api.myasuplat-dpl.asu.edu/api/codeset/countries"</code> | Data Potluck Countries codeset service |
| **submissionUrl** | <code>string</code> | <code>"https://httpbin.org/post"</code> | sending to RFI Submission Handler service, set to dummy link currently. |
| **sourceID** | <code>string</code> | <code>"123456789"</code> | Code to successfully send RFI submissions to the RFI submissions service. |

## Documentation to consult when developing with the RFI component
* [Formik](https://jaredpalmer.com/formik/docs/tutorial)
* [Yup](https://github.com/jquense/yup)
* [React Formik Multistep Form example which inspired our architecture](https://codesandbox.io/s/mlc2o)
* [React Datepicker](https://reactdatepicker.com/)
* [React-Phone-Input-2](https://github.com/bl00mber/react-phone-input-2)
* [Reactstrap](https://github.com/reactstrap/reactstrap)
* [Reactstrap components](https://reactstrap.github.io/components/alerts/)

## Important docs from ASU ET:

* [ServiceNow Request Form to Setup RFI](https://asudev.jira.com/servicedesk/customer/portal/5/group/28/create/89)
* [Summary Process Overview for Web Developers](https://docs.google.com/document/d/1zU_ZaXOnSgjcZNdvg17SrIk-3rvb0awa/edit)
* [Github: ASU-UNITY React RFI app](https://github.com/ASU/asu-unity-stack/blob/dev/packages/app-rfi/README.md)
* [Github: Webspark RFI module](https://github.com/ASUWebPlatforms/webspark-module-asu_degree_rfi)
* [Github: RFI Admin Settings form](https://github.com/ASUWebPlatforms/webspark-module-asu_degree_rfi/blob/main/src/Form/AsuDegreeRfiSettingsForm.php)
* [Github: Webspark controller logic for the form submission](https://github.com/ASUWebPlatforms/webspark-module-asu_degree_rfi/blob/main/src/Controller/AsuDegreeRfiSubmitProxy.php) This is a proxy that the RFI React component is sending to first, this proxy then adjust the submission request and passes it on to the RFI submission endpoint.
* [Web Service Data Fields](https://docs.google.com/spreadsheets/d/18_0EuMOTdrJHhIFgVsl9o8QSpuCPjIF823D1B91MzgU/edit#gid=0)
* [ASU Header notes (including on ASU best practices for Google Tag Manager)](https://unity.web.asu.edu/asuheader/index.html)
* [Offical Google docs on data layers](https://developers.google.com/tag-platform/tag-manager/web/datalayer)


### ASU Degree Overview

The ASU Degree Overview and ASU Degree Details block are designed to work together. The overview block should be added to a page located at "/degrees/undergrad" or "/degrees/graduate" depending on the program level that is displayed. The overview block will generate URLs for each individual degree. An example undergrad URL is "/degrees/undergrad/degree-name". To view the details of the specific degree, the site editor needs to create a page located at the generated URL, and add the degree details block to that page with the academic plan code of the degree.

***Developer note***
After intial <code>npm i</code> or any <code>npm update</code>, developer must re-add custom code to <code>/node_modules/@asu/app-degree-pages/</code>
```
 getMajorDescUrlFix: () => row["Descr100"].replace(/\s+/g, '-').replace(/[ ,()]/g, '').toLowerCase(),
 getDegreeFix: () => row["Degree"].toLowerCase(),

```
Build will fail due to import setup. <code>/node_modules/@asu/components_core/package.json</code> needs exports updated for current directory (.):
```
"exports": {
    "./dist/libCore.es.js": {
      "default": "./src/index.js"
    },
    ".": "./dist/libCore.es.js"
  }
```
#### Known issues

- BS5 update required
- Certs and minors that are online don't pull through the Minor Map, on campus programs only work

### ASU Degree Details

Multiple images are required:
- Hero
- Intro content
- Career outlook
- Global opportunity
- Why ASU:
	- Faculty
	- Programs
	- Research
	- Inclusion
	- Mentors
	- Honors
- Attend online

### Degree pages setup
1. Create parent page at URL /degrees
2. Create sub-parent page at degree level, "/degrees/undergrad" or "/degrees/graduate"
3. Add degree overview block to sub-parent, configure parameters for the needs of the website.
4. URLs are autogenerated for degree details pages. Start by adding a new page.
5. Add degree details block to new page. Visit degrees.asu.edu - copy degree name exactly into page title, copy degree code. Configure as needed.
6. Page settings - choose parent page, hide title
