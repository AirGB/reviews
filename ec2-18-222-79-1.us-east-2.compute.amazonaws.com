version: '3'

services:
  redis:
    image: redis:4.0.11
    # command: ["redis-server"]
    ports:
        - '6379:6379'
  review-component:
    build: reviews/
    depends_on:
      - 'redis'
    links:
      - 'redis'
    environment:
      - REDIS_HOST=redis
    # restart: on-failure
    ports:
      - '3002:3002'
