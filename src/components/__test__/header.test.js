import React from "react";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Header } from "../Header/Header";

afterEach(cleanup);

describe("Testing Header Data", () => {
  it("Tests children", () => {
    const tree = renderer
      .create(
        <Header>
          <p>
            Trending Artists: Dark Alley | Dream Your Moments, Until I met you,
            Gimme some courage
          </p>
        </Header>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
