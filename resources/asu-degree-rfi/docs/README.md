# Degree RFI

From the original asu-unity-stack component README:

> The ASU RFI Component is a React-powered Request for Information form. It is intended to be implemented by a CMS module/plugin/extension that must provide a local endpoint to receive the component's submission payload and add the host's source ID (which serves as an API key and identifier) to the payload, and then send it off to the RFI submissions service which processes and routes the submissions to Undergrad, Grad, and ASUOnline middleware destinations so that the RFI request ultimately lands in the appropriate Salesforce destination.

## Installation requirements:

`@asu/bootstrap4-theme` is required. This should already be available via the UDS WordPress theme.

Make sure to have included FontAwesome to allow icons to be shown: `yarn add @asu/components-core@dev`. UDS WordPress theme should already provide this.

Additionally, Google Tag Manager (GTM) and a dataLayer must be provided by the website launching the RFI component so Google Analytics data can be properly included as hidden field data in submissions. See the Header Guide on https://unity.web.asu.edu for details about GTM options to fit your ASU site.

You must have a Source ID configured in your host site in order to successfully send RFI submissions to the RFI submissions service.

RECOMMENDED: See /example/rfi.html for a complete, HTML + vanilla Javascript example of incorporating the RFI component into an HTML page and launching it. Includes example and description of the props to use to configure the RFI form. It should work if you open the file in your browser, allowing you to get to know the RFI component.

See the the [Unity Storybook for the RFI component](https://unity.web.asu.edu/@asu/app-rfi/index.html?path=/story/uds-asurfi--rfi-default) for example configurations to match various use-cases.

## Important docs:

**ServiceNow Request Form to Setup RFI**  
https://asudev.jira.com/servicedesk/customer/portal/5/group/28/create/89

**Summary Process Overview for Web Developers:**  
https://docs.google.com/document/d/1zU_ZaXOnSgjcZNdvg17SrIk-3rvb0awa/edit

**ASU-UNITY React RFI app:**  
https://github.com/ASU/asu-unity-stack/blob/dev/packages/app-rfi/README.md

**Webspark RFI module:**  
https://github.com/ASUWebPlatforms/webspark-module-asu_degree_rfi

and the **RFI Admin Settings form:**  
https://github.com/ASUWebPlatforms/webspark-module-asu_degree_rfi/blob/main/src/Form/AsuDegreeRfiSettingsForm.php

**Webspark controller logic for the form submission.** This is a proxy that the RFI React component is sending to first, this proxy then adjust the submission request and passes it on to the RFI submission endpoint:  
https://github.com/ASUWebPlatforms/webspark-module-asu_degree_rfi/blob/main/src/Controller/AsuDegreeRfiSubmitProxy.php

**Web Service Data Fields**  
https://docs.google.com/spreadsheets/d/18_0EuMOTdrJHhIFgVsl9o8QSpuCPjIF823D1B91MzgU/edit#gid=0

**ASU Header notes** (including on ASU best practices for Google Tag Manager):  
https://unity.web.asu.edu/asuheader/index.html

**Google docs on the data layer**:  
https://developers.google.com/tag-platform/tag-manager/web/datalayer

# Data sources

**ASU Degree Search REST API** (currently proxied through Cloudflare worker for CORS permissions) for main degree data:

* **findAllDegrees:**  
<https://degrees.apps.asu.edu/t5/service?cert=false&program=undergrad&method=findAllDegrees&fields=Descr100,Degree,CollegeAcadOrg,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr,EmailAddr,accelerateDegrees,concurrentDegrees,globalExp,careerData,AsuCareerOpp&init=false>
* **findDegreeByAcadPlan:**  
<https://degrees.apps.asu.edu/t5/service?method=findDegreeByAcadPlan&acadPlan=LAACTMS&fields=Descr100,Degree,CollegeAcadOrg,AcadPlanType,AcadPlan,AcadProg,CampusStringArray,SubPln,planCatDescr,applyInfo,graduateAllApplyDates&init=false>
* **findDegreeByCollege:**  
<https://degrees.apps.asu.edu/t5/service?method=findDegreeByCollege&fields=AcadPlan&program=undergrad&cert=false&collegeOrg=CBA&init=false>

**Data Potluck for Countries and States data:**  
* <https://api.myasuplat-dpl.asu.edu/api/codeset/countries?include=states>
* [DPL docs](https://api.myasuplat-dpl.asu.edu)

**ASUOnline Leads API 3.3 Programs** for online programs data:  
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
