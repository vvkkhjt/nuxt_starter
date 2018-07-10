FROM hub.digi-sky.com/base/nodejs:8.9.4

LABEL org="dsky" \
  meta.dsky.team="plat" \
  meta.dsky.plat.project.id="oa" \
  meta.dsky.plat.oa.module.id="kpi" \
  meta.dsky.plat.oa.ratify.description="dsky oa kpi system" \
  meta.dsky.plat.oa.ratify.type="fed"

ADD . /data/webapps
RUN cd /data/webapps && yarn install && npm run build
EXPOSE 8080
RUN chmod 777 run.sh
WORKDIR /data/webapps
CMD ["/data/webapps/run.sh"]
