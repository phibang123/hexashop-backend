const mongoose = require('mongoose');

import { mongodb_client, mongodb_server } from '../configs/index';

mongoose
  .connect(mongodb_server)
  .then(() => {
    console.log('Connected Successful');
  })
  .catch(() => {
    console.error('Error in the Connection');
  });
