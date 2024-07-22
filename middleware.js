module.exports = (req, res) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'; script-src \'self\' https://widget.intercom.io;');
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-DNS-Prefetch-Control', 'off');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.end('Middleware applied');
};