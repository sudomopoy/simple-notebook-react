FROM node:14 as builder

WORKDIR /app/
ARG REACT_APP_BRAND_NAME=notehat
ARG REACT_APP_MODE=product
ARG REACT_APP_API_URI=http://localhost:62761/
ARG REACT_APP_API_VERSION=v1

ADD package.json yarn.lock ./
RUN yarn

ADD . /app/
RUN yarn build

FROM nginx

COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
