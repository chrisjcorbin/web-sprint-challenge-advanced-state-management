import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SmurfList from "./SmurfList";

describe("Add Smurf", () => {
  const initialState = {
      name: "",
      age: "",
      height: ""
    };

  const mockStore = configureStore();

  let store;

  test("Smurf Name", () => {
    store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SmurfList />
      </Provider>
    );

    expect(getByPlaceholderText("Enter Name")).not.toBeNull();
  });
});