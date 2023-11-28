import { init } from './loaders/index.js';
import express from 'express';

const app = express();
const PORT = 3000;

init(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
