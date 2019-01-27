
// const host = 'vdevpril322am.ux.dsone.3ds.com';
const host = 'vdevpril925am.ux.dsone.3ds.com';

/**
 * Ensure all cookies that were sent back from the server are written back by browser
 * Replace the host name if there was any redirection from server response
 * @param {Object} proxyRes 
 */
function onProxyRes (proxyRes) {
  if (proxyRes.headers['set-cookie']) {
    const cookies = proxyRes.headers['set-cookie'].map(cookie => 
      cookie.match(/[^=]*=[^=]*;/)[0]
    );
    // const cookies = proxyRes.headers['set-cookie'].map(cookie => cookie.replace(/Secure;/, ''));
    proxyRes.headers['set-cookie'] = cookies;
  }

  // check if there is redirection
  if (proxyRes.statusCode === 302) {
    proxyRes.headers.location = proxyRes.headers.location.replace(/^http[s]?:\/\/[^\/]*/, 'http://localhost:8000');
    console.log(proxyRes.headers.location);
  }
}

const option = {
  changeOrigin: true,
  secure: false,
  onProxyRes
};

const proxy = {
  '/login': {
    target: `https://${host}:453/iam/cas`, 
    ...option  
  },
  '/iam': {
    target: `https://${host}:453`,
    ...option  
  },
  '/3DSpace': {
    target: `https://${host}`, 
    ...option  
  },
  '/3DDashboard': {
    target: `https://${host}:444`, 
    ...option  
  },

  // local web service overrides
  '/SMAExeServer-REST/job/*/results*': {
    target: 'http://localhost:3000',
    option: {
      changeOrigin: true,
      secure: false
    }
  },

  '/SMAExeServer-REST': {
    target: `https://${host}:446`, 
    ...option  
  }
};


exports.proxy = proxy;
