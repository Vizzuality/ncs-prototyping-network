module.exports = ({ env }) => ({
  "string-array": {
    enabled: true,
  },
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_ACCESS_KEY_ID'),
        secret: env('AWS_SES_ACCESS_KEY_SECRET'),
        amazon: `https://email.${env('AWS_REGION')}.amazonaws.com`,
      },
      settings: {
        defaultFrom: `no-reply@no-reply.${env('AWS_SES_DOMAIN')}`,
        defaultReplyTo: `no-reply@no-reply.${env('AWS_SES_DOMAIN')}`,
      },
    },
  },
  'config-sync': {
    enabled: true,
    config: {
      excludedConfig: [
        "core-store.plugin_users-permissions_grant",
        "core-store.plugin_upload_metrics",
        "core-store.strapi_content_types_schema",
        "core-store.ee_information",
        "core-store.plugin_users-permissions_email",
        "core-store.plugin_users-permissions_advanced"
      ],
    },
  },
  upload: {
    config: {
      sizeLimit: 200 * 1024 * 1024,
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
      provider: 'local',
    },
  },
  documentation: {
    config: {
      "x-strapi-config": {
        mutateDocumentation: (generatedDocumentationDraft) => {
          console.log("generatedDocumentationDraft", generatedDocumentationDraft);
          Object.keys(generatedDocumentationDraft.paths).forEach((path) => {
            // check if it has {id} in the path
            if (path.includes("{id}")) {
              // add `populate` as params
              if (generatedDocumentationDraft.paths[path].get) {
                if (!generatedDocumentationDraft.paths[path].get.parameters.find((param) => param.name === "populate")) {
                  generatedDocumentationDraft.paths[path].get.parameters.push(
                    {
                      "name": "populate",
                      "in": "query",
                      "description": "Relations to return",
                      "deprecated": false,
                      "required": false,
                      "schema": {
                        "type": "string"
                      }
                    },
                  );
                }
              }
            }
          });
        },
      },
    },
  },
});
