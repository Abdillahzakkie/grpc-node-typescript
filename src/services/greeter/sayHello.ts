import type { HelloResponse__Output } from "../../proto/generated/greeter/HelloResponse";

export function sayHello({
	firstName,
	lastName,
}: {
	firstName: string;
	lastName: string;
}): HelloResponse__Output {
	const message = `Hello, ${firstName} ${lastName}! DragonLord greets you.`;
	return { message };
}
