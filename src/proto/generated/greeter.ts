import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
	GreeterServiceClient as _greeter_GreeterServiceClient,
	GreeterServiceDefinition as _greeter_GreeterServiceDefinition,
} from "./greeter/GreeterService";
import type {
	HelloRequest as _greeter_HelloRequest,
	HelloRequest__Output as _greeter_HelloRequest__Output,
} from "./greeter/HelloRequest";
import type {
	HelloResponse as _greeter_HelloResponse,
	HelloResponse__Output as _greeter_HelloResponse__Output,
} from "./greeter/HelloResponse";

type SubtypeConstructor<
	Constructor extends new (
		...args: any
	) => any,
	Subtype,
> = {
	new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
	greeter: {
		GreeterService: SubtypeConstructor<
			typeof grpc.Client,
			_greeter_GreeterServiceClient
		> & { service: _greeter_GreeterServiceDefinition };
		HelloRequest: MessageTypeDefinition<
			_greeter_HelloRequest,
			_greeter_HelloRequest__Output
		>;
		HelloResponse: MessageTypeDefinition<
			_greeter_HelloResponse,
			_greeter_HelloResponse__Output
		>;
	};
}
