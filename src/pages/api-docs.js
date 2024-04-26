// pages/api-docs.js
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

const ApiDocs = () => (
  <SwaggerUI url="/swagger.json" />
);

export default ApiDocs;
