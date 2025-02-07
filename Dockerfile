FROM node:lts AS build
WORKDIR /app
COPY . .
ENV PNPM_HOME=/usr/local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN npm install -g pnpm
RUN pnpm setup
RUN pnpm add -g pnpm@latest
RUN pnpm install
RUN pnpm exec playwright install --with-deps chromium
RUN pnpm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80