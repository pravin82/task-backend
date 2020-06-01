import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './server/user/routes';
import projectRoutes from './server/project/routes';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 4000;

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/project', projectRoutes);


app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.'
}));
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
export default app;