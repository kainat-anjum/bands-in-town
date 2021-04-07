import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Card } from "../Card/Card";

const data = {
  name: "Mario",
  image: "https://photos.bandsintown.com/large/11058086.jpeg",
};

afterEach(cleanup);

describe("Testing Card Data", () => {
  it("Tests name and image", () => {
    const { image, name } = data;
    const tree = renderer
      .create(
        <Router>
          <Card image={image} name={name} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
