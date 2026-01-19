// Original file: src/proto/greeter.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
	HelloRequest as _greeter_HelloRequest,
	HelloRequest__Output as _greeter_HelloRequest__Output,
} from "../greeter/HelloRequest";
import type {
	HelloResponse as _greeter_HelloResponse,
	HelloResponse__Output as _greeter_HelloResponse__Output,
} from "../greeter/HelloResponse";

export interface GreeterServiceClient extends grpc.Client {
	SayHello(
		argument: _greeter_HelloRequest,
		metadata: grpc.Metadata,
		options: grpc.CallOptions,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	SayHello(
		argument: _greeter_HelloRequest,
		metadata: grpc.Metadata,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	SayHello(
		argument: _greeter_HelloRequest,
		options: grpc.CallOptions,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	SayHello(
		argument: _greeter_HelloRequest,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	sayHello(
		argument: _greeter_HelloRequest,
		metadata: grpc.Metadata,
		options: grpc.CallOptions,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	sayHello(
		argument: _greeter_HelloRequest,
		metadata: grpc.Metadata,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	sayHello(
		argument: _greeter_HelloRequest,
		options: grpc.CallOptions,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
	sayHello(
		argument: _greeter_HelloRequest,
		callback: grpc.requestCallback<_greeter_HelloResponse__Output>
	): grpc.ClientUnaryCall;
}

export interface GreeterServiceHandlers
	extends grpc.UntypedServiceImplementation {
	SayHello: grpc.handleUnaryCall<
		_greeter_HelloRequest__Output,
		_greeter_HelloResponse
	>;
}

export interface GreeterServiceDefinition extends grpc.ServiceDefinition {
	SayHello: MethodDefinition<
		_greeter_HelloRequest,
		_greeter_HelloResponse,
		_greeter_HelloRequest__Output,
		_greeter_HelloResponse__Output
	>;
}
