import { GreeterServiceHandlers } from "../../proto/generated/greeter/GreeterService";

export const sayHello: GreeterServiceHandlers["SayHello"] = (
	call,
	callback
) => {
	const { firstName, lastName } = call.request;
	const message = `Hello, ${firstName} ${lastName}!`;
	callback(null, { message });
};
