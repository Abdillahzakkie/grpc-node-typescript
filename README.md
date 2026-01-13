# gRPC Node.js TypeScript Project

A simple gRPC server and client implementation using Node.js and TypeScript with a Greeter service that demonstrates basic RPC communication.

## 🚀 Features

- **gRPC Server**: Implements a Greeter service with SayHello RPC method
- **gRPC Client**: Connects to the server and makes RPC calls
- **TypeScript Support**: Full TypeScript implementation with type safety
- **Protocol Buffers**: Uses `.proto` files to define service contracts
- **Development Tools**: Includes nodemon for hot-reloading and Biome for code formatting

## 📁 Project Structure

```
├── src/
│   ├── index.ts              # Server entry point
│   ├── client.ts             # Client implementation
│   ├── app.ts                # gRPC server configuration
│   ├── constants/            # Configuration and utilities
│   │   ├── environments.ts   # Environment variables
│   │   ├── protoLoaderOptions.ts # Proto loader configuration
│   │   └── protoPackageLoader.ts # Proto package loader utility
│   ├── controllers/          # Request handlers
│   │   └── greeter/
│   │       └── index.ts      # Greeter controller with sayHello handler
│   ├── proto/               # Protocol Buffer definitions
│   │   └── greeter.proto    # Greeter service definition
│   └── services/            # Service layer (currently exports greeter)
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── nodemon.json            # Nodemon configuration
└── biome.json             # Biome linter/formatter configuration
```

## 🛠️ How It Works

### Server ([index.ts](src/index.ts))

The server entry point that:
1. Imports the configured gRPC server from [app.ts](src/app.ts)
2. Binds the server to `127.0.0.1:50051` (localhost)
3. Uses insecure credentials for development
4. Starts listening for incoming gRPC requests

### Server Configuration ([app.ts](src/app.ts))

The gRPC server setup that:
1. Creates a new gRPC server instance
2. Loads the `greeter.proto` definition using the proto package loader
3. Adds the GreeterService with the `sayHello` handler implementation
4. Exports the configured server for the main entry point

### Client ([client.ts](src/client.ts))

A simple gRPC client that:
1. Connects to the server at `localhost:50051`
2. Creates a `GreeterService` client instance
3. Makes a `SayHello` RPC call with sample data (John Doe)
4. Handles the response or errors from the server

### Protocol Buffer Definition ([greeter.proto](src/proto/greeter.proto))

Defines the gRPC service contract:
```proto
service GreeterService {
    rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
    string first_name = 1;
    string last_name = 2;
}

message HelloResponse {
    string message = 1;
}
```

### Service Handler

The `sayHello` handler in [controllers/greeter/index.ts](src/controllers/greeter/index.ts):
- Receives `HelloRequest` with `first_name` and `last_name`
- Returns `HelloResponse` with a personalized greeting message
- Implements the gRPC unary call interface with proper error handling

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grpc-node-typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

1. **Start the gRPC server in development mode**
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```
   This starts the server on `localhost:50051` with hot-reloading using nodemon.

2. **Run the client in a separate terminal**
   ```bash
   npm run start:client
   # or
   yarn start:client
   ```
   This will execute the client code and make a request to the server.

### Production Build

1. **Build the project**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the production server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `start:dev` | Start server in development mode with nodemon |
| `start:client` | Run the gRPC client |
| `build` | Build TypeScript to JavaScript |
| `start` | Start production server |
| `lint` | Run Biome linter |
| `format` | Format code with Biome |
| `ts.check` | Type check with TypeScript compiler |

## 🧪 Testing the Application

1. Start the server:
   ```bash
   npm run start:dev
   ```

2. In another terminal, run the client:
   ```bash
   npm run start:client
   ```

Expected output from client:
```
Running client...
Greeting: Hello, John Doe! DragonLord greets you.
```

## 🔧 Configuration

### Environment Variables

- `PORT`: Server port (default: 50051)
- `BASE_PROTO_FOLDER`: Proto files directory (default: "./proto")

### Proto Loader Options

The project uses specific proto loader options defined in [protoLoaderOptions.ts](src/constants/protoLoaderOptions.ts):
- `keepCase: true` - Preserve field name casing
- `longs: String` - Convert long values to strings
- `enums: String` - Convert enums to strings
- `defaults: true` - Include default values
- `oneofs: true` - Include oneof fields

## 🚀 Extending the Project

To add new gRPC services:

1. Define your service in a new `.proto` file in [src/proto/](src/proto/)
2. Create controllers in [src/controllers/](src/controllers/)
3. Implement service handlers following the pattern in [greeter controller](src/controllers/greeter/index.ts)
4. Register the service in [app.ts](src/app.ts)

## 📦 Dependencies

### Main Dependencies
- `@grpc/grpc-js`: gRPC implementation for Node.js
- `@grpc/proto-loader`: Protocol Buffer loader for gRPC

### Development Dependencies
- `typescript`: TypeScript compiler
- `nodemon`: Development server with hot-reload
- `@biomejs/biome`: Fast linter and formatter
- `concurrently`: Run multiple commands concurrently

## 📄 License

MIT License