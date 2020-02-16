jekyll build
sudo rm -rf ~/DocumentRoot/
cp assets/js/sendmail.min.js _site/assets/js
sudo cp -r _site/* ~/DocumentRoot/
