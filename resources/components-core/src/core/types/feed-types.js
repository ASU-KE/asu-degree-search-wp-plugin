// ts-check

/**
 *  @typedef {Object} ComponentType
 *  @property {number} [numItems]
 */

/**
 * @typedef {Object} DrupalDataSource
 * @property {string} [url]
 * @property {string} [filters]
 */

/**
 * @typedef {Object} WpRestDataFilters
 * @property {string} [units]
 * @property {string} [interests]
 * @property {string} [locations]
 */

/**
 * @typedef {Object} WpRestDataPagination
 * @property {number} [page]
 * @property {number} [perPage]
 * @property {string} [order]
 * @property {string} [orderBy]
 */

/**
 * @typedef {Object} WpRestDataSource
 * @property {string} [url]
 * @property {string} [storyBasePath]
 * @property {WpRestDataFilters} [filters]
 * @property {WpRestDataPagination} [pagination]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 * @ignore
 */
export const JSDOC = "jsdoc";
