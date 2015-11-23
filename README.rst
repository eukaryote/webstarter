==========
webstarter
==========

A simple front-end starter template for personal use.


Getting Started
---------------

Use the project as the template for a new project (e.g., named 'myapp')::

    git clone https://github.com/eukaryote/webstarter.git myapp
    cd myapp
    npm install

Be sure to add the bin directory of the newly created ``node_modules/.bin`` to the PATH in order to find things like ``webpack``::

    export PATH=$(pwd)/node_modules/.bin:$PATH


For Development
---------------

Run the webpack dev server against a temporary build of the app that doesn't version files with a content-specific hash::

    npm run serve


If you just want to build the resources for inspection, you could run::

    npm run build


For Production
--------------

Build the app for production use, which versions all JS and CSS files by including a hash based on the content of the file in the filename, allowing for the files to be cached forever::

    npm run build:dist

The output will be in the 'dist' subdirectory. Note that the
``dist/index.html`` is not versioned, so that file should not be cached.

You can also run the webpack dev server against the ``dist`` directory as follows::

    npm run serve:dist


Run Tests
---------

Run the tests::

    npm test


Run ESLint
----------

Run ESLint::

    npm run lint
