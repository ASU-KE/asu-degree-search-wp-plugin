<?php
/**
 * Plugin Name:       Asu Degree Search Wp Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       asu-degree-search
 *
 * @package           create-block
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
add_action( 'init', 'create_block_asu_degree_search_wp_plugin_block_init' );

// todo: add request_validation_callback to validate request parameters before continuing
// todo: add error handling
// todo: format $request as a JSON object to send to rfi-api
// todo: await rfi-api response
// todo: return response status to client (success, error, unauthorized, invalid format, missing content)
function general_form_post(WP_REST_Request $request) {
	$output = "general_form_post() triggered!";
	// Validate request is not empty
	if (empty($request)) {
		$output = "Request is empty.";
		// add a return statement here with a response object that sattes request is empty
	} else {
		// Get request body as an Array
		$parameters = $request->get_json_params(); // $parametes is type: Array
		
		// Print to validate request body in console
		$json = json_encode($parameters);	
		// $output = $output . "\n\tClient Request Body - JSON: \n\t{$json}";

		// Validate request body contains required fields
		// . . . write a function . . .

		// Sanitize request body
		// . . . write a function . . .
		
		// *** POST to RFI API using cURL and respond to the client
		// Using cURL is more verbose, but we are able to send the client POST request body to the mock API successfully
		post_to_rfi_api($parameters);

		// return $rfi_response


		// ****************************************
		// // *** POST to RFI using wp_remote_post
		// // wp_remote_post returns a response type, with status codes, error codes, and error messages.
		// // passing $parameters array to body is not working, mock API does not see the body content
		// $url = 'http://localhost:8080/mock-rfi';
		// // POST client request to RFI API - returns a RESPONSE object
		// $rfi_response = wp_remote_post( $url, array(
		// 	'method'      => 'POST',
		// 	'headers'     => array('Content-Type: application/json'),
		// 	'body'        => $parameters
		// 	)
		// );
		// // Send response back to the client after wp_remotepost
		// if ( is_wp_error( $rfi_response ) ) {
		// 	$error_message = $rfi_response->get_error_message();
		// 	echo "Something went wrong: $error_message";
		// } else {
		// 	$rfi_response_json = json_encode($rfi_response);
		// }
		// *****************************************

	}
	
	

}

function validate_form_data(WP_REST_Request $request) {

}

// use cURL to POST request body to RFI API
// returns RFI-API response
function post_to_rfi_api(Array $requestBody) {
	$url = 'http://localhost:8080/mock-rfi';

	$postData = json_encode($requestBody);

	// Initialize cURL session
	$ch = curl_init();

	// Set options
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	// CURLOPT_RETURNTRANSFER true returns 'RESPONSE 	| false' 	on success | fail 
	// CURLOPT_RETURNTRANSFER false retuns 'true 		| false' 	on success | fail
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	// Execute cURL session
	$response = curl_exec($ch);

	// Check for errors
	if(curl_errno($ch)) {
		echo 'cURL error: ' . curl_error($ch);
	}

	// Close cURL session
	curl_close($ch);

	if ($response) {
		return new WP_REST_Response( array( 'message' => 'Form submission successful!' ), 200 );
    } else {
        return new WP_REST_Response( array( 'message' => 'Form submission unsuccessful.' ), 200 );
    }

}

add_action( 'rest_api_init', function () {
	register_rest_route( 'form', '/submit', array(
	  'methods' => 'POST',
	  'callback' => 'general_form_post',
	) );
  } );