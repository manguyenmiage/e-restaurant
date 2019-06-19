export const api_routes = process.env.REACT_APP_API_MODE_CONNECT === 'local'
    ?
        {
            basePath: 'http://localhost:3001/api/v1',
            users: {
                fb: {
                    auth: '/users/auth/facebook',
                    authMe: '/auth/me'
                }
            }
        }
    : {
        basePath: 'https://epstj5cx6c.execute-api.us-east-1.amazonaws.com/dev',
        users: {
            fb: {
                auth: '/users/auth/facebook',
                authMe: '/auth/me'
            }
        }
      }

