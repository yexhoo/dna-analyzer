const express = require('express');

const app = express();

const analyzer = require('./analyzer');
const { BAD_REQUEST, RUNNING_SERVER, PORT } = require('./constant');
const { NEW_LINE, HAS_MUTATION, HAS_NO_MUTATION } = require('./constant');
const { HAS_MUTATION_MSG, HAS_NO_MUTATION_MSG } = require('./constant');

app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError
      && err.status === BAD_REQUEST && 'body' in err) {
    res.status(BAD_REQUEST).send(err.toString());
  } else next();
});

app.post('/mutation', async (req, res) => {
  try {
    let error;
    const hasMutation = await analyzer.hasMutation(req.body.dna).catch((err) => { error = err; });
    if (error) {
      console.log(NEW_LINE, error);
      return res.status(BAD_REQUEST).send(error.toString());
    }

    return res.status(hasMutation ? HAS_MUTATION : HAS_NO_MUTATION)
      .send(hasMutation ? HAS_MUTATION_MSG : HAS_NO_MUTATION_MSG);
  } catch (err) {
    return res.status(BAD_REQUEST).send(err.toString());
  }
});

app.listen(PORT, () => { console.log(RUNNING_SERVER); });
