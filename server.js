/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const { getPosts } = require('./routes/post');
const morgan = require('morgan');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const myOwnMid = (req, res, next) => {
	console.log('middleware applied')
	next()
}

// App
const app = express();

app.use(morgan('dev'))
app.use(myOwnMid)

app.get('/', getPosts)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
