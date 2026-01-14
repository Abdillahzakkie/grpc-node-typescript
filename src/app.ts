import * as grpcLibrary from "@grpc/grpc-js";
import { protoPackageLoader } from "./constants";
import { sayHello } from "./controllers";
import { ProtoGrpcType as GreeterServiceProtoType } from "./proto/generated/greeter";

const server = new grpcLibrary.Server();

const protoPackage = protoPackageLoader<GreeterServiceProtoType>({
	path: "greeter.proto",
});

server.addService(protoPackage.greeter.GreeterService.service, {
	SayHello: sayHello,
});

export default server;
