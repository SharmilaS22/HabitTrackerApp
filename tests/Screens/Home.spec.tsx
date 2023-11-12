// Write unit tests for the Home screen here

import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../../src/screens/Home/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";


describe("Home", () => {
	it("home renders correctly", () => {
		const navigation = { navigate: jest.fn() };
		const { toJSON } = render(
			<SafeAreaProvider>
				<Home navigation={navigation} />
			</SafeAreaProvider>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});