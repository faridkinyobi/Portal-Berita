import swaggerJSDoc from 'swagger-jsdoc';
import { JsonObject } from 'swagger-ui-express';
import path from 'path'; 
import './sweggarDoc/userSwagger'
import './sweggarDoc/BeritaSwagger'
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: 'Dokumtasi portal berita dangan swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis:  [path.join(__dirname, '../**/*.ts')],
};
export const swaggerDocs: JsonObject = swaggerJSDoc(options);

// export const setupSwagger = (app: Express) => {
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs as any));
// };
