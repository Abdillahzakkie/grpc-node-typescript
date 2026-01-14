import "dotenv/config";
import * as grpcLibrary from "@grpc/grpc-js";
import server from "./app";
import { PORT } from "./constants";

// const bindAddress = `0.0.0.0:${PORT}`;
const bindAddress = `127.0.0.1:${PORT}`;

function main() {
	server.bindAsync(
		bindAddress,
		grpcLibrary.ServerCredentials.createInsecure(),
		(error, _port) => {
			if (error) {
				console.error("Server binding error:", error);
				return;
			}
			console.log(`Server running at ${bindAddress}`);
			// server.start();
		}
	);
}
main();
