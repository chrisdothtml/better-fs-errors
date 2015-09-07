/*
 * File: index.js
 * Description: Main module file for better-fs-errors.
 */

'use strict';

var errno = require('errno');

module.exports = function(err) {

	if (errno.code[err.code] && err.message) {
		var error = ''

		error += '------------------------------------------------\n'
		error += 'RAW ERROR:\n'
		error += err.message + '\n\n'
		error += 'ERROR DESCRIPTION:\n'
		error += errno.code[err.code].description + '\n'
		error += '------------------------------------------------'

		return error
	}

	else return err
}