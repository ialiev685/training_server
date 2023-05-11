# training_server

docker build -t training_server . - собрать

"-t" - помечает название образа
"." - в текущей директории
"-d" - запустит контейнер в фоновом режиме. 
"-p" - порт
"--name" - назвать контейнер

docker run -d -p 3000:3000 --name node_server training_server - запустить