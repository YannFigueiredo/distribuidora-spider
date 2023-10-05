export const validation = (schemas) => (req, res, next) => {
  const errorsResult = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key], { abortEarly: false });
    } catch(error) {
      const errors = {};
  
      error.inner.forEach(err => {
        if(err.path === undefined) return;
  
        errors[err.path] = err.message;
      })
      
      errorsResult[key] = errors;
    }
  });

  if(Object.entries(errorsResult).length > 0) {
    return res.status(400).json({ errors: errorsResult });
  } else {
    return next();
  }
};