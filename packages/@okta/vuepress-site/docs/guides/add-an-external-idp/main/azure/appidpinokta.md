> **Note:** Be sure to select **Add OpenID Connect IdP** as the type of Identity Provider that you want to create for <StackSelector snippet="idp" noSelector inline /> in Okta.

* **Name** &mdash; enter a name for the Identity Provider configuration.
* **Client Id** &mdash; paste the client ID that you obtained from <StackSelector snippet="idp" noSelector inline /> when you configured the Identity Provider in the previous section.
* **Client Secret** &mdash; paste the secret that you obtained in the previous section.
* **Scopes** &mdash; leave the defaults. These scopes are included when Okta makes an OpenID Connect request to <StackSelector snippet="idp" noSelector inline />.

    > **Note:** By default, Okta requires the `email` attribute for a user. The `email` scope is required to create and link the user to Okta's Universal Directory.

In the **Endpoints** section:

Add the following endpoint URLs for the <StackSelector snippet="idp" noSelector inline /> Identity Provider that you are configuring. You obtained these in the previous section.

* **Issuer** &mdash; the identifier of the <StackSelector snippet="idp" noSelector inline /> Identity Provider: `https://login.microsoftonline.com/${Directory(tenant)ID}/v2.0`
* **Authorization endpoint** &mdash; the URL of the <StackSelector snippet="idp" noSelector inline /> OAuth 2.0 authorization endpoint. For example: `https://login.microsoftonline.com/${Directory(tenant)ID}/oauth2/v2.0/authorize`
* **Token endpoint** &mdash; the URL of the <StackSelector snippet="idp" noSelector inline /> token endpoint for obtaining access and ID tokens. For example: `https://login.microsoftonline.com/${Directory(tenant)ID}/oauth2/v2.0/token`
* **JWKS endpoint** &mdash; the URL of the <StackSelector snippet="idp" noSelector inline /> JSON Web Key Set document. This document contains signing keys that are used to validate the signatures from the provider. For example: `https://login.microsoftonline.com/${Directory(tenant)ID}/discovery/v2.0/keys`
