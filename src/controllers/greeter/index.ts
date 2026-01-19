import type { GreeterServiceHandlers } from "../../proto/generated/greeter/GreeterService";

export const sayHello: GreeterServiceHandlers["SayHello"] = (
	call,
	callback,
) => {
	const { firstName, lastName } = call.request;
	const message = `Hello, ${firstName} ${lastName}!`;

	const requestMetadata = call.metadata.get("request-id")?.flat()[0];
	const responseMetadata = call.metadata.clone();
	if (requestMetadata) {
		responseMetadata.set("request-id", requestMetadata);
	}
	callback(null, { message }, responseMetadata);
};
