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
 * Version:      1.0.0
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
add_action( 'init', 'create_block_asu_degree_search_wp_plugin_block_init' );
