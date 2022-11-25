import express from 'express';
import routes from './Routes'
const app = express();

// declare a route with a response
// app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/v1', routes);

// start the server
app.listen(8081, () => {
  console.log(`server running : http://localhost:8081`);
});