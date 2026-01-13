export function sayHello({
	firstName,
	lastName,
}: {
	firstName: string;
	lastName: string;
}) {
	const message = `Hello, ${firstName} ${lastName}! DragonLord greets you.`;
	return { message };
}
