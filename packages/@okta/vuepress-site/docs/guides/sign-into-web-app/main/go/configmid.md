Update your environment variables to include the following:

```bash
CLIENT_ID=${yourClientId}
CLIENT_SECRET=${yourClientSecret}
ISSUER=https://${yourOktaDomain}/oauth2/${authorizationServerId}
```

If you're using the [default Custom Authorization Server](/docs/concepts/auth-servers/#default-custom-authorization-server), set `${authorizationServerId}=default`. If you're using another [Custom Authorization Server](/docs/concepts/auth-servers/#custom-authorization-server), set `${authorizationServerId}` to the custom Authorization Server ID.

We also need access to a session store:

```go
var sessionStore = sessions.NewCookieStore([]byte("okta-hosted-login-session-store"))
```
