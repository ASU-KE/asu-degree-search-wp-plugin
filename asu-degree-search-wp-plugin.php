<?php
/**
 *
 *
 * @package   asu-ke-wp-degree-search
 * @link      https://github.com/ASU-KE/asu-degree-search-wp-plugin
 * @author    ASU KE
 * @copyright 2024 ASU KE
 * @license   GPL v2 or later
 *
 * Plugin Name:  Asu Degree Search Wp Plugin
 * Description:  The developer tools panel for WordPress.
 * Version:      1.1.1
 * Plugin URI:   https://github.com/ASU-KE/asu-degree-search-wp-plugin
 * Author:       ASU KE
 * Author URI:   https://github.com/ASU-KE/asu-degree-search-wp-plugin
 * Text Domain:  asu-degree-search-wp-plugin
 * Requires PHP: 7.4
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_asu_degree_search_wp_plugin_block_init() {
	register_block_type( __DIR__ . '/build/degree-rfi-form' );
	register_block_type( __DIR__ . '/build/degree-overview-block' );
	register_block_type( __DIR__ . '/build/degree-details-block' );
}

/**
 * Make a POST request to an API service using the RFI form
 * Parameters: WP_REST_Request - Request object sent from client
 * Returns: WP_REST_Response - Response object sent to client
 *
 */
function general_form_post(WP_REST_Request $request) {

	// Validate request is not empty
	if (empty($request)) {
		// 400 - Bad Request
		return new WP_REST_Response( array( 'message' => 'Not a valid request, form is empty!' ), 400 );
	} else {
		// Get request body as an Array
		$body = $request->get_json_params(); // $parametes is type: Array
		// Validate request contains correct fields
		$isValidRequest = validate_request_array($body);
		if ($isValidRequest) {
			// POST to API using cURL and respond to the client
			return post_to_api($body);
		} else {
			// 400 - Bad Request
			return new WP_REST_Response( array( 'message' => 'Not a valid request, form is incomplete!' ), 400 );
		}
	}
}

/**
 * Validate request contains required form fields
 * Parameters: Array - Request Body from client
 * Returns: Boolean - Determines if request is valid
 */
function validate_request_array(Array $requestBody) {
	$requiredFormFields = array(
		'Zip',
		'EmailAddress',
		'FirstName',
		'LastName',
		'Phone',
		'EntryTerm',
		'GdprConsent',
		'Campus',
		'Interest1',
		'Interest2',
		'Career',
		'StudentType',
		'Source',
		'URL',
		'datetime',
		'enterpriseclientid',
		'ga_clientid'
	);
    foreach ($requiredFormFields as $field) {
        if (!array_key_exists($field, $requestBody)) {
            return false;
        }
    }
    return true;
}

/**
 * POST request body to API using cURL.
 * Parameters: Array - Request Body from client
 * Returns: WP_REST_Response - Response object sent to client
 */
function post_to_api(Array $requestBody) {
	$url = 'https://crm-enterprise-rfi-forms-submit-handler-sandbox.sdc.uto.asu.edu/';
	$postData = json_encode($requestBody);
	// Initialize cURL session
	$ch = curl_init();
	// Set options for HTTP request
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// Execute cURL session
	$response = curl_exec($ch);
	// Check for errors
	if(curl_errno($ch)) {
		// 503 - Service Unavailable
		$errorMessage = 'cURL error: ' . curl_error($ch);
		return new WP_REST_Response( array( 'message' => "Form submission unsuccessful: {$errorMessage}" ), 503 );
	}
	// Close cURL session
	curl_close($ch);
	// Return Response
	if ($response) {
		// 200 - Successful
		return new WP_REST_Response( array( 'message' => 'Form submission successful!' ), 200 );
    } else {
		// 500 - Internal Server error
        return new WP_REST_Response( array( 'message' => 'Form submission unsuccessful.' ), 500 );
    }
}

add_action( 'init', 'create_block_asu_degree_search_wp_plugin_block_init' );

add_action( 'rest_api_init', function () {
	register_rest_route( 'form', '/submit', array(
	  'methods' => 'POST',
	  'callback' => 'general_form_post',
	) );
  } );
