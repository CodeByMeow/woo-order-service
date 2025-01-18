# WooCommerce Order Service
==========================

A Node.js application that listens for webhook notifications from WooCommerce and sends order data to Pancake API.

## Table of Contents
-----------------

1. [Overview](#overview)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Endpoints](#endpoints)
6. [Webhook Verification](#webhook-verification)
7. [Error Handling](#error-handling)
8. [API Documentation](#api-documentation)

## Overview
------------

This application uses Express.js to create a RESTful API that listens for webhook notifications from WooCommerce. When a new order is created, the application validates the webhook data and sends the order information to the Pancake API.

## Requirements
---------------

* Node.js (>= 14.17.0)
* npm (>= 6.14.13)
* WooCommerce API credentials
* Pancake API credentials

## Installation
------------

1. Clone the repository: `git clone https://github.com/your-username/woocommerce-order-service.git`
2. Install dependencies: `npm install`
3. Create a `.env` file with your WooCommerce and Pancake API credentials:
```bash
WEBHOOK_SECRET=your-webhook-secret
PANCAKE_API_URL=https://api.pancake.com
PANCAKE_API_KEY=your-pancake-api-key
PANCAKE_SHOP_ID=your-pancake-shop-id
```
## Configuration
-------------

The application uses the following configuration files:

* `config/pancake.config.js`: Pancake API configuration
* `config/webhook.config.js`: Webhook configuration
* `config/fields.config.js`: Field mapping configuration

## Endpoints
------------

* `POST /api/v1/orders/new`: Handles new order webhooks from WooCommerce

## Webhook Verification
--------------------

The application uses a webhook secret to verify incoming webhook notifications. The secret is stored in the `.env` file as `WEBHOOK_SECRET`.

## Error Handling
----------------

The application uses a custom error handler to catch and handle errors. Errors are logged to the console and returned to the client with a JSON response.

## API Documentation
-------------------

API documentation is not currently available. However, the application uses standard HTTP status codes and returns JSON responses with error messages.

## License
-------

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
