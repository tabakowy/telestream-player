# Telestream Player

This is the Teletream Take-Home Project used to establish skill level for front-end developers.

## Getting started

This application uses `pnpm` as the default package manager. To run this project locally, ensure that you have `pnpm` installed, or [install it before proceeding](https://pnpm.io/installation).

### API

Go to the API directory

```bash
  cd api
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```

### Front-end

Go to the frontend app directory

```bash
  cd frontend
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```

To run tests, run the following command

```bash
  pnpm run test
```

## API Reference

#### Get all items

```http
  GET /api/clips
```

#### Get all clips

```http
  GET /api/clips/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
