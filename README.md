# swagger-tools-oas3
This tool helps to setup a Express.js server along with Swagger UI. It also includes a middleware to validate the request and response against the provided OpenAPI 3.0 specification.

# Aim of this fork
- The original project is not maintained anymore and has some vulnerabilities. This fork aims to fix those vulnerabilities and keep the project up to date.
- Additionally added support to provide the limit for body-parser.

# Example
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
