import React, { PropsWithChildren } from 'react';

export default function Header({ children }: PropsWithChildren<{}>) {
	return (
		<h1 className="text-9xl">{children}</h1>
	);
}