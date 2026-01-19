import "dotenv/config";
import * as grpcLibrary from "@grpc/grpc-js";
import { PORT, protoPackageLoader } from "./constants";
import type { HelloRequest } from "./proto/generated/greeter/HelloRequest";
import type { ProtoGrpcType as GreeterServiceProtoType } from "./proto/generated/greeter";

const protoPackage = protoPackageLoader<GreeterServiceProtoType>({
	path: "greeter.proto",
});

function main() {
	console.log("Running client...");
	const client = new protoPackage.greeter.GreeterService(
		`localhost:${PORT}`,
		grpcLibrary.credentials.createInsecure(),
	);

	const request: HelloRequest = {
		firstName: "John",
		lastName: "Doe",
	};

	client.SayHello(request, (err, response) => {
		if (err) {
			console.error("Error:", err);
		} else {
			console.log("Greeting:", response?.message);
		}
	});
}

main();
