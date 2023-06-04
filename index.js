const router        = require('./routes/index');
const express       = require('express');
const app           = express();
const PluginManager = require('./plugins');
const pluginManager = new PluginManager(app);

// Register plugins
pluginManager.registerAll();

// Register router
app.use('/', router);

// Start server
app.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', () => console.log(`Live`));