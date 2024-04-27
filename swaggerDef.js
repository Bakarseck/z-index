// generateSwagger.js
const fs = require("fs");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Next.js API avec Swagger",
      version: "1.0.0",
      description: "Ceci est une application API simple CRUD réalisée avec Next.js et documentée avec Swagger",
    },
    servers: [{
      url: "http://localhost:3000",
      description: "Serveur de développement"
    }],
  },
  apis: ["./pages/api/**"], // Assurez-vous que le chemin vers vos fichiers API est correct
};

const swaggerSpec = swaggerJSDoc(options);

fs.writeFile("./public/swagger.json", JSON.stringify(swaggerSpec, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("La documentation Swagger a été générée avec succès.");
});
