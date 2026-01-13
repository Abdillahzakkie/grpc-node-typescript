import * as grpcLibrary from "@grpc/grpc-js";
import { PORT, protoPackageLoader } from "./constants";
import { HelloRequest, HelloResponse } from "./controllers";

const protoPackage = protoPackageLoader({
	path: "greeter.proto",
	packageName: "greeter",
});

function main() {
	console.log("Running client...");
	const client = new protoPackage.GreeterService(
		`localhost:${PORT}`,
		grpcLibrary.credentials.createInsecure()
	);

	const request: HelloRequest = {
		first_name: "John",
		last_name: "Doe",
	};

	client.SayHello(
		request,
		(err: grpcLibrary.ServiceError | null, response: HelloResponse) => {
			if (err) {
				console.error("Error:", err);
			} else {
				console.log("Greeting:", response.message);
			}
		}
	);
}

main();
