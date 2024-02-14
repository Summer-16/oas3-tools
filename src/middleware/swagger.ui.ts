'use strict';

import * as fs from 'fs';
import * as path from 'path';
import { getAbsoluteFSPath } from 'swagger-ui-dist';
import * as express from 'express';

export function initSwaggerDocs(app: express.Application, definitionPath: string) {
  const swaggerEndpoint = '/docs';
  const swaggerDefName = 'apiSpecifications.yaml';
  const swaggerUiAssetPath = getAbsoluteFSPath();

  // A workaround for swagger-ui-dist not being able to set custom swagger URL
  const indexContent = fs
    .readFileSync(path.join(swaggerUiAssetPath, 'swagger-initializer.js'))
    .toString()
    .replace('https://petstore.swagger.io/v2/swagger.json', `/${swaggerDefName}`);
  app.get(`${swaggerEndpoint}/swagger-initializer.js`, (req, res) => res.send(indexContent));

  // Serve the swagger-ui assets
  app.use(swaggerEndpoint, express.static(swaggerUiAssetPath));

  // Serve the swagger file
  app.get(`/${swaggerDefName}`, (req, res) => {
    res.sendFile(definitionPath);
  });
}