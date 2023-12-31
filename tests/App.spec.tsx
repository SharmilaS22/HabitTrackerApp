// Unit tests for App.js using jest

import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

describe("App", () => {
	it("renders correctly", () => {
		const { toJSON } = render(<App />);
		expect(toJSON()).toMatchSnapshot();
	});
});