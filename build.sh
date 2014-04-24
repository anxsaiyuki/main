cd build/js                                                                                                                                                      
rm -r *.js
cd ../..

cd build/css
rm -r *.css
cd ../..

cd build/img
rm -r *.jpg
rm -r *.png
rm -r *.gif
cd ../..

cp *.html build/
grunt deploy



