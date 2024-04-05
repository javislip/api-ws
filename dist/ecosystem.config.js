module.exports =
{
    apps: [
      {
        name: 'APP_Name',
        script: 'app.js', // Ruta al archivo JavaScript transpilado
        watch: false,
        max_memory_restart: '1000M',
        instances: 1,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
}