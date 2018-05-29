#基础镜像
FROM harbor.test.digi-sky.com/base/node:8.9.4
#工作文件夹
WORKDIR /data/webapps
#打包添加的文件
ADD . /data/webapps
#RUN 镜像构建时执行的命令
RUN yarn install && npm run build

#CMD 指令指定容器启动时需要运行的程序
RUN chmod 777 run.sh
CMD ["./run.sh"]
