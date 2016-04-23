async function validate(ctx) {
  const req = ctx.request;
  if (req.query['hub.verify_token'] === 'qwe' && req.query['hub.challenge']) {
    ctx.body = req.query['hub.challenge'];
  } else {
    ctx.body = 'Error, wrong validation token';
  }
}

export default validate;
