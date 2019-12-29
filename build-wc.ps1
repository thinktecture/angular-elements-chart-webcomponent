ng build angular-chart-webcomponent --prod --output-hashing=none --single-bundle true --keep-polyfills true
cp -force dist\angular-chart-webcomponent\main-es2015.js demo\wc-piechart.js
cp -force dist\angular-chart-webcomponent\polyfills-es2015.js demo\polyfills.js
cp -force dist\angular-chart-webcomponent\scripts.js demo\angular-scripts.js