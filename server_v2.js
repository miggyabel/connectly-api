const app = require('./app_enhanced'); // 
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`--- CONNECTLY API V2 (ENHANCED) ---`);
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Security: Enabled (API Key Required)`);
    console.log(`Pattern: Singleton Database Instance`);
});
