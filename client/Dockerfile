FROM node:18.15-bullseye-slim
RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y libc6  && \
    apt-get clean

WORKDIR /app

COPY .yarn ./.yarn
COPY public ./public
COPY src ./src

COPY .yarnrc.yml \
     components.json \
     entrypoint.sh \
     index.js \
     logger.js \
     next.config.js \
     package.json \
     postcss.config.js \
     README.md \
     tailwind.config.js \
     tsconfig.json \
     yarn.lock \
     .env.local \
     ./

RUN yarn install

ENV NEXT_TELEMETRY_DISABLED 1

RUN chown -R node:node /app
USER node

EXPOSE 3000
ENV PORT 3000
ENTRYPOINT ["/app/entrypoint.sh"]
