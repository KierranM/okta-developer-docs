export const concepts = [
  {
    title: "Concepts",
    subLinks: [
      {
        title: "Concepts overview",
        path: "/docs/concepts/"
      },
      {
        title: "API Access Management",
        path: "/docs/concepts/api-access-management/"
      },
      {
        title: "Authentication",
        path: "/docs/concepts/authentication/"
      },
      {
        title: "Authorization Servers",
        path: "/docs/concepts/auth-servers/"
      },
      {
        title: "Event Hooks",
        path: "/docs/concepts/event-hooks/"
      },
      {
        title: "Events API Migration",
        path: "/docs/concepts/events-api-migration/"
      },
      {
        title: "External Identity Providers",
        path: "/docs/concepts/identity-providers/"
      },
      {
        title: "Feature Lifecycle Management",
        path: "/docs/concepts/feature-lifecycle-management/"
      },
      {
        title: "Role Assignment",
        path: "/docs/concepts/role-assignment/"
      },
      {
        title: "How Okta works",
        path: "/docs/concepts/how-okta-works/"
      },
      {
        title: "Identity Engine",
        subLinks: [
          {
            title: "Interaction Code grant type",
            path: "/docs/concepts/interaction-code/"
          },
          {
            title: "Redirect vs. embedded authentication",
            path: "/docs/concepts/redirect-vs-embedded"
          },
        ]
      },
      {
        title: "Inline Hooks",
        path: "/docs/concepts/inline-hooks/"
      },
      {
        title: "Key Rotation",
        path: "/docs/concepts/key-rotation/"
      },
      {
        title: "Monitor Okta",
        path: "/docs/concepts/monitor/"
      },
      {
        title: "Multi-tenant solutions",
        path: "/docs/concepts/multi-tenancy/"
      },
      {
        title: "OAuth 2.0 and OpenID Connect Overview",
        path: "/docs/concepts/oauth-openid/"
      },
      {
        title: "Okta Data Model",
        path: "/docs/concepts/okta-data-model/"
      },
      {
        title: "Okta Organizations",
        path: "/docs/concepts/okta-organizations/"
      },
      {
        title: "Okta-Hosted Flows",
        path: "/docs/concepts/okta-hosted-flows/"
      },
      {
        title: "Hosted Vs. Embedded",
        path: "/docs/concepts/hosted-vs-embedded/"
      },
      {
        title: "Policies",
        path: "/docs/concepts/policies/"
      },
      {
        title: "Session management",
        path: "/docs/concepts/session/"
      },
      {
        title: "User Profiles",
        path: "/docs/concepts/user-profiles/"
      },
      {
        title: "Understanding SAML",
        subLinks: [
          {
            title: "SAML Overview",
            path: "/docs/concepts/saml/"
          },
          {
            title: "SAML FAQ",
            path: "/docs/concepts/saml/faqs/"
          }
        ]
      },
      {
        title: "Understanding SCIM",
        subLinks: [
          {
            title: "SCIM Overview",
            path: "/docs/concepts/scim/"
          },
          {
            title: "SCIM FAQ",
            path: "/docs/concepts/scim/faqs/"
          }
        ]
      }
    ]
  }
];

export const guides = [
  {
    title: "Guides",
    subLinks: [
      { title: "Guides overview", path: "/docs/guides/" },
      {
        title: "Basics",
        subLinks: [
          {
            title: "Quickstart: Signing in your first user",
            guideName: "quickstart"
          },
          { title: "Create an API token", guideName: "create-an-api-token" },
          { title: "Enable CORS", guideName: "enable-cors" },
          { title: "Find your Okta domain", guideName: "find-your-domain" },
          {
            title: "Find your application credentials",
            guideName: "find-your-app-credentials"
          },
          {
            title: "Share Application Key Credentials for IdPs across Apps",
            guideName: "sharing-cert"
          },
          { title: "Set up SAML Tracer", guideName: "saml-tracer" },
          {
            title: "Upgrade SAML Apps to SHA256",
            guideName: "updating-saml-cert"
          },
          {
            title: "Sign the Okta certificate with your own CA",
            guideName: "sign-your-own-saml-csr"
          },
          {
            title: "Set up self-service registration",
            guideName: "set-up-self-service-registration"
          }
        ]
      },
      {
        title: "Sign Users In",
        subLinks: [
          {
            title: "Add an Identity Provider",
            subLinks: [
              {
                title: "Overview",
                path: "/docs/guides/identity-providers/",
              },
              {
                title: "Social Logins",
                subLinks: [
                  {
                    title: "Amazon",
                    path: "/docs/guides/social-login/amazon/main/"
                  },
                  {
                    title: "Apple",
                    path: "/docs/guides/add-an-external-idp/apple/main/"
                  },
                  {
                    title: "Facebook",
                    path: "/docs/guides/add-an-external-idp/facebook/main/"
                  },
                  {
                    title: "GitHub",
                    path: "/docs/guides/social-login/github/main/"
                  },
                  {
                    title: "GitLab",
                    path: "/docs/guides/social-login/gitlab/main/"
                  },
                  {
                    title: "Google",
                    path: "/docs/guides/add-an-external-idp/google/main/"
                  },
                  {
                    title: "LinkedIn",
                    path: "/docs/guides/add-an-external-idp/linkedin/main/"
                  },
                  {
                    title: "Microsoft",
                    path: "/docs/guides/add-an-external-idp/microsoft/main/"
                  },
                  {
                    title: "Paypal",
                    path: "/docs/guides/social-login/paypal/main/"
                  },
                  {
                    title: "Salesforce",
                    path: "/docs/guides/social-login/salesforce/main/"
                  },
                  {
                    title: "Yahoo",
                    path: "/docs/guides/social-login/yahoo/main/"
                  },
                  {
                    title: "Yahoo Japan",
                    path: "/docs/guides/social-login/yahoojp/main/"
                  }
                ]
              },
              {
                title: "Enterprise Identity Providers",
                subLinks: [
                  {
                    title: "SAML 2.0",
                    path: "/docs/guides/add-an-external-idp/saml2/main/"
                  },
                  {
                    title: "OpenID Connect",
                    path: "/docs/guides/add-an-external-idp/openidconnect/main/"
                  },
                  {
                    title: "Okta to Okta",
                    path: "/docs/guides/add-an-external-idp/oktatookta/main/"
                  },
                  {
                    title: "Azure AD",
                    path: "/docs/guides/add-an-external-idp/azure/main/"
                  }
                ]
              },
            ]
          },

          { title: "Add multifactor authentication", guideName: "mfa" },
          {
            title: "Mobile App",
            subLinks: [
              {
                title: "Unlock a mobile app with biometrics",
                guideName: "unlock-mobile-app-with-biometrics"
              },
              {
                title: "Build a custom sign-in UI in your mobile app",
                guideName: "build-custom-ui-mobile"
              },
              {
                title: "Sign users in to your mobile app",
                guideName: "sign-into-mobile-app"
              },
              {
                title: "Share a sign-in session with native mobile apps",
                guideName: "shared-sso-android-ios"
              }
            ]
          },
          {
            title: "Sign users in to your single-page application",
            guideName: "sign-into-spa"
          },
          {
            title: "Sign users in to your web application",
            guideName: "sign-into-web-app"
          },
          { title: "Sign users out", guideName: "sign-users-out" },
          {
            title: "Configure Okta sign-on and App sign-on policies",
            guideName: "configure-signon-policy"
          }
        ]
      },
      {
        title: "Authorization",
        subLinks: [
          {
            title: "Implement authorization by grant type",
            guideName: "implement-grant-type"
          },
          {
            title: "Create an Authorization Server",
            guideName: "customize-authz-server"
          },
          {
            title: "Configure SSO for Native apps",
            guideName: "configure-native-sso"
          },
          { title: "Request user consent", guideName: "request-user-consent" },
          {
            title: "Configure Device Authorization Grant Flow",
            guideName: "device-authorization-grant"
          },
          {
            title: "Tokens",
            subLinks: [
              {
                title: "Build a JWT for Client Authentication",
                guideName: "build-self-signed-jwt"
              },
              {
                title: "Customize tokens returned from Okta with custom claims",
                guideName: "customize-tokens-returned-from-okta"
              },
              {
                title:
                  "Customize tokens returned from Okta with a Groups claim",
                guideName: "customize-tokens-groups-claim"
              },
              {
                title:
                  "Customize tokens returned from Okta with a dynamic allow list",
                guideName: "customize-tokens-dynamic"
              },
              {
                title:
                  "Customize tokens returned from Okta with a static allow list",
                guideName: "customize-tokens-static"
              },
              { title: "Refresh access tokens", guideName: "refresh-tokens" },
              { title: "Revoke Tokens", guideName: "revoke-tokens" },
              {
                title: "Work with Okta session cookies",
                guideName: "session-cookie"
              },
              {
                title: "Validate Access Tokens",
                guideName: "validate-access-tokens"
              },
              { title: "Validate ID Tokens", guideName: "validate-id-tokens" }
            ]
          }
        ]
      },
      {
        title: "Brand and Customize",
        subLinks: [
          {
            title: "Customize the Okta URL domain",
            guideName: "custom-url-domain"
          },
          {
            title: "Style the Widget",
            guideName: "custom-widget"
          },
          {
            title: "Customize the Okta-hosted error pages",
            guideName: "custom-error-pages"
          },
          {
            title: "Customize SMS messages",
            guideName: "custom-sms-messaging"
          },
          {
            title: "Customize email notifications and email domains",
            guideName: "custom-email"
          },
          {
            title: "Customize themes",
            path: "/docs/guides/customize-themes/"
          }
        ]
      },
      {
        title: "OIN Partner Integrations",
        subLinks: [
          {
            title: "Build a SCIM provisioning integration",
            subLinks: [
              {
                title: "Overview",
                path: "/docs/guides/scim-provisioning-integration-overview/main/"
              },
              {
                title: "Prepare your SCIM API service",
                path: "/docs/guides/scim-provisioning-integration-prepare/main/"
              },
              {
                title: "Connect your SCIM API service to Okta",
                path: "/docs/guides/scim-provisioning-integration-connect/main/"
              },
              { title: "Test your SCIM Okta integration",
                path: "/docs/guides/scim-provisioning-integration-test/main/"
              }
            ]
          },
          {
            title: "OIDC and the OIN: A Developer Primer",
            subLinks: [
              {
                title: "Overview",
                path: "/docs/guides/oin-oidc-overview/main/"
              },
              {
                title: "Protocol-level requirements",
                path: "/docs/guides/oin-oidc-protocols/main/"
              },
              {
                title: "Multi-tenancy",
                path: "/docs/guides/oin-oidc-multi-tenancy/main/"
              },
              {
                title: "OIN integration best practices",
                path: "/docs/guides/oin-oidc-best-practices/main/"
              }
            ]
          },
          {
            title: "Build a Single Sign-On (SSO) integration",
            guideName: "build-sso-integration"
          },
          { title: "Submit an app integration", guideName: "submit-app" }
        ]
      },
      {
        title: "API Security",
        subLinks: [
          {
            title: "Implement OAuth for Okta",
            guideName: "implement-oauth-for-okta"
          },
          {
            title: "Implement OAuth for Okta with a Service App",
            guideName: "implement-oauth-for-okta-serviceapp"
          },
          {
            title: "Protect your API endpoints",
            guideName: "protect-your-api"
          },
          {
            title: "Configure an access policy",
            guideName: "configure-access-policy"
          },
          {
            title: "Integrate Third-Party Risk",
            guideName: "third-party-risk-integration"
          }
        ]
      },
      {
        title: "Deploy to Production",
        subLinks: [
          { title: "Deployment checklists", path: "/docs/guides/deployment-checklist/main/" },
          { title: "Deploy your app", guideName: "deploy-your-app" },
          {
            title: "Migrate to Okta",
            subLinks: [
              {
                title: "Prerequisites",
                path: "/docs/guides/migrate-to-okta-prerequisites/main/"
              },
              {
                title: "Bulk migration with credentials",
                path: "/docs/guides/migrate-to-okta-bulk/main/"
              },
              {
                title: "Import Users with Inline Password Hooks",
                path: "/docs/guides/migrate-to-okta-password-hooks/main/"
              }
            ]
          }
        ]
      },
      {
        title: "Hooks",
        subLinks: [
          {
            title: "Common Hook Set-up Steps",
            guideName: "common-hook-set-up-steps"
          },
          {
            title: "Event Hook",
          guideName: "event-hook-implementation"
          },
          {
            title: "Event Hooks with ngrok",
          guideName: "event-hook-ngrok"
          },
          {
            title: "Event Hooks with Hookdeck",
          guideName: "event-hook-hookdeck"
          },
          {
            title: "Password Import Inline Hook",
          guideName: "password-import-inline-hook"
          },
          {
            title: "Registration Inline Hook",
          guideName: "registration-inline-hook"
          },
          {
            title: "Token Inline Hook",
          guideName: "token-inline-hook"
          },
        ]
      },
      {
        title: "Identity Engine",
        subLinks: [
          {
            title: "Okta Identity Engine Overview",
            path: "/docs/guides/oie-intro/"
          },
          {
            title: "Redirect authentication",
            subLinks: [
              {
                title: "Use redirect auth with the sample apps",
                guideName: "sampleapp-oie-redirectauth",
              },
            ]
          },
          {
            title: "Embedded authentication",
            subLinks: [
              {
                title: "Get set up",
                guideName: "oie-embedded-common-org-setup",
              },
              {
                title: "Download and set up the sample app",
                guideName: "oie-embedded-common-download-setup-app",
              },
              {
                title: "Run the sample apps",
                guideName: "oie-embedded-common-run-samples",
              },
              {
                title: "Build a use case with the embedded SDK",
                subLinks: [
                  {
                    title: "Basic sign-in flow using the password factor",
                    guideName: "oie-embedded-sdk-use-case-basic-sign-in",
                  },
                  {
                    title: "Sign in with Facebook",
                    guideName: "oie-embedded-sdk-use-case-sign-in-soc-idp",
                  },
                  {
                    title: "User password recovery",
                    guideName: "oie-embedded-sdk-use-case-pwd-recovery-mfa",
                  },
                  {
                    title: "Self-registration",
                    guideName: "oie-embedded-sdk-use-case-self-reg",
                  },
                  {
                    title: "Sign in with password and email factors",
                    guideName: "oie-embedded-sdk-use-case-sign-in-pwd-email",
                  },
                  {
                    title: "Sign in with password and phone factors",
                    guideName: "oie-embedded-sdk-use-case-sign-in-pwd-phone",
                  },
                  {
                    title: "User sign out (local app)",
                    guideName: "oie-embedded-sdk-use-case-basic-sign-out",
                  },
                  {
                    title: "SDK limitations and workarounds",
                    guideName: "oie-embedded-sdk-limitations",
                  }
                ]
              },
              {
                title: "Build a use case with the embedded Widget",
                subLinks: [
                  {
                    title: "Load the Widget",
                    guideName: "oie-embedded-widget-use-case-load",
                  },
                  {
                    title: "Basic sign-in flow using the Widget",
                    guideName: "oie-embedded-widget-use-case-basic-sign-in",
                  },
                  {
                    title: "Sign in with Facebook using the Widget",
                    guideName: "oie-embedded-widget-use-case-sign-in-soc-idp",
                  }
                ]
              },
              {
                title: "Refresh access and ID tokens",
                guideName: "oie-embedded-common-refresh-tokens",
              },
            ]
            },
          {
            title: "Okta Identity Engine Limitations",
            path: "/docs/guides/ie-limitations/"
          },
        ]
      },
    ]
  },
];

export const languagesSdk = [
  {
    title: "Languages & SDKs",
    subLinks: [
      { title: "Languages & SDKs overview", path: "/code/" },
      {
        title: "Mobile",
        subLinks: [
          { title: "Android", path: "/code/android/" },
          { title: "iOS", path: "/code/ios/" },
          { title: "React Native", path: "/code/react-native/" }
        ]
      },
      {
        title: "Front End",
        subLinks: [
          {
            title: "Angular",
            subLinks: [
              {
                title: "Add User Authentication to Your Angular App",
                path: "/code/angular/"
              },
              {
                title: "Okta Sign-In Widget and Angular",
                path: "/code/angular/okta_angular_sign-in_widget/"
              },
              {
                title: "Okta Auth JS and Angular",
                path: "/code/angular/okta_angular_auth_js/"
              }
            ]
          },
          {
            title: "JavaScript",
            subLinks: [
              {
                title: "Add User Authentication to Your JavaScript App",
                path: "/code/javascript/"
              },
              {
                title: "Okta Sign-In Widget Guide",
                path: "/code/javascript/okta_sign-in_widget/"
              },
              {
                title: "Okta Auth SDK Guide",
                path: "/code/javascript/okta_auth_sdk/"
              }
            ]
          },
          {
            title: "React",
            subLinks: [
              {
                title: "Add User Authentication to Your React App",
                path: "/code/react/"
              },
              {
                title: "Okta Sign-In Widget and React",
                path: "/code/react/okta_react_sign-in_widget/"
              },
              {
                title: "Okta Auth JS and React",
                path: "/code/react/okta_react/"
              }
            ]
          },
          {
            title: "Vue",
            subLinks: [
              {
                title: "Add User Authentication to Your Vue App",
                path: "/code/vue/"
              },
              {
                title: "Okta Sign-In Widget and Vue",
                path: "/code/vue/okta_vue_sign-in_widget/"
              },
              {
                title: "Okta Auth JS and Vue",
                path: "/code/vue/okta_vue/"
              }
            ]
          }
        ]
      },
      {
        title: "Back End",
        subLinks: [
          { title: ".NET", path: "/code/dotnet/aspnetcore/" },
          { title: "Go", path: "/code/go/" },
          { title: "Java", path: "/code/java/" },
          { title: "Node.js", path: "/code/nodejs/" },
          { title: "PHP", path: "/code/php/" },
          { title: "Python", path: "/code/python/" },
          { title: "REST", path: "/code/rest/" }
        ]
      },
      { title: "Identity Engine SDKs & Samples", path: "/code/oie/" }
    ]
  }
];

export const reference = [
    {
    title: "Reference",
    subLinks: [
      { title: "Overview", path: "/docs/reference/" },
      {
        title: "Core Okta API",
        subLinks: [
          { title: "Overview", path: "/docs/reference/core-okta-api/" },
          {
            title: "Rate Limits",
            subLinks: [
              {
                title: "Rate limits overview",
                path: "/docs/reference/rate-limits/"
              },
              {
                title: "Rate limit dashboard",
                path: "/docs/reference/rl-dashboard/"
              },
              {
                title: "Authentication/End-user rate limits",
                path: "/docs/reference/rl-global-enduser/"
              },
              {
                title: "Management rate limits",
                path: "/docs/reference/rl-global-mgmt/"
              },
              {
                title: "Other endpoint rate limits",
                path: "/docs/reference/rl-global-other-endpoints/"
              },
              {
                title: "Additional limits",
                path: "/docs/reference/rl-additional-limits/"
              },
              {
                title: "Rate limit best practices",
                path: "/docs/reference/rl-best-practices/"
              },
              {
                title: "Client-based rate limits",
                path: "/docs/reference/rl-clientbased/"
              },
              { title: "DynamicScale",
                path: "/docs/reference/rl-dynamic-scale/"
              },
              { title: "Previous rate limits",
              path: "/docs/reference/rl-previous/"
              },
              {
                title: "System Log events for rate limits",
                path: "/docs/reference/rl-system-log-events/"
              },
            ]
          },
          { title: "Error Codes", path: "/docs/reference/error-codes/" },
          { title: 'Sign in Your Users', path: null},
          { title: "Authentication", path: "/docs/reference/api/authn/" },
          { title: "Identity Providers", path: "/docs/reference/api/idps/" },
          { title: "OpenID Connect & OAuth 2.0 API", path: "/docs/reference/api/oidc/"},
          { title: "WebFinger", path: "/docs/reference/api/webfinger/" },
          { title: "Manage Okta Objects", path: null},
          { title: "Administrator Roles", path: "/docs/reference/api/roles/" },
          { title: "Apps", path: "/docs/reference/api/apps/" },
          { title: "Authenticators Admin", path: "/docs/reference/api/authenticators-admin/" },
          { title: "Authorization Servers", path: "/docs/reference/api/authorization-servers/"},
          { title: "Brands", path: "/docs/reference/api/brands/"},
          { title: "CAPTCHAs", path: "/docs/reference/api/captchas/"},
          { title: "Devices", path: "/docs/reference/api/devices/"},
          { title: "Domains", path: "/docs/reference/api/domains/"},
          { title: "Dynamic Client Registration", path: "/docs/reference/api/oauth-clients/"},
          { title: "Event Types", path: "/docs/reference/api/event-types/" },
          { title: "Factors", path: "/docs/reference/api/factors/" },
          { title: "Features", path: "/docs/reference/api/features/" },
          { title: "Groups", path: "/docs/reference/api/groups/" },
          { title: "Linked Objects", path: "/docs/reference/api/linked-objects/"},
          { title: "Log Streaming", path: "/docs/reference/api/log-streaming/"},
          { title: "Mappings", path: "/docs/reference/api/mappings/" },
          { title: "MyAccount", path: "/docs/reference/api/myaccount/" },
          { title: "Org", path: "/docs/reference/api/org/" },
          { title: "Policy", path: "/docs/reference/api/policy/" },
          { title: "Risk Events", path: "/docs/reference/api/risk-events/" },
          { title: "Risk Providers", path: "/docs/reference/api/risk-providers/" },
          { title: "Schemas", path: "/docs/reference/api/schemas/" },
          { title: "Sessions", path: "/docs/reference/api/sessions/" },
          { title: "Subscriptions", path: "/docs/reference/api/admin-notifications/" },
          { title: "System Log", path: "/docs/reference/api/system-log/" },
          { title: "Templates", path: "/docs/reference/api/templates/" },
          { title: "ThreatInsight", path: "/docs/reference/api/threat-insight/" },
          { title: "Trusted Origins", path: "/docs/reference/api/trusted-origins/" },
          { title: "User Types", path: "/docs/reference/api/user-types/" },
          { title: "Users", path: "/docs/reference/api/users/" },
          { title: "Zones", path: "/docs/reference/api/zones/" }
        ]
      },
      {
        title: 'Advanced Server Access API',
        subLinks: [
           {
            title: "Introduction to the Advanced Server Access API",
            path: "/docs/reference/api/asa/introduction/"
          },
          {
            title: "ASA Attributes API",
            path: "/docs/reference/api/asa/attributes/"
          },
          { title: "ASA Audits API", path: "/docs/reference/api/asa/audits/" },
          {
            title: "ASA Clients API",
            path: "/docs/reference/api/asa/clients/"
          },
          {
            title: "ASA Entitlements API",
            path: "/docs/reference/api/asa/entitlements/"
          },
          { title: "ASA Groups API", path: "/docs/reference/api/asa/groups/" },
          {
            title: "ASA Projects API",
            path: "/docs/reference/api/asa/projects/"
          },
          {
            title: "ASA Service Users API",
            path: "/docs/reference/api/asa/service-users/"
          },
          { title: "ASA Teams API", path: "/docs/reference/api/asa/teams/" },
          { title: "ASA Users API", path: "/docs/reference/api/asa/users/" }
        ]
      },
      {
        title: 'SCIM Protocol',
        subLinks: [
          {
            title: "Overview",
            path: "/docs/reference/scim/"
          },
          {
            title: "SCIM V2.0",
            path: "/docs/reference/scim/scim-20/"
          },
          {
            title: "SCIM V1.1",
            path: "/docs/reference/scim/scim-11/"
          }
        ]
      },
      {
        title: 'Postman Collections',
        path: "/docs/reference/postman-collections/"
      },
      {
        title: 'Hooks',
        subLinks: [
          { title: "Event Hooks Management API", path: "/docs/reference/api/event-hooks/" },
          { title: "Inline Hooks Management API", path: "/docs/reference/api/inline-hooks/" },
          { title: "Inline Hook Types",
            subLinks: [
            { title: "Token Hook", path: "/docs/reference/token-hook/" },
            { title: "SAML Hook", path: "/docs/reference/saml-hook/" },
            { title: "Password Import Hook", path: "/docs/reference/password-hook/" },
            { title: "User Import Hook", path: "/docs/reference/import-hook/"},
            { title: "Registration Hook", path: "/docs/reference/registration-hook/" }
          ]},
          { title: "Hooks best practices", path: "/docs/reference/hooks-best-practices/"},
        ]
      },
      {
        title: 'Okta Expression Language',
        path: "/docs/reference/okta-expression-language/"
      },
      {
        title: "Okta Expression Language in Identity Engine",
        path: "/docs/reference/okta-expression-language-in-identity-engine/"
      },
      {
        title: 'Release Life Cycle',
        path: "/docs/reference/releases-at-okta/"
      },
    ]
  }
]

export const releaseNotes = [
  {
    title: "Release Notes",
    subLinks: [
      { title: "Overview", path: "/docs/release-notes/" },
      { title: "2022", path: "/docs/release-notes/2022/" },
      { title: "2022 - Okta Identity Engine", path: "/docs/release-notes/2022-okta-identity-engine/" },
      { title: "2021", path: "/docs/release-notes/2021/" },
      { title: "2021 - Okta Identity Engine", path: "/docs/release-notes/2021-okta-identity-engine/" },
      { title: "2020", path: "/docs/release-notes/2020/" },
      { title: "2019", path: "/docs/release-notes/2019/" },
      { title: "2018", path: "/docs/release-notes/2018/" },
      { title: "2017", path: "/docs/release-notes/2017/" },
      { title: "2016", path: "/docs/release-notes/2016/" }
    ]
  }
]
