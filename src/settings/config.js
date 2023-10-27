const TENANTS_HOSTS = {
    correos: 'correos',
    xpo: 'xpo',
  };
  
  const HOST_LIST = {
    'localhost.xpo:3000': TENANTS_HOSTS.xpo,
    'localhost.correos:3000': TENANTS_HOSTS.correos,
  };
  
  const HOST = HOST_LIST[window.location.host] || TENANTS_HOSTS.correos;

  export  {HOST};
  