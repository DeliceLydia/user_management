import dotenv from 'dotenv';
import server from './src/server';

dotenv.config();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Sup we are live at localhost:${PORT}`));
