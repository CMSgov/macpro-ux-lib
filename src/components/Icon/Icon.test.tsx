import React from "react";
import { screen, render } from "../../test-setup";
import { Icon } from "./Icon";

describe("Tests for the Icon component.", () => {
  beforeAll(() => {
    render(<Icon iconChoice="accessibility_new" />);
  });

  it("Should render", () => {
    const IconComp = screen.getByRole("Icon");

    expect(IconComp).toBeInTheDocument();
  });
});
