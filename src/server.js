import express              from 'express';
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig        from '../webpack.config';

   

const app  = express();
app.set('port' , process.env.PORT || 5000);
app.use(webpackDevMiddleware(webpack(webpackConfig)));


app.get('/' , (req, res) => {
	res.send('Hello world');
});
app.get('/api' , (req , res )=>{
	res.json({api: 'vantonio'});
})
app.listen(app.get('port') , () => {
	console.log('server on port ', app.get('port'));
})
