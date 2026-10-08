// j importe express
import express from'express';
// import dotenv pour utiliser les valeurs du env
import dotenv from 'dotenv';
dotenv.config();

import authRoute from './routes/auth.route.js';

import usersRoute from './routes/users.route.js';

import commentsRoute from './routes/comments.route.js';

import participantsRoute from './routes/participants.route.js';

import eventsRoute from './routes/events.route.js'



// je cree la variable qui va accueillie mes parametres de serveur
const app = express();
//  mon api utilise json
app.use(express.json());
// j importe les fichiers routes
//auth route sur celui ci je ne comprends pas l utilité
// dois je laisser a voir ensuite 
app.use('/auth', authRoute);

app.use('/users', usersRoute);
app.use('/comments', commentsRoute);
app.use('/participants', participantsRoute);
app.use('/events',eventsRoute )

    
app.get('/', (req, res) => {
    res.json({ statut: 'OK' });
})

app.listen(process.env.SERVER_PORT, function()
 {
    console.log(`http://127.0.0.1:${process.env.SERVER_PORT}/`);

})



