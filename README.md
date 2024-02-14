# [swagger-tools-oas3](https://www.npmjs.com/package/swagger-tools-oas3)
This tool helps to setup a Express.js server along with Swagger UI. It also includes a middleware to validate the request and response against the provided OpenAPI 3.0 specification.

# Aim of this fork
The original project is not maintained anymore and has some vulnerabilities. This fork aims to fix those vulnerabilities and keep the project up to date.

# Table of Contents
- [swagger-tools-oas3](#swagger-tools-oas3)
- [Aim of this fork](#aim-of-this-fork)
- [Table of Contents](#table-of-contents)
- [Changelogs](#changelogs)
  - [1.1.0](#110)
  - [1.0.0](#100)
- [Usage](#usage)
  - [Installation](#installation)
  - [Middleware Options](#middleware-options)
  - [Example](#example)


# Changelogs
## 1.1.0
- Updated dependencies to the latest version.
- Fixed the Swagger UI not showing the configured spec.
- Removed body-parser and used express inbuilt body-parser instead.
- Added option to add middleware before the validation middleware.
- Removed all the unused dependencies.
- Updated the tsconfig.json to target es2019, to fix the issue with the latest version of node (Supports Node.js 12+).
 
## 1.0.0
- Initial release, forked from oas3-tools of bug-hunters.
- Updated dependencies to fix vulnerabilities.
- Added option to pass limit for body-parser.

# Usage
## Installation
Install the package using npm:
```
npm install swagger-tools-oas3
```

## Middleware Options
The expressAppConfig function accepts the following options:
- definitionPath: The path to your OpenAPI 3.0 specification file.
- appOptions: An object containing additional configuration options:
  - routing: An object specifying the routing options, such as the path to your controller files.
  - parserLimit: (Optional) The limit for body parsing (default: '1mb').
  - app: (Optional) An existing Express.js app instance to use.
  - cors: (Optional) CORS configuration options.

## Example
```javascript
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers'),
    }
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, './api/openapi.yaml'), options);

const app = expressAppConfig.getApp();
```

Note: This is a forked project from https://github.com/bug-hunters/oas3-tools which was originally forked from https://github.com/apigee-127/swagger-tools.
