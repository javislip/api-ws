module.exports = 
{
    apps: [
      {
        name: 'Mi WS',
        script: './dist/app.js', // Ruta al archivo JavaScript transpilado
        watch: false,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
}