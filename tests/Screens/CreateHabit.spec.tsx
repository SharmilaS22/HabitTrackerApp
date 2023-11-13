// Write unit tests for the Home screen here

import React from "react";
import { render } from "@testing-library/react-native";
import CreateHabit from "../../src/screens/Home/CreateHabit";
import { SafeAreaProvider } from "react-native-safe-area-context";

describe("CreateHabit", () => {
	it("Create Habit screen renders correctly", () => {
		const navigation = { navigate: jest.fn(), goBack: jest.fn() };
		const { toJSON } = render(
			<SafeAreaProvider>
				<CreateHabit navigation={navigation} />
			</SafeAreaProvider>
		);
		expect(toJSON()).toMatchSnapshot();
	});
});