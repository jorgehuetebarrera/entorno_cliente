import { init } from './loaders/index.js';
import express from 'express';
import routes from './routes/notes.js';


const app = express();
const PORT = 3000;

init(app);
//app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
